import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from "./signup.module.scss";
import { register } from "../../lib/auth";
import { useRouter } from "next/router";

const signup = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    },

    onSubmit: async (values) => {
      register(values)
        // .then(({ data }) => router.push("/app"))
        // .catch((err) => console.log(err));
    },
  });
  return (
    <div className={styles.signup_page}>
      <div className={styles.card}>
        <p className={styles.title}>Create your account</p>

        <form onSubmit={formik.handleSubmit}>
          <InputField
            label="Username"
            type="text"
            onChange={formik.handleChange}
            name="username"
            id="username"
            value={formik.values.username}
          />
          <InputField
            label="First Name"
            type="text"
            onChange={formik.handleChange}
            name="first_name"
            id="first_name"
            value={formik.values.first_name}
          />
          <InputField
            label="Last Name"
            type="text"
            onChange={formik.handleChange}
            name="last_name"
            id="last_name"
            value={formik.values.last_name}
          />
          <InputField
            label="Email address"
            type="email"
            onChange={formik.handleChange}
            name="email"
            id="email"
            value={formik.values.email}
          />
          <InputField
            label="Password"
            type="password"
            onChange={formik.handleChange}
            name="password"
            id="password"
            value={formik.values.password}
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
