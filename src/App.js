import { BrowserRouter as Router } from 'react-router-dom';

//import css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//import components
import { Main, Header, Footer } from './components/Layout';


export default function App() {
  return (

    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>

  );
}
