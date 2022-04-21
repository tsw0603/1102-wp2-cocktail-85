import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home_85 from './pages/Home_85'
import About_85 from './pages/About_85'
import SingleCocktail_85 from './pages/SingleCocktail_85'
import Error_85 from './pages/Error_85'
// import components
import Navbar_85 from './components/Navbar_85'
function App_85() {
  return (
    
    <Router>
      <Navbar_85 />
      <Switch>
        <Route exact path='/'>
          <Home_85 />
        </Route>
        <Route path="/about">
          <About_85 />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail_85 />
        </Route>
        <Route path="*">
          <Error_85 />
        </Route>
      </Switch>
    </Router>

  )
}

export default App_85
