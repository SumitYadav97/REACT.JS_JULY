import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge, Button, Col, Container } from "react-bootstrap";
import { ArrowBarRight, Moon, Sun } from "react-bootstrap-icons";
import { BsArrowBarRight } from "react-icons/bs";
import { FaArrowRight, } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { api } from "../api/Service";

const ProductRootlayout = () => {


//   product
  const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if (count >= 10) {
            alert("Maximum Amount Reached");
            return;
        }
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count <= 0) {
            alert("You can’t decrease value below 0 ( zero )");
            return;
        }
        setCount(count - 1);
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('/products')
        .then((response) => {
            setProducts(response.data.products);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
}, []);

    if (loading) {
        return <h2 className='text-center text-info'>Loading Your Products</h2>;
    }

    if (error) {
        return <h2 className='text-center text-danger'>{error}</h2>;
    }

  return (
    <>
      

      
          <Col>
            <main >
              <div className="card shadow-sm border-0 min-vh-100">
                <div className="card-body">
                  <Outlet />
                </div>
              </div>
            </main>
          </Col>
       
  
    </>
  );
};


export default ProductRootlayout;