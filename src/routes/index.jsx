import { Routes, Route } from "react-router-dom";
import { TGHeader, TGFooter } from "../Components";
import { TGDashboard } from "../Containers/Dashboard";

export const TGRoutes = () => {
  return (
    <>
      <TGHeader />
      <Routes>
        <Route exact path="/" element={<TGDashboard/>} />
        <Route path="/2" element={<>Page 2</>} />
      </Routes>
      <TGFooter />
    </>
  );
};
