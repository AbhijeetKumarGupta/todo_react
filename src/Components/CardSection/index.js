import Card from "../TodoCard";
import { useSelector } from "react-redux";

const CardSection = () => {
  const todoData = useSelector((state) => state.todoData);
  return (
    <>
      {todoData.map((item, index) => (
        <Card key={item.id} data={item} />
      ))}
    </>
  );
};

export default CardSection;
