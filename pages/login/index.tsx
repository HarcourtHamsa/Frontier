import React from "react";
import Link from "next/link";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { useFormik } from "formik";
import styles from "./login.module.scss";
import { login } from "../../lib/auth";

const index = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      let data = login(values);
      console.log(data);
    },
  });
  return (
    <div className={styles.loginForm}>
      <div className={styles.card}>
        <form onSubmit={formik.handleSubmit}>
          <p className={styles.title}>login</p>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            name="email"
            id="email"
            value={formik.values.email}
          />
          <InputField
          label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            name="password"
            id="password"
            value={formik.values.password}
          />
          <Button label="Login" theme="green" />
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
