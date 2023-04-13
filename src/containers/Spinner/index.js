import React from "react";
import { Bounce, StyledSpinner } from "./styles";

export const Spinner = () => {
  return (
    <StyledSpinner>
      <Bounce delay="-0.32s" />
      <Bounce delay="-0.16s" />
      <Bounce />
    </StyledSpinner>
  );
};

export default Spinner;
