import './App.css';
import Nav from './components/nav/Nav'
import Header from './components/header/Header';
import Content from './components/content/Content'
import Movie from './components/movie/Movie.js';
import { Route , Routes } from 'react-router-dom';
import Account from './components/account/Account';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
     <Nav/>
      <Routes>
      <Route path='/home' element={<><Header/>
       <Content/></>}/>
     <Route path='/movie/:id' element={<Movie/>}/>
     <Route path='/' element={<Account/>}/>
      </Routes>
    
    </>
  );
}

export default App;
