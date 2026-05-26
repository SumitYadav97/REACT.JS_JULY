import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup';

const schema = yup.object().shape({

    firstname:
        yup.string().required("Please enter firstname"),
    Lastname:
        yup.string().required("Please enter Lastname"),
    age:
        yup.number().typeError("Please enter Age")
            .min(18, "Age must be greater then 18")
            .max(40, "Age must be less then 40"),
    password: yup
        .string()
        .required("Password is required")
        .min(4,
            "Password must be greater than 4")
        .max(10,
            "You can use maximum 10 character for password")
        .matches(
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/,
            "Password must contain at least one special character"
        )
        .matches(/\d/,
            "Password must contain at least one digit")
        .test("inBetweenSpace"
            ,
            "Password cannot contain spaces"
            , (value) => {
                if (value.includes(" ")) return false; else return true;
            }),
    phoneNo: yup.string().matches(/^\+?[1-9]\d{9,10}$/, "Enter a valid phone number")
        .required("Phone number is required."),

    email: yup.string().matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter a valid email address")
        .required("Email address is required."),
    country: yup.string().required("Please select the country it's required"),
    state: yup.string().required("Please select the state it's required"),
    city: yup
        .array()
        .min(2, "Please select at least 2 cities")
        .required("City is required"),
    address: yup.string().required("Please enter your address, it's required"),
    zip: yup.string().matches(/^\+?[1-9]\d{5,5}$/, "Enter valid PIN value"),
    joiningDate: yup
        .date()
        .typeError("Please enter a valid date")
        .max(new Date(), "Joining date must be less than or equal to today's date")
        .required("Joining date is required"),
    gender: yup.string().required("Gender is required"),
    hobbies: yup.array()
        .typeError("Please select a hobbies")
        .min(2, "Please select at least two hobbies"),
    profilePicture: yup
        .mixed()
        .required("Profile picture is required")
        .test(
            "fileFormat",
            "Only JPG, JPEG, PNG and GIF files are allowed",
            (value) => {
                if (!value || !value[0]) return false;

                const allowedTypes = [
                    "image/jpeg",
                    "image/png",
                    "image/gif",
                ];

                return allowedTypes.includes(value[0].type);
            }

        ),
    Resume: yup
        .mixed()
        .required("Resume is required")
        .test(
            "fileFormat",
            "Only PDF and DOCX files are allowed",
            (value) => {
                if (!value || !value[0]) return false;
                const allowedTypes = [
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ];
                return allowedTypes.includes(value[0].type);
            }
        ),
    termsandconditions: yup.bool().oneOf([true], "Terms must be accepted")

})
const RHF_YUP = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstname: "Sumit",
            Lastname: "Yadav",
            age: "21",
            password: "sumit@100",
            phoneNo: "7703859151",
            country: "USA",
            state: "Delhi",
            email: "Indixpert@gmail.com",
            city: ["Delhi", "Somnath"],
            address: "Delhi,Dwarka",
            zip: "110043",
            joiningDate: "2026-05-22",
            gender: "Male",
            hobbies: ["Dancing", "Drawing"],
            termsandconditions: "true"
        }

    })
    const handleOnSubmit = (data) => {
        console.log(data)
        const toastId = toast("Form submitted successfully...");
        reset({
            firstname: "",
            Lastname: "",
            age: "",
            password: "",
            phoneNo: "",
            email: "",
            country: "",
            state: "",
            city: [],
            address: "",
            zip: "",
            joiningDate: "",
            gender: "",
            hobbies: [],
            profilePicture: null,
            Resume: null,
            termsandconditions: false
        });
    }

    return (
        <div className='container'>

            <h1>YUP FORM</h1>

            <Form onSubmit={handleSubmit(handleOnSubmit)}>

                <Row className='mb-3'>

                    <Form.Group as={Col} md={6} controlId="firstname">

                        <Form.Label>First Name</Form.Label>

                        <Form.Control
                            type="text"
                            {...register("firstname")}
                        />

                        <div className="text-danger">
                            {errors.firstname?.message}
                        </div>

                    </Form.Group>

                    {/* Last name */}
                    <Form.Group as={Col} md={6} controlId="Lastname">
                        <Form.Label>Last Name</Form.Label>

                        <Form.Control
                            type="text"
                            {...register("Lastname")}
                        />

                        <div className="text-danger">
                            {errors?.Lastname?.message}
                        </div>
                    </Form.Group>
                    {/* Age */}
                    <Form.Group as={Col} md={6} controlId="age">
                        <Form.Label>Age</Form.Label>

                        <Form.Control
                            type="number"
                            {...register("age")} />

                        <div className="text-danger">
                            {errors?.age?.message}
                        </div>
                    </Form.Group>

                    {/* Password */}
                    <Form.Group as={Col} md={6} controlId="password">
                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type="password"
                            {...register("password")} />
                        <div className=
                            "text-danger">{errors?.password?.message}</div>
                    </Form.Group>

                    {/* Phone no */}
                    <Form.Group as={Col} md={6} controlId="phoneNo">
                        <Form.Label>Phone no</Form.Label>

                        <Form.Control
                            type="number"
                            {...register("phoneNo")} />

                        <div className="text-danger">
                            {errors?.phoneNo?.message}
                        </div>
                    </Form.Group>

                    {/* Email Address */}
                    <Form.Group as={Col} md={6} controlId="email">
                        <Form.Label>Email Address</Form.Label>

                        <Form.Control type=
                            "email"
                            {...register("email")} />
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
                        <div className="text-danger">
                            {errors?.country?.message}
                        </div>
                    </Form.Group>

                    {/* State */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>State</Form.Label>

                        <Form.Select {...register("state")}>
                            <option value="">Select State</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Himachal Pradesh ">Himachal Pradesh</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </Form.Select>
                        <div className=
                            "text-danger">
                            {errors?.state?.message}
                        </div>
                    </Form.Group>


                    {/*  Select Preferd Cities */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Select Preferred Cities</Form.Label>

                        <Form.Select
                            multiple
                            {...register("city")}>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Somnath">Somnath</option>
                        </Form.Select>

                        <div className="text-danger">
                            {errors?.city?.message}
                        </div>
                    </Form.Group>
                    {/*  Complete Address*/}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Complete Address</Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter full address"
                            {...register("address")} />

                        <div className="text-danger">
                            {errors?.address?.message}
                        </div>
                    </Form.Group>

                    {/* zip code */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>PIN Code</Form.Label>

                        <Form.Control
                            type="text"
                            {...register("zip")} />

                        <div className="text-danger">
                            {errors?.zip?.message}
                        </div>
                    </Form.Group>

                    {/* Joining Date */}
                    <Form.Group as={Col} md={6}>
                        <Form.Label>Joining Date</Form.Label>

                        <Form.Control
                            type="date"
                            {...register("joiningDate")} />
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
                                        {...register("gender")} />);
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
                                        {...register("hobbies")} />);
                            })}
                        <div className=
                            "text-danger">{errors?.hobbies?.message}</div>
                    </Form.Group>

                    {/* Profile */}
                    <Col md={6}>
                        <Form.Control type=
                            "file"
                            {...register("profilePicture")} />
                        <div className=
                            "text-danger">{errors?.profilePicture?.message}</div>
                    </Col>

                    {/* Resume */}
                    <Col md={6}>
                        <Form.Control
                            type="file"
                            accept=".pdf"

                            {...register("Resume")} />
                        <div className=
                            "text-danger">{errors?.Resume?.message}</div>
                    </Col>
                    {/* Terms and Condition */}

                    <Form.Group as={Col} md={6} className='mt-3'>
                        <Form.Check
                            type="checkbox"
                            label="I agree to the Terms & Conditions"
                            {...register("termsandconditions")} />

                        <div className="text-danger">
                            {errors?.termsandconditions?.message}
                        </div>
                    </Form.Group>

                </Row>

                <Button className='d-flex' type="submit">
                    Submit
                </Button>

            </Form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce} />

        </div>
    )
}

export default RHF_YUP