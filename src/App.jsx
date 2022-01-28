import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getContents } from "./ApiSlice";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import axios from "axios";
import { TopField } from "./components/field/TopField";
import { setLoggedInUser } from "./AuthUserSlice";

function App() {
  const token = localStorage.getItem("jwt");

  const [user, setUser] = useState();
  const [jwt, setJwt] = useState(token || null);
  const loginUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = useCallback(() => {
    axios
      .get("http://redux-todo-api.test/api/user/", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        alert("[getUser]ログイン済み");
        console.log(res.data);
        setUser(res.data);
        dispatch(setLoggedInUser(res.data));
        navigate("/field");
      })
      .catch((err) => {
        alert("[getUser]ログインしてません");
        navigate("/register");
      });
  }, []);

  //ログイン済みかの判定
  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    dispatch(getContents());
  }, [dispatch]);

  return (
    <>
      <SApp>
        <STtl>Todo App Width Redux</STtl>
        <Routes>
          <Route path="/field" element={<TopField />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </SApp>
    </>
  );
}

export default App;

const SApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 80%;
  padding: 40px 0px;
`;
const STtl = styled.h1`
  font-family: "Nothing You Could Do", cursive;
  font-size: 38px;
`;
