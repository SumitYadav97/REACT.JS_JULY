import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { FcFolder } from "react-icons/fc";
import { LuFolderCode } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const RbBreadCrumb = () => {

  return (
    <Breadcrumb
      className="d-flex align-items-center" listProps={{ className: "align-items-center" }} >


      <Breadcrumb.Item bsPrefix=" " className="d-inline-flex align-items-center">
        <FcFolder className="me-1" /> Home <span><IoIosArrowForward />
        </span>
      </Breadcrumb.Item>

      <Breadcrumb.Item bsPrefix=" "  className="d-inline-flex align-items-center">
        <FcFolder className="me-1" /> Library<span><IoIosArrowForward />
        </span>
      </Breadcrumb.Item>

      <Breadcrumb.Item bsPrefix=" "  className="d-inline-flex align-items-center">
        <LuFolderCode className="me-1" /> <span>To-Do-List</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default RbBreadCrumb;