import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './Components/Pages/Home/Home';
import Signup from './Components/Auth/Signup';
import RecipeDetail from './Components/Pages/Recipe/RecipeDetail';
import Account from './Components/Pages/Profile/Account';
function App() {

  return (
    <MantineProvider defaultColorScheme="light">
      <div>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/recipe_detail/:id' element={<RecipeDetail/>}/>
            <Route path='/account_detail/:id' element={<Account/>}/>
         </Routes>
      </div>
    </MantineProvider>
  )
}

export default App
