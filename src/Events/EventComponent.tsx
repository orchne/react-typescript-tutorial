import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <div>
      <button onClick={onClick}>Submit</button>
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
