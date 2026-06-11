import React, { useEffect, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { deleteUser, getUserById, updateUser } from "../api/Service";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const UserDetail = async () => {
    try {
      const userID = localStorage.getItem("id"); // FIXED

      const response = await getUserById(userID);

      setUserData(response.data);

      reset(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // UPDATE USER
  const updateProfile = async (data) => {
    try {
      const response = await updateUser(data);

      if (response.status === 200) {
        toast.success("Profile updated successfully");
        setUserData(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    UserDetail();
  }, []);
  const removeUser = async (id) => {
    try {
      const response = await deleteUser(id);

      if (response.status === 200) {
        toast.success("record deleted successfully");
        // setUserData(response.data);
        localStorage.removeItem("id")
        localStorage.removeItem("login")
        setTimeout(() => {
          navigate("/Login");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = () => {
    console.log(userData?.id)
    removeUser(userData?.id)

  }

  const handleFormSubmit = (data) => {
    data.id = localStorage.getItem("id");
    updateProfile(data);
  };
  return (
    <>
      <h1 className="text-center">Profile</h1>

      <pre>{JSON.stringify(userData, null, 2)}</pre>

      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          <p className="text-danger">{errors.username?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="pasword"
            placeholder="Password"
            {...register("pasword", { required: "Password is required" })}
          />
          <p className="text-danger">{errors.pasword?.message}</p>
        </Form.Group>
        <div className="text-center">
          <Button
            className="theme-btn-1 btn btn-effect-1 border-light"
            type="submit"
          >
            Update
          </Button>
          <span>
            <Button
              variant="danger"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </span>
        </div>
      </Form>

      <ToastContainer />
    </>
  );
};

export default Profile;