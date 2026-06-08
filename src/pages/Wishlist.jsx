import React, { useContext } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { WishlistContext } from "../Context/Context";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } =
    useContext(WishlistContext);
  return (
    <>
      <h1 className="text-center">Wishlist</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>In Stock?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlistState.wishlistItems.map((item) => (
            <tr key={item.id}>
              <td>
                <Image
                  src={item.thumbnail}
                  style={{ height: "100px", width: "100px" }}
                />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                {item.stock > 0
                  ? "In Stock"
                  : "Out of Stock"}
              </td>
              <td>
                <Button size="sm" variant="outline-danger"
                  onClick={() =>
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item.id,
                    })
                  }
                >
                  <Trash /> REMOVE
                </Button>

                <Button
                  size="sm"
                  variant="outline-success"
                  className="ms-3"
                >
                  Move to Cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Wishlist;