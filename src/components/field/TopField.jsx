import styled from "styled-components";
import axios from "axios";
import { getContents } from "../../ApiSlice";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "../Input";
import { Undone } from "../Undone";
import { Done } from "../Done";
import { Navigate, useNavigate } from "react-router-dom";

export const TopField = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.user.name);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("jwt");
    alert("ログアウトしました");
    navigate("/register");
  };

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return (
    <>
      <h3>こんにちは、{userName}さん！</h3>
      <button onClick={() => logOut()}>Log Out</button>
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
