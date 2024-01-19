import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { INavbarProps } from "./NavbarEl";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { NewsService } from "../../services/news.service";

export type TUser = {
  avatar: string;
  id: string;
  login: string;
  name: string;
};

const UserInfo = ({ token, setToken }: INavbarProps) => {
  const [userData, setUserData] = useState<TUser>({
    avatar: '',
    id: '',
    login: '',
    name: '',
  });

  const [error, setError] = useState<AxiosError | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const data = await NewsService.getData(
        token,
        import.meta.env.VITE_USERPROFILE_URL
      );
      data.id ? setUserData(data) : setError(data);
    };
    fetchData();
  }, [token]);

  localStorage.setItem("userProfile", JSON.stringify(userData));

  const logout = () => {
    setToken("");
    localStorage.clear();
  };

  if (error && error.response !== undefined && error.response.status === 401) {
    logout();
  }

  return (
    <>
      Hello, {userData.name}
      <Image src={userData.avatar} roundedCircle />
      <Button variant="outline-danger" onClick={logout}>
        Logout
      </Button>
    </>
  );
};

export default UserInfo;
