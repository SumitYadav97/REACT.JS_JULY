import { Button, Col, Form, Row } from 'react-bootstrap';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
const ReactHookForm = () => {

    const { register, handleSubmit, reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            firstname: "Sumit",
            lastname: "Yadav",
            age: 22,
            password: "Sumit@123",
            phoneNo: "9586456744",
            email: "sumit@gmail.com",
            country: "USA",
            selectstate: "Delhi",
            cities: ["Delhi", "Ahmedabad"],
            address: "Delhi, India",
            zip: "110043",
            joiningDate: "2026-05-19",
            gender: "Male",
            hobby: ["Drawing", "Dancing"],
            terms: true
        }
    });

    const handleOnSubmit = (data) => {
        console.log(data);
        const toastId = toast("Form submitted successfully...");

        reset({
            firstname: "",
            lastname: "",
            age: "",
            password: "",
            phoneNo: "",
            email: "",
            country: "",
            state: "",
            cities: [],
            address: "",
            zip: "",
            joiningDate: "",
            gender: "",
            hobby: [],
            profilePicture: null,
            Resume: null,
            terms: false
        });


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
                    <Form.Group as={Col} md={6} controlId="age">
                        <Form.Label>Age</Form.Label>

                        <Form.Control
                            type="number"
                            {...register("age", {
                                required: "The age is required.",
                                min: {
                                    value: 18,
                                    message: "Age must be greater than 18",
                                },
                                max: {
                                    value: 40,
                                    message: "Age must be less than 40",
                                },
                            })}
                        />

                        <div className="text-danger">
                            {errors?.age?.message}
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
                    <Form.Group as={Col} md={6} controlId="phoneNo">
                        <Form.Label>Phone no</Form.Label>

                        <Form.Control
                            type="number"
                            placeholder="Enter phone number"
                            {...register("phoneNo", {
                                required: "Phone number is required.",
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            })}
                        />

                        <div className="text-danger">
                            {errors?.phoneNo?.message}
                        </div>
                    </Form.Group>





                    {/* Email Address */}
                    <Form.Group as={Col} md={6} controlId="Email Address">
                        <Form.Label>Email Address</Form.Label>

                        <Form.Control type=
                            "email"
                            {...register("email",
                                {
                                    required: "The email is required.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address",
                                    }
                                })
                            } />
                        <div className=
                            "text-danger">{errors?.email?.message}</div>
                    </Form.Group>


                    {/* Country */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Select Country</Form.Label>

                        <Form.Select {...register("country")}>
                            <option value="">Select country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                        </Form.Select>
                    </Form.Group>


                    {/* State */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>State</Form.Label>

                        <Form.Select {...register("selectstate")}>
                            <option value="">Select State</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Himachal Pradesh ">Himachal Pradesh</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </Form.Select>
                    </Form.Group>

                    {/*  Select Preferd Cities */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Select Preferred Cities</Form.Label>

                        <Form.Select
                            multiple
                            {...register("cities", {
                                required: "Please select city",
                                validate: (value) => {
                                    return value.length >= 2 || "Select at least two cities";
                                }
                            })}
                        >
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Somnath">Somnath</option>
                        </Form.Select>

                        <div className="text-danger">
                            {errors?.cities?.message}
                        </div>
                    </Form.Group>

                    {/*  Complete Address*/}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Complete Address</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter full address"
                            {...register("address", {
                                required: "Address is required",
                            })}
                        />

                        <div className="text-danger">
                            {errors?.address?.message}
                        </div>
                    </Form.Group>

                    {/* zip code */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>PIN Code</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter PIN code"
                            {...register("zip", {
                                required: "PIN code is required",
                                pattern: {
                                    value: /^\+?[1-9]\d{5,5}$/,
                                    message: "Enter a valid 6-digit PIN code",
                                },
                            })}
                        />

                        <div className="text-danger">
                            {errors?.zip?.message}
                        </div>
                    </Form.Group>

                    {/* Joining Date */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Joining Date</Form.Label>

                        <Form.Control
                            type="date"
                            {...register("joiningDate", {
                                required: "Joining date is required.",
                                validate: (value) => {
                                    const today = new Date();
                                    today.setHours(0, 0, 0, 0);

                                    const selectedDate = new Date(value);
                                    selectedDate.setHours(0, 0, 0, 0);

                                    return (
                                        selectedDate <= today ||
                                        "Joining date must be less than or equal to today's date"
                                    );
                                },
                            })}
                        />

                        <div className="text-danger">
                            {errors?.joiningDate?.message}
                        </div>
                    </Form.Group>


                    {/* Gender */}
                    <Form.Group as={Col} md={6} className=
                        "mb-3" controlId=
                        "gender">
                        <Form.Label>Gender</Form.Label>
                        <br />
                        {["Male"
                            ,
                            "Female"
                            ,
                            "Transgender"].map((gender, index) => {
                                return (
                                    <Form.Check
                                        key={index}
                                        inline
                                        label={gender}
                                        id={gender}
                                        type="radio"
                                        value={gender}
                                        {...register("gender", {
                                            required: "Please select your gender"
                                        })}
                                    />);
                            })}
                        <div className=
                            "text-danger">{errors?.gender?.message}</div>
                    </Form.Group>


                    {/* Hobbies */}
                    <Form.Group as={Col} md={6} className=
                        "mb-3" controlId=
                        "hobbies">
                        <Form.Label>Hobbies</Form.Label>
                        <br />
                        {["Drawing"
                            ,
                            "Singing"
                            ,
                            "Dancing"].map((hobby, index) => {
                                return (
                                    <Form.Check
                                        key={index} inline label={hobby} id={hobby}
                                        type="checkbox"
                                        value={hobby}
                                        {...register("hobby", {
                                            required: "Please select at least two hobby",
                                            validate: (value) => {
                                                return value.length >= 2 || "Select at least two hobby";
                                            }
                                        })} />);
                            })}
                        <div className=
                            "text-danger">{errors?.hobby?.message}</div>
                    </Form.Group>

                    {/* Profile */}
                    <Col md={6}>
                        <Form.Control type=
                            "file"
                            {...register("profilePicture"
                                , {
                                    required: "Profilepicture is required."
                                    ,
                                    validate: {
                                        acceptedFormats: (value) => {
                                            if (!value || value.length === 0) return true; // Skip validation if no file is selected
                                            const file = value[0]; // Assuming single file upload
                                            const acceptedFormatList = ["image/jpeg"
                                                ,
                                                "image/png"
                                                ,
                                                "image/gif"];
                                            return (acceptedFormatList.includes(file.type) || "Only JPEG, PNG, and GIF images are allowed.");
                                        },
                                        fileSize: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const maxSize = 6 * 1024 * 1024; // 5MB in bytes
                                            return (file.size <= maxSize || "File size must be less than 6MB.");
                                        }
                                    }
                                })}
                        />
                        <div className=
                            "text-danger">{errors?.profilePicture?.message}</div>
                    </Col>
                    {/* Resume */}
                    <Col md={6}>
                        <Form.Control
                            type="file"
                            accept=".pdf"

                            {...register("Resume", {
                                required: "Resume is required.",
                                validate: {
                                    acceptedFormats: (value) => {
                                        if (!value || value.length === 0) return true;

                                        const file = value[0];
                                        return (
                                            file.type === "application/pdf" ||
                                            "Only PDF files are allowed."
                                        );
                                    },
                                    fileSize: (value) => {
                                        if (!value || value.length === 0) return true;

                                        const file = value[0];
                                        const maxSize = 6 * 1024 * 1024; // 6MB
                                        return file.size <= maxSize || "File size must be less than 6MB.";
                                    }
                                }
                            })}
                        />
                        <div className=
                            "text-danger">{errors?.Resume?.message}</div>
                    </Col>

                    {/* Terms and Condition */}

                    <Form.Group as={Col} md={6} className='mt-3'>
                        <Form.Check
                            type="checkbox"
                            label="I agree to the Terms & Conditions"
                            {...register("terms", {
                                required: "You must accept the Terms & Conditions",
                            })}
                        />

                        <div className="text-danger">
                            {errors?.terms?.message}
                        </div>
                    </Form.Group>
                </Row>

                <Button type="submit" >Submit
                </Button>
            </Form>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
};

export default ReactHookForm;