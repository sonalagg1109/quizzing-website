import React ,{ useEffect, useLayoutEffect, useState } from 'react'
import Questions from './Questions'
import {useSelector ,useDispatch} from 'react-redux'
import { MoveNextQuestion } from '../hooks/FetchQuestion'
import { MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'


export default function Quiz()
{
   const [check,setChecked]=useState(undefined)
   const result=useSelector(state=>state.result.result);
   const trace= useSelector(state=>state.questions.trace);
   const queue=useSelector(state=>state.questions.queue);
  

    const dispatch=useDispatch()
//    useEffect(()=> { /*useLayoutEffect(..data:any[]): void*/
//       console.log(result)
//  })
    //event handler
    function onNext(){
        console.log('On next click')
        if(trace<queue.length)
        {
        dispatch(MoveNextQuestion())

        if(result.length<=trace)
        {
        dispatch(PushAnswer(check))
        }
        }


        setChecked(undefined)


        
    }
    function onPrev(){
       // console.log('On prev click')
        if(trace>0)
        {
        dispatch(MovePrevQuestion())
        }
    }

    function onChecked(check)
    {
        console.log(check)
        setChecked(check)
    }

    // finished exam after the last question
    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace="true" ></Navigate>
    }
    return (
        <div className='container'>
            <h1 className='title text-light'> Cuizzy: Quizzing Website </h1>
            {/*display questions*/}

            <Questions onChecked={onChecked}/> 

            <div className='grid'>
                {trace>0?<button className='btn prev' onClick={onPrev}>Prev</button> :<div></div>}
                <button className='btn next' onClick={onNext} >Next</button>
            </div>

        </div>
    )
}