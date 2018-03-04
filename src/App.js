/*Modules*/
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

/*Components*/
import NavBar from './components/NavBar.jsx';
import MainMenu from './components/MainMenu.jsx';
import MagicShop from './components/MagicShop.jsx';
import Blacksmith from './components/Blacksmith.jsx';
import Inn from './components/Inn.jsx';
import Arena from './components/Arena.jsx';
import HeroPanel from './components/HeroPanel.jsx';
import Footer from './components/Footer.jsx';

/*css*/
import './App.css';
import './minireset.min.css';

class App extends Component {
  render() {
    const { opponent, inProgress } = this.props
    return (
            <Router>        
              <div className="main-container">
                <NavBar/>
                <Route exact path="/" component={MainMenu} />
                <Route path="/panel" component={ !inProgress ? MainMenu : opponent === 'none' ? HeroPanel : Arena } /> 
                <Route path="/magic_shop" component={ !inProgress ? MainMenu : opponent === 'none' ? MagicShop : Arena } />
                <Route path="/blacksmith" component={ !inProgress ? MainMenu : opponent === 'none' ? Blacksmith : Arena } />         
                <Route path="/inn" component={ !inProgress ? MainMenu : opponent === 'none' ? Inn : Arena } />
                <Route path="/arena" component={!inProgress ? MainMenu : Arena} />
                <Footer/>
              </div>
            </Router>
    );
  }
}

const mapStateToProps = state => ({
  inProgress: state.startGame.inProgress,
  opponent: state.handleOpponent.opponent
})

export default connect(mapStateToProps,
null
)(App);
