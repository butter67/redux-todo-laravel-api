import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { backTask } from "../TasksSlice";

export const Done = () => {
  const tasks = useSelector((state) => state.api.tasks);
  // const taskRev = task.slice().reverse();
  const dispatch = useDispatch();

  const onClickBack = (i, task) => {
    dispatch(backTask({ index: i, taskObject: task }));
  };

  return (
    <STaskArea>
      <STaskttl>Done Tasks</STaskttl>
      <ul>
        {tasks
          .filter((task) => task.completed == true)
          .map((task, i) => (
            <SList key={i}>
              <Spar>{task.content}</Spar>
              <SBtn onClick={() => onClickBack(i, task)}>Back</SBtn>
            </SList>
          ))}
      </ul>
    </STaskArea>
  );
};

const STaskArea = styled.div`
  background: #d3cbc6;
  width: 46%;
  border-radius: 16px;
  padding: 16px;
  min-height: 260px;
`;

const STaskttl = styled.h2`
  text-align: center;
  color: #383c3c;
  font-family: "Cabin", sans-serif;
  font-size: 26px;
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
  background: #92b5a9;
  color: white;
  font-weight: bold;
  transition: 0.2s all;
  font-family: "Cabin", sans-serif;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s all;
  }
`;
