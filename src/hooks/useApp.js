import { useState } from "react";

export const useApp = () => {
  const [openAddDialog, setOpenDialog] = useState(false);
  const handleOpenAddDialog = () => setOpenDialog(true);
  const handleCloseAddDialog = () => setOpenDialog(false);

  return {
    openAddDialog,
    handleOpenAddDialog,
    handleCloseAddDialog
  };
};
