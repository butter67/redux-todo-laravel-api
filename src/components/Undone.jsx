import styled from "styled-components";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteTaskApi, updateTaskApi } from "../ApiSlice";

export const Undone = () => {
  const tasks = useSelector((state) => state.api.tasks);

  const dispatch = useDispatch();

  const onDeleteTask = (id) => {
    axios
      .post("http://redux-todo-api.test/api/del", {
        id: id,
      })
      .then((res) => {
        dispatch(deleteTaskApi(res.data));
      })
      .catch((error) => {
        alert("NOT sucsessed!!");
      });
  };

  const onDone = (id) => {
    axios
      .post("http://redux-todo-api.test/api/update", {
        id: id,
      })
      .then((res) => {
        dispatch(updateTaskApi(res.data));
      })
      .catch((error) => {
        alert("NOT sucsessed!!");
      });
  };

  return (
    <STaskArea>
      <STaskttl>Undone Tasks</STaskttl>
      <ul>
        {tasks
          .filter((task) => task.completed == false)
          .map((task, i) => (
            <SList key={i}>
              <Spar>{task.content}</Spar>
              {/* <SBtn onClick={() => onDone(i, task)}>Done</SBtn> */}
              <SBtn onClick={() => onDone(task.id)}>Done</SBtn>
              <SDBtn onClick={() => onDeleteTask(task.id)}>Delete</SDBtn>
            </SList>
          ))}
      </ul>
    </STaskArea>
  );
};

const STaskArea = styled.div`
  background: #e8d3d1;
  width: 46%;
  border-radius: 16px;
  padding: 16px;
  min-height: 260px;
`;

const STaskttl = styled.h2`
  font-size: 26px;
  text-align: center;
  color: #383c3c;
  font-family: "Cabin", sans-serif;
`;

const SList = styled.li`
  display: flex;
  align-items: center;
`;

const Spar = styled.p`
  margin-right: 18px;
`;

const SBtn = styled.button`
  height: 40px;
  min-width: 60px;
  margin: 0px 4px;
  border-radius: 10px;
  border: none;
  background: #f7b977;
  color: white;
  font-weight: bold;
  transition: 0.2s all;
  font-family: "Cabin", sans-serif;
  &:hover {
    transition: 0.2s all;
    cursor: pointer;
    opacity: 0.8;
  }
`;
const SDBtn = styled.button`
  height: 40px;
  min-width: 60px;
  margin: 0px 4px;
  border-radius: 10px;
  border: none;
  background: #c8c2be;
  color: white;
  font-weight: bold;
  transition: 0.2s all;
  font-family: "Cabin", sans-serif;
  &:hover {
    opacity: 0.8;
    transition: 0.2s all;
    cursor: pointer;
  }
`;
