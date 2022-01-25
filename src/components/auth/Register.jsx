import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { setUsers } from "../../TasksSlice";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const getAuthUser = () => {
  //     axios
  //       .get("http://redux-todo-api.test/api/user")
  //       .then((res) => {
  //         console.log(res.data);
  //         alert("ログイン成功！");
  //       })
  //       .catch((err) => {
  //         alert("ログインに失敗しました");
  //       });
  //   };

  return (
    <Swrap>
      <Sh2>Register</Sh2>
      <Sform>
        <Sinput
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
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
      </Sform>
      <Sbutton>Submit</Sbutton>
    </Swrap>
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
