import DistrictOverview from "@/components/Dashboard/DistrictsOverview";
import ReportProblems from "@/components/Dashboard/Reports";
import ProblemsTable from "@/components/core/Tables/Problems";
import SuggestionsTable from "@/components/core/Tables/Suggestions";

const Page = () => {
  return (
    <div className="w-full h-[90%] flex items-center justify-between mt-4">
      <div className="w-full h-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-[1.5rem] font-extrabold">Suggestions</h1>
        </div>

        <div className="w-full h-[85%]">
          <SuggestionsTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
