import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Login } from "../../services/auth.service";
import { useState } from "react";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    let { username, password } = e.target;
    // localStorage.setItem("email", email.value);
    // localStorage.setItem("password", password.value);
    // window.location.href = "/products";
    const data = {
      username: username.value,
      password: password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Jhon Doe"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <Button variant="bg-blue-600" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
