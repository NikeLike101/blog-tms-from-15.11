import React from 'react';
import MainContext from "./store";
import Router from "./router/Router";

function App() {

    return (

        <MainContext>
            <Router/>
        </MainContext>
  );
}

export default App;
