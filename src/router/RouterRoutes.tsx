import { Route, Routes, useNavigate } from 'react-router-dom';
import SignInPage from "./pages/signInPage";
import React, { useEffect } from 'react';
import {routeLocationsEnum} from "./Router";
import MainPage from "./pages/mainPage";
import NotFound404 from "./pages/notFound404";
import SignUpPage from "./pages/signUpPage";
import BlogPage from "./pages/blogPage";
import { useAppSelector } from '../store/store';

const RouterRoutes = () => {

  const {user} = useAppSelector(state => state.userReducer)

  const navigation = useNavigate()


  useEffect(() => {
if (user === undefined) {
  navigation(routeLocationsEnum.signUp)
}
  }, [user]);
  return  <Routes>
<Route path='' >


        <Route path={routeLocationsEnum.main} Component={() => <MainPage />} />
        <Route path={routeLocationsEnum.signIn} Component={SignInPage} />
        <Route path={routeLocationsEnum.blogPage} Component={BlogPage} />
        <Route path={routeLocationsEnum.signUp} Component={SignUpPage} />
        <Route path='*' Component={NotFound404}/>

</Route>
    </Routes>
}

export default RouterRoutes