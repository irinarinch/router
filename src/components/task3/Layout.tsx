import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarEl from "./NavbarEl";

export type TContext = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const Layout = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <>
      <header>
        <NavbarEl token={token} setToken={setToken} />
      </header>
      <Outlet context={{ token, setToken } satisfies TContext} />
    </>
  );
};

export default Layout;
