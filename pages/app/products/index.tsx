import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Layout from "../../../components/Layout/Layout";
import styles from "./products.module.scss";

const Products = (): ReactElement => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { storeName, storeID } = router.query;

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("/api/auth/products");
      return data;
    }

    getProducts()
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [products, setProducts]);

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
          <h3>{storeName} Products</h3>
          <div className={styles.cards}>
            {products.map((product, index) => {
              return <Card key={index} {...product} />;
            })}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Products;
