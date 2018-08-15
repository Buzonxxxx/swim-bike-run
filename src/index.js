import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Jumbotron, Button } from 'react-bootstrap'
import Header from './components/Header/Header'

class Home extends Component {
  
  render() {
    return( 
      <div>
        <div class="container">
        <Header/>
        </div>
        <div class="container">
        <Jumbotron>
          <h1>Swim. Bike. Run.</h1>
          <p>
            Let's go get it!
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Home />,
  document.getElementById('root')
)
