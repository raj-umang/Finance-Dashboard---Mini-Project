import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div className="bg-[#182237] p-20 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="font-medium text-2xl">10.273</span>
        <span className="text-2xl font-light">
          <span className="text-lime-400">12%</span>more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
