import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./Layouts/Rootlayout";
import Counterwithusestate from "./pages/Counterwithusestate";
import ReducerCounter_ from "./pages/Reducercounter";
import Staticprofile_ from "./pages/Staticprofile";

import batmanImg from "./assets/batman.svg";
import cloudImg from "./assets/cloud.svg";
import lazy from "./assets/lazy.svg";
import Todolist from "./pages/Todolist";
import EmployeeTable from "./pages/Rbbadge";
import RbBreadCrumb from "./pages/RB_Breadcrumb";
import RB_Buttons from "./pages/RB_Buttons";
import Button_Group from "./pages/RB_Buttongroup";
import Basic_card from "./pages/Cards";
import RB_Listgroup from "./pages/RB_Listgroup";
import RB_Figure from "./pages/RB_Figure";
import RB_Pagination from "./pages/RB_Pagination";
import Progress from "./pages/RB_Progressbar";
import RB_Spinners from "./pages/RB_Spinner";
import RB_Accordion from "./Interactive_Components/Accordion";
import RB_Dropdown from "./Interactive_Components/RB_Dropdown";
import Dynamic_EmployeeTable from "./pages/Rbbadge";
import RB_CarouselFade from "./Interactive_Components/RB_Carousel";
import RB_Modals_ from "./Interactive_Components/RB_Modals";
import NavbarWithOffcanvas from "./Interactive_Components/Navbar&offcanvas";
import RB_Nav_Tabs from "./Interactive_Components/RB_Nav&Tabs";
import RB_Overlay from "./Interactive_Components/RB_Overlay";
import RHF_YUP from "./Form/RHF_YUP";
import ReactHookForm from "./Form/RHF_Form";
import Blog_Listing from "./Blog/Blog_Listing";
import Blog_Details from "./Blog/Blog_Details";
import WishlistProvider from "./Context/providers/WishlistProvider";
import Wishlist from "./pages/Wishlist";
import Products_ from "./pages/Products";


const App = () => {
  return (

    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="counter1" element={<Counterwithusestate />} />
            <Route path="counter2" element={<ReducerCounter_ />} />
            <Route path="profile" element={<Staticprofile_ />} />
            <Route path="todolist" element={<Todolist />} />
            <Route path="table" element={<EmployeeTable />} />
            <Route path="breadcrumb" element={<RbBreadCrumb />} />
            <Route path="buttons" element={<RB_Buttons />} />
            <Route path="button_group" element={<Button_Group />} />
            <Route path="Basic_card" element={<Basic_card />} />
            <Route path="RB_Listgroup" element={<RB_Listgroup />} />
            <Route path="RB_Figure" element={<RB_Figure />} />
            <Route path="RB_Pagination" element={<RB_Pagination />} />
            <Route path="RB_Progressbar" element={<Progress />} />
            <Route path="RB_Spinner" element={<RB_Spinners />} />
            <Route path="RB_Accordion" element={<RB_Accordion />} />
            <Route path="RB_Dropdown" element={<RB_Dropdown />} />
            <Route path="Dynamic_EmployeeTable" element={<Dynamic_EmployeeTable />} />
            <Route path="RB_Carousel" element={<RB_CarouselFade />} />
            <Route path="RB_Modals_" element={<RB_Modals_ />} />
            <Route path="NavbarWithOffcanvas" element={<NavbarWithOffcanvas />} />
            <Route path="RB_Nav_Tabs" element={<RB_Nav_Tabs />} />
            <Route path="RB_Nav_Tabs" element={<RB_Nav_Tabs />} />
            <Route path="RB_Overlay" element={<RB_Overlay />} />
            <Route path="ReactHookForm" element={<ReactHookForm />} />
            <Route path="RHF_YUP" element={<RHF_YUP />} />
            <Route path="Blog_Listing" element={<Blog_Listing />} />
            <Route path="Blog_Details" element={<Blog_Details />} />
            <Route path="Wishlist" element={<Wishlist />} />
            <Route path="Products" element={<Products_ />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>

  );
};

export default App;