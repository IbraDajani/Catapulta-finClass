import React from "react";
import Step from "./LocalComponents/Step";

import { Container } from "./styles";
import { Props } from "./types";

const Steps = ({ index }: Props) => {
  return (
    <Container>
      <Step isActive={index === 0} />
      <Step isActive={index === 1} />
      <Step isActive={index === 2} />
    </Container>
  );
};

export default Steps;
