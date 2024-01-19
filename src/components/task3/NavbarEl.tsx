import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Navbar from "react-bootstrap/Navbar";
import LoginForm from "./LoginForm";
import UserInfo from "./UserInfo";
import "bootstrap/dist/css/bootstrap.min.css";

export interface INavbarProps {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarEl = ({ token, setToken }: INavbarProps) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-5">
      <Container fluid>
        <Navbar.Brand href="#">Neto Social</Navbar.Brand>
        <Stack direction="horizontal" gap={3}>
          {!token && <LoginForm token={token} setToken={setToken} />}
          {token && <UserInfo token={token} setToken={setToken} />}
        </Stack>
      </Container>
    </Navbar>
  );
};

export default NavbarEl;
