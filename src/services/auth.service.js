import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const Login = async (data, callback) => {
  await axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};
export const Register = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/users", data)
    .then((res) => {
      callback(true, res.data.email);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token) => {
  const decode = jwtDecode(token);
  return decode.user;
};
