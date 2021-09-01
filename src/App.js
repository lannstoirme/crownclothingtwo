import './App.css';
import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signup/signinsignup.page';
import { auth } from './firebase/firebase.utils';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  

  useEffect(()=> {
    let unsubscribeFromAuth = null;
     unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
      return () => {
        unsubscribeFromAuth();
      }
    })
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;