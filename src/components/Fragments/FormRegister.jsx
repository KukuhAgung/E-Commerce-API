import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { Register } from "../../services/auth.service";
import { useState } from "react";

const FormRegister = () => {
  const [registerFailed, setRegisterFailed] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    let { email, fullname, password } = e.target;
    const data = {
      username: fullname.value,
      email: email.value,
      password: password.value,
      name: {
        firstname: fullname.value,
        lastname: fullname.value,
      },
    };
    Register(data, (status, res) => {
      if (status) {
        localStorage.setItem("account", res);
        window.location.href = "/login";
      } else {
        setRegisterFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Fullname"
        type="text"
        placeholder="John De"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@main.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmpassword"
      />
      <Button variant="bg-blue-600" type="submit">
        Register
      </Button>
      {registerFailed && <p className="text-red-500">{registerFailed}</p>}
    </form>
  );
};

export default FormRegister;
