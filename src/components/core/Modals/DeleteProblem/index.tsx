import { Problem } from "@/typings";

const DeleteProblem = ({problem}: {problem: Problem}) =>{
    return(
        <div className="w-full h-full flex flex-col items-center">
            <header className="w-full text-center">Are you sure you want to delete this Problem?</header>
            <div className="w-full flex flex-col gap-3">
                <h2>Problem: {problem.ikibazo}</h2>
                <h2>Location: {problem?.target}</h2>

                <div>
                    <button className="py-3 px-6 rounded-lg flex items-center justify-center bg-[#ccc] text-black">
                        cancel
                    </button>
                    <button className="py-3 px-6 rounded-lg flex items-center justify-center bg-[#FF555D] text-black">
                        delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProblem