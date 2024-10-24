import { useContext } from "react";
import { NavContext } from "../context/navContext";

export const useNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useNav debe ser usado dentro de un NavProvider");
  }

  return context;
};
