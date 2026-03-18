import React from "react";

function Entity({ entityHealth, entityHealthName }) {
  const entityHealthBar = {
    width: `${entityHealth}%`,
  };

  return (
    <section className="container">
      <h2>{entityHealthName}</h2>
      <div className="healthbar">
        <div className="healthbar__value" style={entityHealthBar}></div>
      </div>
    </section>
  );
}

export default Entity;
