import styled from "styled-components";
import axios from "axios";
import { getContents } from "../../ApiSlice";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../Input";
import { Undone } from "../Undone";
import { Done } from "../Done";

export const TopField = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.name);

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return (
    <>
      <h3>こんにちは、{userName}さん！</h3>
      <Input />
      <SWrap>
        <Undone />
        <Done />
      </SWrap>
    </>
  );
};

const SWrap = styled.div`
  display: flex;
  width: 980px;
  justify-content: space-between;
  margin-top: 40px;
`;
