import { ImageSourcePropType } from "react-native";

export interface Props {
  title: string;
  description?: string;
  source: ImageSourcePropType;
}

export interface ContainerProps {
  windowWidth: number;
}

export interface ContainerCoverProps {
  windowWidth: number;
  windowHeight: number;
}
