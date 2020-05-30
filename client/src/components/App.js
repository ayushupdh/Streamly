import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'


const PageOne = ()=>{
    return(

        <div> 
            Page one
            <Link to='/page2'>page 2</Link>

        </div>
    )
}
const PageTwo = ()=>{
    return(

        <div> 
            Page two
            <Link to='/'>page 1</Link>
            </div>
    )
}
 class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
           <div>
           <Route path ="/" exact component={PageOne}/>
            <Route path ="/page2"  component={PageTwo}/>
           </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;