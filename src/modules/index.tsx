import React from 'react';
import { Route } from 'react-router';
import { MainContainer } from './components/main.container';
import { Users } from './users';

export const Routes = () => {
    return <MainContainer>
        <Route path="/users" component={Users} />
    </MainContainer>
}
