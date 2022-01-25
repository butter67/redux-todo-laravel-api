import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStore } from "../TasksSlice";
import { addStoreApi, createContent } from "../ApiSlice";

export const Input = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setVal(() => e.target.value);
  };

  const createNewContents = (val) => {
    if (!val) {
      return;
    }
    axios
      .post("http://redux-todo-api.test/api/api-store", {
        content: val,
        coompleted: false,
      })
      .then((res) => {
        dispatch(addStoreApi(res.data));
        setVal("");
      })
      .catch((error) => {
        alert("NOT sucsessed!!");
      });
  };

  return (
    <SInputArea>
      <SInput
        value={val}
        onChange={handleChange}
        placeholder="Add something here!"
      />
      <SAddBtn onClick={() => createNewContents(val)}>Add</SAddBtn>
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
