import React from "react";

import { Container } from "./styles";
import { Props } from "./types";

const Separator = ({ width, height }: Props) => {
  return <Container w={width} h={height} />;
};

export default Separator;
