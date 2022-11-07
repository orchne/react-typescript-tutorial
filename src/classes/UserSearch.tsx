import React, { Component } from "react";

interface Props {
  users: {
    name: string;
    age: number;
  }[];
}

interface UserState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<Props> {
  state: UserState = {
    name: "",
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name.toLowerCase() === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    return (
      <>
        <h3>User Search</h3>

        <input
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button onClick={this.onClick}>Find</button>
        <div>
          {this.state.user && this.state.user.name}
          {this.state.user && this.state.user.age}
        </div>
      </>
    );
  }
}

export default UserSearch;
