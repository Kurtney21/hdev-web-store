import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeredUser = useSelector(state => state.user.username); // Get the registered username from Redux

  // Initial form values
  const initialValues = {
    username: '',
    password: '',
  };

  // Validation schema for form
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle form submission
  const onSubmit = (values) => {
    // Simple validation check
    if (values.username === registeredUser) {
      dispatch(setUser(values.username));
      navigate("/"); // Redirect to home page or another protected route
    } else {
      setLoginError("Invalid username or password");
    }
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
                  <FaUserAlt size={78} />
                  <h1 className="display-5 p-3 fw-bold">Login</h1>

                  {/* Username Input */}
                  <div className="d-flex align-items-center p-3">
                    <Field
                      type="text"
                      name="username"
                      placeholder="Username"
                      className={`form-control ${
                          touched.username && errors.username
                              ? "is-invalid"
                              : ""
                      }`}
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>

                  {/* Password Input */}
                  <div className="d-flex align-items-center p-3">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={`form-control ${
                          touched.password && errors.password
                              ? "is-invalid"
                              : ""
                      }`}
                      autoComplete="true"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger ms-auto"
                    />
                  </div>
                  
                  {loginError && <div className="text-danger">{loginError}</div>}
                  
                  <Button className="bg-primary" type="submit">
                    Login
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

export default Login;
