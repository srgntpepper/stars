import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div>
      {/* Star Rating Component */}
      <StarRating />
    </div>
  );
}

export default App;
