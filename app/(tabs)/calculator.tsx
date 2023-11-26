import React from "react";
import useScreenOrientation from "../../hooks/useScreenOrientation";
import { Landscape, Portrait } from "../section/calculator";
import { View } from "react-native";

export default function Calculator() {
  const { isPortrait } = useScreenOrientation();

  if (isPortrait) return <Portrait />;
  return <Landscape />;
}
