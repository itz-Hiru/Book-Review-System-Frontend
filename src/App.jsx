import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.page"
import CreateReview from "./pages/create-review.page"
import EditReview from "./pages/edit-review.page"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews/create" element={<CreateReview />} />
      <Route path="/reviews/edit" element={<EditReview />} />
    </Routes>
  );
};

export default App;
