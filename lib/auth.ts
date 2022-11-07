import axios from "axios";
import { decode } from "jsonwebtoken";

const register = async (obj: object) => {
  const { data } = await axios.post("/api/auth/register", { ...obj });
  return data;
};

const login = async (obj: object) => {
  const { data } = await axios.post("/api/auth/login", { ...obj });
  return data;
};

const currentUser = (token) => {
  const userDetails = decode(token);
  return userDetails;
};

const product = async (obj: object) => {
  const { data } = await axios.post("/api/product", { ...obj });
  return data;
};

export { register, login, product, currentUser };
