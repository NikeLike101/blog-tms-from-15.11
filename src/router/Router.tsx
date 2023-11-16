import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterRoutes from './RouterRoutes';

export enum routeLocationsEnum {
    main='/',
    signIn='/sign-in',
    signUp= '/sign-up',
    blogPage='/blog',
}

const Router:React.FC = () => {


    return <BrowserRouter>
       <RouterRoutes/>
    </BrowserRouter>
}

export default Router