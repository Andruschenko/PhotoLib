import React, { Dispatch } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

import {
  IncreaseActionT,
  increase as increaseAction,
} from "../store/actionCreators";
import { StoreT } from "../store/reducer";

const Counter = () => {
  const dispatch = useDispatch<Dispatch<IncreaseActionT>>();

  const increase = () => dispatch(increaseAction());

  const count = useSelector<StoreT, number>((state) => state.count);

  return (
    <Container>
      <Text>Clicked {count} times</Text>
      <Button onPress={increase}>
        <Text>Increment</Text>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  background-color: yellow;
  padding: 10px;
  margin: 10px;
`;

export default Counter;
