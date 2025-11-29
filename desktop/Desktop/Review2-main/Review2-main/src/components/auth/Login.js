import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { email, password, role } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (role === "admin") navigate("/admin/dashboard");
    else navigate("/student/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "30px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h2 className="text-center mb-4 fw-bold">Welcome Back 👋</h2>
         <h3>Student Learning Outcomes </h3>   
        <p className="text-center mb-4" style={{ opacity: 0.8 }}>
         
                
            Login to continue your learning.
        </p>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="2400030206@klu"
              name="email"
              value={email}
              onChange={handleChange}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="•••••••"
              name="password"
              value={password}
              onChange={handleChange}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "none",
                color: "white",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Login As</Form.Label>
            <Form.Select
              name="role"
              value={role}
              onChange={handleChange}
              style={{
                background: "rgba(52, 12, 62, 0.2)",
                border: "none",
                color: "white",
              }}
            >
              <option value="student">Student</option>
              <option value="admin">Teacher (Admin)</option>
            </Form.Select>
          </Form.Group>

          <Button
            type="submit"
            className="w-100 mt-2"
            style={{
              padding: "12px",
              background:
                "linear-gradient(135deg, rgba(70, 30, 30, 0.5), rgba(111, 7, 7, 0.3))",
              color: "#000",
              fontWeight: "700",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            Login
          </Button>

          <div className="text-center mt-3">
            <p style={{ color: "white", opacity: 0.7 }}>
              Don’t have an account?{" "}
              <Link to="/register" style={{ color: "#fff", fontWeight: "600" }}>
                Register
              </Link>
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
