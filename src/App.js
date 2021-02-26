import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { TypeOfEmployment } from "./components/TypeOfEmployment/TypeOfEmployment";
import { Income } from "./components/Income/Income";
import { ChooseBank } from "./components/ChooseBank/ChooseBank";
import { Header } from "./components/Header/Header";
import { EmailConfirming } from "./components/EmailConfirming/EmailConfirming";
import { Container } from "./components/MainContainer/MainContainer";
import { ChooseTheRealty } from "./components/ChooseTheRealty/ChooseTheRealty";
import { WhatIsYourName } from "./components/WhatIsYourName/WhatIsYourName";
import { AboutYou } from "./components/AboutYou/AboutYou";
import { Resume } from "./components/Resume/Resume";
import { Congrats } from "./components/Congrats/Congrats";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />

        <Route exact path='/'>
          <Redirect to='/your-name' />
        </Route>

        <Route path='/your-name'>
          <Container>
            <WhatIsYourName />
          </Container>
        </Route>

        <Route path='/about-you'>
          <Container>
            <AboutYou />
          </Container>
        </Route>

        <Route path='/email'>
          <Container>
            <EmailConfirming />
          </Container>
        </Route>

        <Route path='/type-of-employment'>
          <Container>
            <TypeOfEmployment />
          </Container>
        </Route>

        <Route path='/choose-bank'>
          <Container>
            <ChooseBank />
          </Container>
        </Route>

        <Route path='/choose-the-realty'>
          <Container>
            <ChooseTheRealty />
          </Container>
        </Route>

        <Route path='/income'>
          <Container>
            <Income />
          </Container>
        </Route>

        <Route path='/resume'>
          <Resume />
        </Route>

        <Route path='/congrats'>
          <Congrats />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
