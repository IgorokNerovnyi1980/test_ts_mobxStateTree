import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import Button from "./Button";

const Wrapper = styled.div`
  width: 100%;
  min-height: 4rem;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(169, 176, 184, 1) 0%,
    rgba(115, 126, 130, 1) 100%
  );
  :last-child {
    margin-bottom: 0;
    border-radius: 0 0 1rem 1rem;
  }
  p {
    font-size: 1rem;
    color: white;
  }
`;
const BtnWrap = styled.div`
  width: 11rem;
  display: flex;
`;
interface Iprops {
  el: { id: number; label: string; isReady: boolean } | any;
  removeTodo(el: Object): void;
  onToggleStatus(id: number): void;
}

const Item: React.FC<Iprops> = (props) => {
  const { el, removeTodo } = props;
  return (
    <Wrapper>
      <p>{el.label}</p>
      <BtnWrap>
        <Button label="delete" color="blue" fnClick={() => removeTodo(el)} />
        <Button
          label={el.isReady ? "done" : "in progress"}
          color={el.isReady ? "green" : "red"}
          fnClick={() => el.toggle()}
        />
      </BtnWrap>
    </Wrapper>
  );
};

export default observer(Item);
