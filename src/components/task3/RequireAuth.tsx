import { PropsWithChildren } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import { TContext } from "../../components/task3/Layout";

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { token } = useOutletContext<TContext>();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAuth;
