import { entryTypes } from "@/app/constants/data";
import { MdSupervisedUserCircle } from "react-icons/md";

function Card({data,type,title}) {
  return (
    <div className="bg-[#182237] p-20 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-[#2e374a] mx-2">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="text-3xl" >Total {title}</span>
        <span className="font-medium text-3xl" style={{color:`${entryTypes[type]}`}}>₹{data}</span>
      </div>
    </div>
  );
}

export default Card;
