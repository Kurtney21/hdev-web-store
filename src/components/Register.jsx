import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaRegUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  // Initial form values
  const initialValues = {
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "First name must not exceed 15 characters")
      .required("First name is required"),
    surname: Yup.string()
      .max(20, "Surname must not exceed 20 characters")
      .required("Surname is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
      ),
  });

  // Handle form submission
  const onSubmit = (values, { resetForm }) => {
    dispatch(setUser(values.username));
    alert("Successfully registered.");
    resetForm(); // Reset the form after successful registration
    // Redirect to home or another page if needed
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center p-4 my-4 vh-100">
      <Row className="w-100">
        <Col className="d-flex justify-content-center p-4">
          <div className="card shadow-lg p-4 text-center w-50">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ errors, touched }) => (
                <Form className="p-3">
                  <FaRegUserCircle size={78} />
                  <h1 className="display-5 p-3 fw-bold">Register</h1>

                  <div className="d-flex align-items-center p-3">
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className={`form-control ${
                        touched.firstName && errors.firstName
                          ? "is-invalid"
                          : ""
                      }`}
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>

                  <div className="d-flex align-items-center p-3">
                    <Field
                      type="text"
                      name="surname"
                      placeholder="Surname"
                      className={`form-control ${
                        touched.surname && errors.surname ? "is-invalid" : ""
                      }`}
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="surname"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>

                  <div className="d-flex align-items-center p-3">
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                      className={`form-control ${
                        touched.username && errors.username ? "is-invalid" : ""
                      }`}
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>

                  <div className="d-flex align-items-center p-3">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={`form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>

                  <div className="d-flex align-items-center p-3">
                    <InputGroup>
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className={`form-control ${
                          touched.password && errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        autoComplete="true"
                      />
                      <InputGroup.Text onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </InputGroup.Text>
                    </InputGroup>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>

                  <Button className="bg-success" type="submit">
                    Register
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
