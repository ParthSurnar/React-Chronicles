import React from "react";

/* 📌 Higher-Order Component Example */
const withBorder = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <Component {...props} />
    </div>
  );
};

const SimpleComponent: React.FC = () => <h2>I'm a wrapped component!</h2>;

export default withBorder(SimpleComponent);
