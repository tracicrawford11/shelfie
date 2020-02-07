import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Product from './Components/Product/Product'

class App extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }
  render () {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>SHELFIE</h1>
      </nav>
      
      <main className='red-boxes'>
        <section>

        </section>
      </main>
      
      <aside className='green-box'>

      </aside>
      
      <Dashboard />
      <Form />
      <Header />
    </div>
  )}
}

export default App;
