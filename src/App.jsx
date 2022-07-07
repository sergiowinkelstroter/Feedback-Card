import { CardStar } from "./components/CardStar";
import { ThakYouCard } from "./components/ThankYouCard";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardStar />} />
        <Route path="/thankYou" element={<ThakYouCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
