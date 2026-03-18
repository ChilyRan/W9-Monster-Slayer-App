import React from "react";

function Entity({ entityHealth, entityName }) {
  const entityHealthBar = {
    width: `${entityHealth}%`,
  };

  return (
    <section className="container">
      <h2>{entityName}</h2>
      <div className="healthbar">
        <div className="healthbar__value" style={entityHealthBar}></div>
      </div>
    </section>
  );
}

export default Entity;
