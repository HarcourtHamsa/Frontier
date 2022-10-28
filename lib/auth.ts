import axios from "axios";

const register = async (obj: object) => {
  const { data } = await axios.post("/api/auth/register", { ...obj });
  return data;
};

const login = async (obj: object) => {
  const { data } = await axios.post("/api/auth/login", { ...obj });
  return data;
}

const product = async (obj: object) => {
  const { data } = await axios.post("/api/auth/product", { ...obj })
}

export { register, login, product };
