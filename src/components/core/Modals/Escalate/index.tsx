import { Problem } from "@/typings";
import { ApiEndpoint } from "@/constants/index";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { Cells, Sectors, Districts, Provinces, Villages } from "rwanda";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { getCookies } from "cookies-next";
import { useEffect } from "react";
import { Select } from "@mantine/core";
const EscalateProblem = ({
  problem,
  close,
}: {
  problem: Problem;
  close: Function;
}) => {
  const [localLevels, setLocalLevels] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [organizationLevel, setOrganisationLevel] = React.useState("");
  const [userRole, setUserRole] = React.useState("");
  const [nextUrwego, setNextUrwego] = React.useState("");

  useEffect(() => {
    const { token } = getCookies();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setUserRole(decodedToken.role);

      if (decodedToken.role === "ADMIN") {
        // setOrganisationLevel("INTARA");
        // const provinces = Provinces();
        // setLocalLevels([...new Set(provinces)] as never[]);
        toast.error("You are not allowed to perform this action");
      } else if (decodedToken.role === "UMUYOBOZI") {
        ApiEndpoint.get(`/leaders/my_profile`)
          .then((res) => {
            const leaderData = res?.data?.data?.leader;
            if (leaderData) {
              const { organizationLevel, location } = leaderData;
              setOrganisationLevel(organizationLevel);
              setLocation(location);
              console.log(organizationLevel);
              console.log(location);
              let localLevels = [];

              switch (organizationLevel) {
                case "AKARERE":
                  localLevels = Provinces(location);
                  setNextUrwego("INTARA");
                  break;
                case "UMURENGE":
                  localLevels = Districts(location);
                  setNextUrwego("AKARERE");
                  break;
                case "AKAGARI":
                  localLevels = Sectors(location);
                  setNextUrwego("UMURENGE");
                  break;
                case "UMUDUGUDU":
                  localLevels = Cells(location);
                  setNextUrwego("AKAGARI");
                  break;
                default:
                  break;
              }
              console.log("localLevels:", localLevels);
              setLocalLevels([...new Set(localLevels)] as never);
            }
          })
          .catch((error) => {
            console.error("Error fetching UMUYOBOZI data:", error);
          });
      } else {
        toast.error("You are not allowed to perform this action");
      }
    }
  }, []);

  const [formData, setFormData] = React.useState({
    nextUrwego: nextUrwego,
    problemId: problem.id,
    target: location,
  });

  const escalateProblem = () => {
    setLoading(true);
    const formData = {
      nextUrwego: nextUrwego,
      problemId: problem.id,
      target: location,
    };
    ApiEndpoint.post("/problems/escalate", formData)
      .then(() => {
        notifications.show({
          title: "Escalate Problem",
          message: "Successfully Escalated Problem!",
          autoClose: 5000,
          icon: <FaRegCheckCircle />,
        });
        close();
      })
      .catch(() => {
        notifications.show({
          title: "Escalate Problem",
          message: "Error occurred when escalating a problem!",
          color: "#FF555D",
          autoClose: 5000,
          icon: <RxCrossCircled />,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center">
      <header className="w-full text-center font-extrabold text-lg">
        Escalate Problem
      </header>
      <div className="w-full flex flex-col">
        <div className="flex-row flex-1">
          <label htmlFor="problemId" className="font-bold">
            Problem Id
          </label>
          <input
            type="text"
            className="sub_input"
            id="problemId"
            name="problemId"
            disabled
            value={problem.id}
          />
        </div>
        <div className="flex-row flex-1">
          <label htmlFor="nextUrwego" className="font-bold">
            Next Level
          </label>
          <input
            type="text"
            className="sub_input"
            id="nextUrwego"
            name="nextUrwego"
            value={nextUrwego}
            disabled
          />
        </div>

        <div className="flex-col flex-1">
          <label htmlFor="location" className="font-bold">
            Target Location
          </label>
          <Select
            aria-label="Location"
            data={localLevels}
            value={location}
            onChange={setLocation}
          />
        </div>

        <div className="w-full flex justify-between py-[2%] md:px-[10%]">
          <button
            onClick={() => close()}
            className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#ccc] text-black"
          >
            Cancel
          </button>
          <button
            onClick={escalateProblem}
            className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#FF555D] text-black"
          >
            {loading ? (
              <div className="w-full h-full flex items-center justify-center">
                <ClipLoader size={24} color="white" />
              </div>
            ) : (
              "Escalate"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EscalateProblem;
