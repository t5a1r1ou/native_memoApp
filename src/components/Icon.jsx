import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";

import icomoon from "../../assets/fonts/icomoon.ttf";
import selection from "../../assets/fonts/selection.json";

const Icon = ({ name, size, color }) => {
  const [fontLoaded] = useFonts({ icomoon });
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} />;
};

export default Icon;
