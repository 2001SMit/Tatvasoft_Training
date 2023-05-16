import React, { Component } from 'react';
import Userlist from './Userlist';
import HOC from './HOC';

const users = [
  { id: 12002080501068, name: 'Smit' }
];

const UserListWithHOC = HOC(Userlist, { users });

class Home extends Component {
  render() {
    return (
      <div>
        <UserListWithHOC />
      </div>
    );
  }
}

export default Home;