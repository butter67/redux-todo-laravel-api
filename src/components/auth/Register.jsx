import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginUser, storeNewUser } from "../../AuthUserSlice";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setNewUser = (name, email, password, password_confirmation) => {
    axios
      .post("http://redux-todo-api.test/api/register", {
        name,
        email,
        password,
        password_confirmation,
      })
      .then((res) => {
        alert("新しく登録しました！");
        const token = res.data.access_token;
        localStorage.setItem("jwt", token);
        dispatch(storeNewUser(res.data));
        navigate("/field");
      })
      .catch((err) => {
        console.log(email, password);
        alert("ユーザー登録失敗です");
      });
  };

  const getLoginUser = (email, password) => {
    axios
      .post("http://redux-todo-api.test/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        alert("ログインしました！");
        dispatch(setLoginUser(res.data.user));
        const token = res.data.access_token;
        localStorage.setItem("jwt", token);
        alert("Tokenセットしました！");
        navigate("/field");
      })
      .catch((err) => {
        console.log(email, password);
        alert("ログイン失敗です");
      });
  };

  const isLoginHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Swrap>
        <Sh2>{isLogin ? "Login" : "Register"}</Sh2>
        <Sform>
          {!isLogin && (
            <Sinput
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <Sinput
            type="email"
            placeholder="Email adress"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Sinput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <Sinput
              type="password"
              placeholder="Password Confirm"
              onChange={(e) => setpassword_confirmation(e.target.value)}
            />
          )}
        </Sform>
        {!isLogin ? (
          <Sbutton
            onClick={() =>
              setNewUser(name, email, password, password_confirmation)
            }
          >
            Submit
          </Sbutton>
        ) : (
          <Slogbutton onClick={() => getLoginUser(email, password)}>
            Submit
          </Slogbutton>
        )}

        <span onClick={isLoginHandler}>
          {!isLogin ? "Already have an account?" : "Back to Login"}
        </span>
      </Swrap>
    </>
  );
};

const Swrap = styled.div`
  width: 46%;
  margin: 0 auto;
`;
const Sh2 = styled.h2`
  font-size: 38px;
  text-align: center;
  color: #454545;
`;
const Sform = styled.form`
  display: flex;
  flex-direction: column;
`;

const Sinput = styled.input`
  margin: 4px 0px;
  padding: 16px 20px;
  font-size: 18px;
  border-radius: 30px;
  color: lightgray;
  border: 1px solid lightgray;
`;
const Sbutton = styled.button`
  margin: 4px 0px;
  padding: 16px 20px;
  border-radius: 30px;
  border: none;
  font-size: 20px;
  background: pink;
  color: white;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
    transition: all 0.4s;
  }
`;
const Slogbutton = styled.button`
  margin: 4px 0px;
  padding: 16px 20px;
  border-radius: 30px;
  border: none;
  font-size: 20px;
  background: beige;
  color: brown;
  transition: all 0.4s;
  &:hover {
    opacity: 0.8;
    transition: all 0.4s;
  }
`;
