import React from "react";

interface PaginationFormProps {
  pageIndex: number;
  onPaginate: (page: number) => void;
}

const PaginationForm: React.FC<PaginationFormProps> = ({
  pageIndex,
  onPaginate,
}) => {
  const [page, setPage] = React.useState(pageIndex + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPage = page ? Number(page) - 1 : 0;
    onPaginate(newPage);
  };

  return (
    <form
      className="flex focus-within:border-mainPurple border rounded-md overflow-hidden items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
        className="border p-1 rounded w-16"
      />
      <button
        type="submit"
        className="bg-mainPurple h-[30px] px-1 text-white hover:bg-purple-950 duration-300 flex items-center justify-center"
      >
        Go
      </button>
    </form>
  );
};

export default PaginationForm;
