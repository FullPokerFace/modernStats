import React from "react";
import Content from "../Content/Content";
import Nav from "../Nav/Nav";

const MainContent = () => (
  <div className="w-full flex flex-col gap-6">
    <Nav />
    <Content />
  </div>
);

export default MainContent;
