import styled from "styled-components";

import { Input } from "./components/Input";
import { Undone } from "./components/Undone";
import { Done } from "./components/Done";

function App() {
  return (
    <>
      <SApp>
        <STtl>Todo App Width Redux</STtl>
        <Input />
        <SWrap>
          <Undone />
          <Done />
        </SWrap>
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

const SWrap = styled.div`
  display: flex;
  width: 980px;
  justify-content: space-between;
  margin-top: 40px;
`;

const STtl = styled.h1`
  font-family: "Nothing You Could Do", cursive;
  font-size: 38px;
`;
