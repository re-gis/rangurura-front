import Graph from "@/components/core/graph";
import Header from "../Header";

const ReportProblems = () => {
  return (
    <div className="w-full flex flex-col">
      <Header header="Top Problems Reports" />

      <Graph />
    </div>
  );
};
export default ReportProblems;
