/* eslint-disable import/first */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import Container from './component/layout/layout';
import './index.css';

const UserPage = lazy(() => import('./pages/UserPage'));


const AppIndex = () => {
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="user-page" component={UserPage}/>
                </Switch>
            </Suspense>
        </Container>
    );
};

export default AppIndex;
