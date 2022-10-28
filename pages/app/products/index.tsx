import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Layout from "../../../components/Layout/Layout";
import styles from "./products.module.scss";

const Products = (): ReactElement => {
  const router = useRouter();
  return (
    <div>
      <Layout>
        <div className={styles.new_project_btn}>
          <Button
            label="New product"
            theme="green"
            type="button"
            onClick={() => router.push("/app/products/new")}
          />
        </div>

        <main className={styles.main}>
          <h3>Ohabikks's Products</h3>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Products;
