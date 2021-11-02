import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { backTask } from "../TasksSlice";

export const Done = () => {
  const task = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onClickBack = (con) => {
    dispatch(backTask(con));
  };

  return (
    <STaskArea>
      <STaskttl>Done Tasks</STaskttl>
      <ul>
        {task
          .filter((task) => task.comp === true)
          .map((task, i) => (
            <SList key={i}>
              <Spar>{task.content}</Spar>
              <SBtn onClick={() => onClickBack(task.content)}>Back</SBtn>
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
