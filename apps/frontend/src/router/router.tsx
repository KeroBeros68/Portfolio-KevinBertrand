import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route element={<div>coucou</div>} path="/" />
    </Routes>
  );
}

export default Router;
