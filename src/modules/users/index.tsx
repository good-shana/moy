import React from 'react';
import { Route } from 'react-router';
import { UsersContainer } from './containers/users.container';

export const Users = () => {
    return <div>
        <Route path="/users" exact component={UsersContainer} />
    </div>
}
