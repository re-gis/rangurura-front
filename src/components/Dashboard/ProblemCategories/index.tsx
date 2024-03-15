import Header from "../Header";
import ProgressComponent from "./ProgressComponent";

const ProblemsCategories = () => {
  return (
    <div className="w-full flex flex-col">
      <Header header="Problems Categories" />
      <ProgressComponent className="gap-3" />
    </div>
  );
};
export default ProblemsCategories;
