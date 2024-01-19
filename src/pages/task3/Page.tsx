import AuthPage from "./AuthPage";
import ShowCardPage from "./ShowCardPage";
import RequireAuth from "../../components/task3/RequireAuth";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/task3/Layout";
import StartCard from "../../components/task3/StartCard";

const Page = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartCard />} />
          <Route 
            path="news"
            element={
              <RequireAuth>
                <AuthPage />
              </RequireAuth>
            }
          />
          <Route
            path="news/:id"
            element={
              <RequireAuth>
                <ShowCardPage />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={<div className="error">Not Found</div>}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Page;
