import { useEffect, useState } from "react";
import style from "./toast.module.css";

const Toast = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timeoutId;

    const handleToast = (event) => {
      setMessage(event.detail.message);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setMessage(""), 2500);
    };

    window.addEventListener("fakebook:toast", handleToast);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("fakebook:toast", handleToast);
    };
  }, []);

  if (!message) return null;

  return (
    <div className={style["toast"]} role="status" aria-live="polite">
      {message}
    </div>
  );
};

export default Toast;
