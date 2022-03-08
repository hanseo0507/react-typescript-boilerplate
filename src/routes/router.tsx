import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>Hello, React</>} />
      </Routes>
    </BrowserRouter>
  );
};
