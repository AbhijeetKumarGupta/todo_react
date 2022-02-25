import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodoData } from "./Redux/Actions";

import InputSection from "./Components/InputSection";
import CardSection from "./Components/CardSection";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((result) => {
        handleSetTodoData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSetTodoData = (data) => {
    dispatch(setTodoData(data));
  };

  return (
    <div className="mainDiv">
      <InputSection />
      <CardSection />
    </div>
  );
}

export default App;
