import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function Login() {
  const [fullName, setFullname] = useState("");

  useEffect(() => localStorage.setItem("user", fullName));

  const formik = useFormik({
    initialValues: {
      fullName: "",
    },
    onSubmit: (values, bag) => {
      setFullname(values.fullName);
      bag.resetForm();
    },
  });
  return (
    <div className="main-login">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <label id="lbfullName">Full Name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
        />
        <Link to={"todo"}>
          <button className="login" type="submit" name="Login">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
