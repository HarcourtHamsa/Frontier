import axios from "axios";

const register = async (obj: object) => {
  const { data } = await axios.post("/api/auth/register", { ...obj });
  return data;
};

const login = async (obj: object) => {
  const { data } = await axios.post("/api/auth/login", { ...obj });
  return data;
}

export { register, login };
