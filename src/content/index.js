import React from "react";
import Contentfooter from "./Contentfooter";
import List from "./List";

function Content() {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <List></List>
      </section>
      <Contentfooter></Contentfooter>
    </>
  );
}

export default Content;
