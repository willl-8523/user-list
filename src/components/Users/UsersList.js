import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.iterable.map((user) => (
          <li>
            {props.username} ... {props.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
