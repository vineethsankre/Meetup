import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'

import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    showError: false,
  }

  changeName = name => this.setState({name})
  changeTopic = topic => this.setState({topic})
  registerName = () => this.setState({isRegistered: true, showError: false})
  updateError = () => this.setState({showError: true})

  render() {
    const {name, topic, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
