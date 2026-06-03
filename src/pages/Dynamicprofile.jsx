import { DynamicAvatar } from "./Dynamic";

const DynamicProfileCard = ({ name, role, desc, img }) => {
    return (
        <div className="card text-center shadow p-3 card-custom" style={{ width: "18rem" }}>
            <DynamicAvatar img={img} />

            <div className="card-body">

                <h5 className="card-title">{name}</h5>
                <p className="fw-bold">{role}</p>
                <p className="card-text">{desc}</p>
            </div>
 
        </div>
    );
};
  
export default DynamicProfileCard;