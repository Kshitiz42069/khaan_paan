
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './Components/Pages/Home/Home';
import Signup from './Components/Auth/Signup';
import RecipeDetail from './Components/Pages/Recipe/RecipeDetail';
import Account from './Components/Pages/Profile/Account';
import Navbar from './Components/Navbar';
import Explore from './Components/Pages/Explore/Explore';
import Footer from './Components/Pages/Home/component/Footer';
function App() {

  return (
      <div>
         <Routes>
            <Route path='/' element={
              <div className='bg-gray-200'>
                <Navbar/>
                <Home/>
              </div>
            }/>
            <Route path='/login' element={
              <div>
                <Navbar/>
                <Login/>
                <Footer/>
            </div>
            }/>
            <Route path='/signup' element={
              <div>
                <Navbar/>
                <Signup/>
                <Footer/>
            </div>
            }/>
            <Route path='/explore' element={<div>
              <Navbar/>
              <Explore/>
              <Footer/>
            </div>}/>
            <Route path='/recipe_detail/:id' element={
              <div>
                <Navbar/>
                <RecipeDetail/>
                <Footer/>
            </div>
            }/>
            <Route path='/account_detail/:id' element={<Account/>}/>
         </Routes>
      </div>
  )
}

export default App
