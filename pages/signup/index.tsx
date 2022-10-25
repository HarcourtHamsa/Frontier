import React from "react";
import InputField from "../../components/InputField/InputField";
import styles from "./signup.module.scss";

const signup = () => {
  return (
    <div className={styles.login_page}>
      <div className={styles.card}>
        <h2>Create your account</h2>
        <form>
          <InputField label="Business Name" type="text" />
          <InputField label="First Name" type="text" />
          <InputField label="Last Name" type="text" />
          <InputField label="Email address" type="email" />
        </form>
      </div>
    </div>
  );
};

export default signup;
