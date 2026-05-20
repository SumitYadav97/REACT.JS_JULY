import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactHookForm = () => {

    const {
        formState: { errors },
        register,
        handleSubmit
    } = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
        toast.success("Form submitted successfully!");
    };

    return (
        <>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>

                <Row className='mb-3'>

                    {/* First Name */}
                    <Form.Group as={Col} md={6} controlId="firstname">
                        <Form.Label>First name</Form.Label>

                        <Form.Control
                            type="text"
                            {...register("firstname", {
                                required: "The firstname is required."
                            })}
                        />

                        <div className="text-danger">
                            {errors?.firstname?.message}
                        </div>
                    </Form.Group>

                    {/* Last Name */}
                    <Form.Group as={Col} md={6} controlId="lastname">
                        <Form.Label>Last name</Form.Label>

                        <Form.Control
                            type="text"
                            {...register("lastname", {
                                required: "The last name is required."
                            })}
                        />

                        <div className="text-danger">
                            {errors?.lastname?.message}
                        </div>
                    </Form.Group>

                    {/* Age */}
                    <Form.Group as={Col} md={6} controlId="email">
                        <Form.Label>Age</Form.Label>

                        <Form.Control type=
                            "number"
                            {...register("age"
                                ,
                                {
                                    required: "The age is required."
                                    ,
                                    min: {
                                        value: 18, message: "Age must be greater than 18"
                                        ,
                                        max: { value: 50, message: "Age must be less than 50" },
                                    }
                                })
                            } />
                        <div className=
                            "text-danger">{errors?.age?.message}</div>

                        <div className="text-danger">
                            {errors?.email?.message}
                        </div>
                    </Form.Group>

                    {/* Password */}
                    <Form.Group as={Col} md={6} controlId="password">
                        <Form.Label>Password</Form.Label>

                        <Form.Control type=
                            "password"
                            {...register("password",
                                {
                                    required: "The password is required.",
                                    validate: (value) => {
                                        if (!value) return true;
                                        if (value.includes(" ")) return "Password cannot contain spaces";
                                        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(value);
                                        const hasNumber = /\d/.test(value);
                                        if (!hasSpecialChar || !hasNumber) {
                                            return "Password must contain at least one special character and one number.";
                                        }
                                        return true;
                                    },
                                })} />
                        <div className=
                            "text-danger">{errors?.password?.message}</div>
                    </Form.Group>

                    {/* Phone no */}
                    <Form.Group as={Col} md={6} controlId="joiningDate">
                        <Form.Label>Phone no</Form.Label>

                        <Form.Control
                            type="date"
                            {...register("joiningDate", {
                                required: "Joining date is required.",
                                validate: (value) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);

                                    const selectedDate = new Date(value);

                                    return (
                                        selectedDate < today ||
                                        "Joining date must be less than today's date"
                                    );
                                },
                            })}
                        />

                        <div className="text-danger">
                            {errors?.joiningDate?.message}
                        </div>
                    </Form.Group>

                    {/* Country */}
                    <Form.Group as={Col} md={6} controlId="country">
                        <Form.Label>Country</Form.Label>

                        <Form.Select
                            {...register("country", {
                                required: "Country is required."
                            })}
                        >
                            <option value="">Select country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                        </Form.Select>

                        <div className="text-danger">
                            {errors?.country?.message}
                        </div>
                    </Form.Group>

                </Row>

                <Button type="submit">
                    Submit form
                </Button>
            </Form>

            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="colored"
            />
        </>
    );
};

export default ReactHookForm;