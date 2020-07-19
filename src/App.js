import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Stock from './pages/Stock';
import DataProvide from './DataProvide';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const App = () => {
  return (
    <DataProvide>
      <Router basename={process.env.PUBLIC_URL}>
        <div className='page-wrapper'>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={400} classNames="fade">
                <Switch location={location}>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/bar-stock' component={Stock}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      </Router>
    </DataProvide>
  )
}

export default App
