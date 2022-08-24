import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar'
import { Route, Switch } from 'wouter'
function App () {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/orders/all' component={Home} />
      </Switch>

    </div>
  )
}

export default App
