import axios from "axios";
import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { INavbarProps } from "./NavbarEl";

interface IFormData {
  login: string;
  password: string;
}

const LoginForm = ({ setToken }: INavbarProps) => {
  const [formData, setFormData] = useState<IFormData>({
    login: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");
  const nav = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage("");
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value.trim(),
    }));
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    logIn(formData);

    setFormData({
      login: "",
      password: "",
    });    
  };

  const logIn = (formData: IFormData) => {
    axios
      .post(import.meta.env.VITE_LOGIN_URL, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        nav("/news");
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      <span style={{color: "red"}}>{message}</span>
      <Form className="d-flex" onSubmit={onSubmitHandler}>
        <Form.Control
          type="text"
          value={formData.login}
          name="login"
          placeholder="Username"
          className="me-2"
          onChange={onChangeHandler}
          required
        />
        <Form.Control
          type="password"
          value={formData.password}
          name="password"
          placeholder="Password"
          className="me-2"
          onChange={onChangeHandler}
          required
        />
        <Button variant="outline-success" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
