import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Pages/About';

function App() {
  return (
 <>
 <Header/>
 <Switch>
   
   <Route path="/" component={Home}/>
   <Route path="/about" component={About}/>

 </Switch>
 <Footer/>
 </>
  );
}

export default App;
