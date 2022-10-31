import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from "./signup.module.scss";
import { register } from "../../lib/auth";
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter();

  const[username, setUsername] = useState()
  const[first_name, setFirstname] = useState()
  const[last_name, setLastname] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value)
  }
  const handleLastnameChange = (e) => {
    setLastname(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    register({username, first_name, last_name, email, password})
    .then(() => router.push('/app'))
    .catch((err) => console.log(err));
    
  }

  return (
    <div className={styles.signup_page}>
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
          <Button label="Create Account" theme="green" type="submit" />
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
