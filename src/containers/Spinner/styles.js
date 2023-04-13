import styled, { keyframes } from "styled-components";

export const StyledSpinner = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`;

const BounceAnimation = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const Bounce = styled.div`
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${BounceAnimation} 1.4s infinite ease-in-out both;
  animation: ${BounceAnimation} 1.4s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay};
`;
