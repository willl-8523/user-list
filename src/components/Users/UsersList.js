import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length === 0 ? 
          'No User yet.' 
          :
          props.users.map((user) => (
            <li key={user.id}>
              {user.username} ... {user.age} years old
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UsersList;
