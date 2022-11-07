import React from "react";
import { useState } from "react";

const users = [
  { name: "Jean", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Alex", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [found, setFound] = useState<
    { name: string; age: number } | undefined
  >();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name;
    });

    setFound(foundUser);
  };

  return (
    <>
      <h3>User Search</h3>

      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Find</button>
      <div>
        {found && found.name}
        {found && found.age}
      </div>
    </>
  );
};

export default UserSearch;
