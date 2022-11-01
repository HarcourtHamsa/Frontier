import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "../components/Button/Button";
import styles from "./index.module.scss";
import InputField from "../components/InputField/InputField";

const index = () => {
  return (
    <div className={styles.hero}>
      <header className={styles.header}>
        <h2>Frontier</h2>

        <div style={{display: "flex"}}>
          <Link href={"/login"}>
            <a style={{margin: "0px 7px"}}>
              <Button label="Login" theme="green" />
            </a>
          </Link>

          <Link href={"/signup"}>
            <a style={{margin: "0px 7px"}}>
            <Button label="Signup" theme="white" />
            </a>
          </Link>
        </div>
      </header>

      <div className={styles.hero_content}>
        <h1>The quickest way to purchase your favorite items.</h1>

        <p>
          Frontier is an ecommerce platform used by seller and buyer for
          carrying out any online commercial transaction.
        </p>
      </div>

      <div className={styles.img}>
        <Image src={"/hero.png"} width={"1500"} height={"400"} className={styles.im}/>
      </div>
    </div>
  );
};

export default index;
