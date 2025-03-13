
import '../styles/App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

//import components
import NavBar from './NavBar'; 
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import LoginSignup from './LoginSignup';
import ELearning from './ELearning';  
import { CheckUserExist } from './helper/helper';

const router=createBrowserRouter([
  {
    path :'/',
    element://<Main></Main> 
    (<>
    <NavBar />        
    <Main />
  </>),

  } ,

  
  {
    path: '/auth',
    element:<LoginSignup />
        
  }
  ,

  {
    path :'/quiz',
    element:(
    <>
    <NavBar/>
    <CheckUserExist> <Quiz/></CheckUserExist>
    </>
     ),

  },

  {
    path :'/result',
    element:(
      <> 
      <NavBar/>
      <CheckUserExist> <Result/></CheckUserExist>
      </>
      ),
  },
  {
    path: '/e-learning',
    element: (
      <>
        <NavBar />
        <ELearning />
      </>
    ),
  }
  
])
function App() {
  return (
    <>
    < RouterProvider router={router} />
    </>
  );
}

export default App;
