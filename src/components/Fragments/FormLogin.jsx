import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    let { email, password } = e.target;
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button variant="bg-blue-600" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
