import React, { useState } from "react";
import { addTodoData } from "../../Redux/Actions";
import { useDispatch } from "react-redux";

import styles from "./style.module.css";

const InputSection = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const handleAdd = (e) => {
    dispatch(
      addTodoData({
        userId: new Date().getTime(),
        id: new Date().getTime(),
        title: todoTitle,
        completed: false,
      })
    );
    setTodoTitle("");
  };

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <form id={styles.inputForm}>
      <input
        id={styles.text_box}
        type="text"
        value={todoTitle}
        placeholder="Enter Text Here"
        onChange={handleChange}
      />
      <span id={styles.addButton} onClick={handleAdd}>
        Add
      </span>
    </form>
  );
};

export default InputSection;
