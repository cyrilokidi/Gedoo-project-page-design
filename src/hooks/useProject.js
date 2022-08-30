import { useState } from "react";

export const useProject = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return {
    openMenu,
    toggleDrawer
  };
};
