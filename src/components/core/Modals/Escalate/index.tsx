import { Problem } from "@/typings";
import { ApiEndpoint } from "@/constants/index";
import * as React from "react";
import { notifications } from "@mantine/notifications";
import { ClipLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import {
  categories,
  leaderCategory,
  organisationLevels,
} from "@/constants/Enums";
import { Cells, Sectors, Districts, Provinces, Villages } from "rwanda";
import { jwtDecode } from "jwt-decode";
import { Modal } from "@nextui-org/react";
import toast from "react-hot-toast";
import { getCookies } from "cookies-next";
import { useEffect } from "react";


const EscalateProblem = ({
  problem,
  close,
}: {
  problem: Problem;
  close: Function;
}) => {


  const [localLevels, setLocalLevels] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [organisationLevel, setOrganisationLevel] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { token } = getCookies();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setUserRole(decodedToken.role);
      if (decodedToken.role === "ADMIN") {
        setOrganisationLevel("INTARA");
        const provinces = Provinces();
        setLocalLevels([...new Set(provinces)] as never[]);
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
                case "INTARA":
                  localLevels = Districts(location);
                  break;
                case "AKARERE":
                  localLevels = Sectors(location);
                  break;
                case "UMURENGE":
                  localLevels = Cells(location);
                  break;
                case "AKAGARI":
                  localLevels = Villages(location);
                  break;
                case "UMUDUGUDU":
                  toast.error("You are not allowed to perform this action");
                  break;
                default:
                  break;
              }

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
  
  const formData = React.useState({  
      nextUrwego: "",
      problemId: problem.id,
      target: ""
  })
  const deleteProblem = () => {
    setLoading(true);
    ApiEndpoint.put(`/problem/update/${problem.id}`,formData)
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
            Name
          </label>
          <input
            type="text"
            className="sub_input"
            id="problemId"
            name="problemId"
            value={formData.problemId}
            // onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-between md:px-[10%]">
          <button
            onClick={() => close()}
            className="py-3 px-8 rounded-3xl flex items-center justify-center bg-[#ccc] text-black"
          >
            Cancel
          </button>
          <button
            onClick={deleteProblem}
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
function useState(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}

