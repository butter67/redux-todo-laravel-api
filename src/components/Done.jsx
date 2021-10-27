import styled from "styled-components";
import { useSelector } from "react-redux";

export const Done = () => {
  const task = useSelector((state) => state.tasks.done);

  return (
    <STaskArea>
      <STaskttl>Done Tasks</STaskttl>
      <ul>
        {task.map((task, i) => (
          <SList key={i}>
            <Spar>{task}</Spar>
            <SBtn>Back</SBtn>
            <SDBtn>Delete</SDBtn>
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
const SDBtn = styled.button`
  height: 40px;
  min-width: 60px;
  margin: 0px 4px;
  border-radius: 10px;
  border: none;
  background: #d4acad;
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
