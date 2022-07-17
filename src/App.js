import React, { useEffect } from "react";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateContainer from "./components/CreateContainer";
import MainContainer from "./components/MainContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

export default function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({ type: actionType.SET_FOOD_ITEMS, foodItems: data });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <div className="w-screen h-auto flex-col bg-primary">
          <Header />
          <main className="w-full px-4 md:px-16 py-4">
            <Routes>
              <Route
                path="/"
                element={<MainContainer fetchData={fetchData} />}
              />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}
