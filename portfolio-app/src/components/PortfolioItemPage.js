import React from "react";

const PortfolioItemPage = (props) => (
  <div>
    <h1>PortfolioItemPage</h1>
    <p>This is from PortfolioItemPage! id: {props.match.params.id}</p>
  </div>
);

export default PortfolioItemPage;
