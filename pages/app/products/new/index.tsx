import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import InputField from "../../../../components/InputField/InputField";
import Layout from "../../../../components/Layout/Layout";
import styles from "./new.module.scss";
import Button from "../../../../components/Button/Button";
import { product } from "../../../../lib/auth";
import { useRouter } from "next/router";

const NewProduct = () => {
  const cld_url = "https://api.cloudinary.com/v1_1/khal/image/upload";
  const router = useRouter();

  const [file, setFile] = useState()
  const [image_url, setImage_url] = useState("")
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()


  async function handleSubmit(e){
    e.preventDefault()

    const formData =  new FormData()
    formData.append("folder", "Frontier store")
    formData.append("file", file)
    formData.append("upload_preset", "khal_preset")

    await fetch(cld_url, {
      method: "POST",
      body: formData
    }) .then((response) => {
      return response.json();
    })
    .then((data) => {
      setImage_url(data.url)
      
      setImage_url((image_url) => {

        product({name, price, image_url, description})
        .then(() => router.push('/app'))
        .catch((err) => console.log(err));
        return image_url
      })
    })

    console.log(image_url)

  }

  function handleFileChange(e){
    setFile(e.target.files[0])
  }
  function handleProductNameChange(e){
    setName(e.target.value)
  }
  function handleProductPriceChange(e){
    setPrice(e.target.value)
  }
  function handleProductDescriptionChange(e){
    setDescription(e.target.value)
  }
  return (
    <div>
      <Layout>
        <div className={styles.main}>
          <h3>Create New Product</h3>

          <form onSubmit={handleSubmit}>
            <InputField
              type="file"
              label="Product Image"
              onChange={handleFileChange}
              name="image"
              id="image"
              // value={String(file)}
            />
            <InputField
              type="text"
              label="Product Name"
              placeholder="Enter the product name"
              onChange={handleProductNameChange}
              name="product_name"
              id="product_name"
              value={name}
            />
            <InputField
              type="text"
              label="Product Price"
              placeholder="Enter the price for the product"
              onChange={handleProductPriceChange}
              name="product_price"
              id="product_price"
              value={price}
            />
            <textarea placeholder="Describe the product" onChange={handleProductDescriptionChange} />

            <Button label="Create product" theme="green" type="submit" />
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default NewProduct;
