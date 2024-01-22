import React from "react";
import MenuBar from "../menu-bar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <MenuBar />
      {children}
    </div>
  );
};

export default layout;
