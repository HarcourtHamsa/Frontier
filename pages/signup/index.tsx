import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from "./signup.module.scss";
import { register } from "../../lib/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState();
  const [first_name, setFirstname] = useState();
  const [last_name, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const notify = (msg) => toast(`${msg}`);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await register({ username, first_name, last_name, email, password });
      notify("User account created");
      router.push("/login");
    } catch (error) {
      notify("User already exists");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.signup_page}>
      <ToastContainer
        position="top-center"
        theme="light"
        hideProgressBar={true}
      />
      <div className={styles.card}>
        <p className={styles.title}>Create your account</p>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            type="text"
            onChange={handleUsernameChange}
            name="username"
            id="username"
            value={username}
          />
          <InputField
            label="First Name"
            type="text"
            onChange={handleFirstnameChange}
            name="first_name"
            id="first_name"
            value={first_name}
          />
          <InputField
            label="Last Name"
            type="text"
            onChange={handleLastnameChange}
            name="last_name"
            id="last_name"
            value={last_name}
          />
          <InputField
            label="Email address"
            type="email"
            onChange={handleEmailChange}
            name="email"
            id="email"
            value={email}
          />
          <InputField
            label="Password"
            type="password"
            onChange={handlePasswordChange}
            name="password"
            id="password"
            value={password}
          />
          <Button
            label={isLoading ? "Loading..." : "Create Account"}
            theme="green"
            type="submit"
          />
        </form>

        <p>
          Already have an account ?{" "}
          <Link href={"/login"}>
            <a>Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signup;
