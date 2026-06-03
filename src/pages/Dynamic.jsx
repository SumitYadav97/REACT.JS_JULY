import './../assets/batman.svg'
import './../assets/lazy.svg'
import './../assets/cloud.svg'

export const DynamicAvatar = ({ img }) => {
    return (
        <div className="d-flex justify-content-center mb-3">
            <img
                src={img}
                alt="profile avatar"

                style={{
                    width: "100px",
                    height: "100px",
                    border:"50px"
                }}
            /> 
        </div>
    );
};