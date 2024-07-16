import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div>
      <MdSupervisedUserCircle size={24} />
      <div >
        <span >Total Users</span>
        <span>10.273</span>
        <span>
          <span >12%</span>more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
