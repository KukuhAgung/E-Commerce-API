import InputForm from "../Elements/Input";
import Button from "../Elements/Button"
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="example@main.com"
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
      <Button variant="bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;
