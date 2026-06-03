import cloudimg from "./../assets/cloud.svg";
import { DynamicAvatar } from "./Dynamic";

const Staticprofile_ = () => {
  return (
    <div className="card text-center shadow p-3 card-custom" style={{ width: "18rem" }}>

      <DynamicAvatar img={cloudimg} />

      <div className="card-body">
        <h5 className="card-title">Bruce Wayne</h5>
        <p className="fw-bold">Gotham Guardian</p>
        <p className="card-text">
          I am vengeance. I am the night. I am Batman.
        </p>
      </div> 

    </div>   
  );
};

export default Staticprofile_
