import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
 <>
 <Header/>
 <Switch>
   
   <Route path="/" component={Home}>

   </Route>
 </Switch>
 <Footer/>
 </>
  );
}

export default App;
