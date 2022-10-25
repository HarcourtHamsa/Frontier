import Link from "next/link";
import React from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import styles from "./signup.module.scss";

const signup = () => {
  return (
    <div className={styles.signup_page}>
      <div className={styles.card}>
        <p className={styles.title}>Create your account</p>
        <form>
          <InputField label="Business Name" type="text" />
          <InputField label="First Name" type="text" />
          <InputField label="Last Name" type="text" />
          <InputField label="Email address" type="email" />
          <InputField label="Password" type="password" />
          <Button label="Create Account" theme="green" />
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
