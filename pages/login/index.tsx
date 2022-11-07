import React, { useState } from "react";
import Link from "next/link";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { useFormik } from "formik";
import styles from "./login.module.scss";
import { login } from "../../lib/auth";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const notify = (msg) => toast(`${msg}`);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await login({ email, password });
      notify("User login successful");
      router.push("/app");
    } catch (error) {
      notify("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };
  const router = useRouter();

  return (
    <div className={styles.loginForm}>
      <ToastContainer
        position="top-center"
        theme="light"
        hideProgressBar={true}
      />
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <p className={styles.title}>login</p>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
            name="email"
            id="email"
            value={email}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
            name="password"
            id="password"
            value={password}
          />
          <Button
            label={isLoading ? "Loading..." : "Login"}
            theme="green"
            type="submit"
          />
        </form>

        <p>
          Don't have an account ?{" "}
          <Link href={"/signup"}>
            <a>Signup</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
