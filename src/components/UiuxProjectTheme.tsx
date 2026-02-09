import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const UiuxProjectTheme = () => {
  useEffect(() => {
    document.body.classList.add("uiux-project-theme");

    return () => {
      document.body.classList.remove("uiux-project-theme");
    };
  }, []);

  return <Outlet />;
};

export default UiuxProjectTheme;
