import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStore } from "../TasksSlice";

export const Input = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setVal(() => e.target.value);
  };

  const onAddStore = () => {
    if (!val) return;
    dispatch(addStore({ content: val, comp: false }));
    setVal("");
  };

  return (
    <SInputArea>
      <SInput
        value={val}
        onChange={handleChange}
        placeholder="Add something here!"
      />
      <SAddBtn onClick={() => onAddStore(val)}>Add</SAddBtn>
    </SInputArea>
  );
};

const SInputArea = styled.div`
  background: #fcfcfc;
`;

const SInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 30px;
  padding: 6px 10px 6px 16px;
  border: 1px solid lightgray;
  margin-right: 16px;
  font-size: 14px;
  font-family: "Cabin", sans-serif;
  letter-spacing: 0.1em;
  &:focus {
    outline: none;
  }
`;

const SAddBtn = styled.button`
  border: none;
  background: #ee836f;
  border-radius: 30px;
  height: 40px;
  width: 60px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  transition: 0.2s all;
  font-family: "Cabin", sans-serif;
  letter-spacing: 0.08em;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s all;
  }
`;
