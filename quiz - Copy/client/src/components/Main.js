import React, { useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../styles/Main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'
import { signOut } from 'firebase/auth';
import { auth } from './firebase';


export default function Main()
{
    const inputRef=useRef(null)
    const dispatch= useDispatch()
    const navigate = useNavigate();


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
          
    }}

    function handleLogout() {
        signOut(auth)
          .then(() => {
            console.log("User logged out successfully.");
            navigate('/auth'); // redirect to login/signup
          })
          .catch((error) => {
            console.error("Error logging out:", error);
          });
      }

    return (
        <div className='container'>
            <h1 className='title text-light'>Cuizzy: Quizzing Website</h1>

            <ol>
                <li> You will be asked 10 questions one after another.</li>
                <li>10 points awarded for correct answer. </li>
                <li>Each question has three options.You can choose only one option.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="form">
                <input ref={inputRef} className='userid' type="text" placeholder='Username*'/>
            </form>
            <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}> Start Quiz</Link>
            </div>


            <div className='logout-btn-container'>
        <button className='btn logout-btn' onClick={handleLogout}>Logout</button>
      </div>
        </div>
    )
}


