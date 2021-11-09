import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { removeDataFromTodo } from "../../Redux/Actions";
const Card = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(removeDataFromTodo(e.target.id));
  };
  return (
    <div className={styles.todoCard}>
      <div className={styles.todoMessageDiv}>
        <p>{props.data.title}</p>
      </div>
      <div
        id={props.data.id}
        className={styles.closeButtonDiv}
        onClick={handleRemove}
      >
        X
      </div>
    </div>
  );
};

export default Card;
