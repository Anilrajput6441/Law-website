"use client";

import { createContext, useContext, useState } from "react";

type PopupContextType = {
  isPopupVisible: boolean;
  triggerPopup: () => void;
};

const PopupContext = createContext<PopupContextType>({
  isPopupVisible: false,
  triggerPopup: () => {},
});

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const triggerPopup = () => {
    setIsPopupVisible(true);
    setTimeout(() => setIsPopupVisible(false), 3000);
  };

  return (
    <PopupContext.Provider value={{ isPopupVisible, triggerPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
