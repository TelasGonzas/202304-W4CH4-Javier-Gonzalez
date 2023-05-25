import { useState } from "react";

export function UsePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleCall() {
    setIsCalling(true);
    handleDisplayMessage();
  }
  function handleHang() {
    setIsCalling(true);
    setPhoneNumber("");
    handleDisplayMessage();
  }

  function handleDisplayMessage() {
    if (isCalling !== true) {
      return "...";
    }
    return "message";
  }

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
    handleDisplayMessage,
  };
}
