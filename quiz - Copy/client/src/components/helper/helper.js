//import { answers } from "../../database/data";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import axios from 'axios';
import { useState, useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from '../firebase';




export function attempts_Number(result){
    return result.filter(r=>r!==undefined).length;
}

export function earnPoints_Number(result,answers,point)
{
    return result.map((element,i)=> answers[i]===element ).filter(i => i).map(i =>point).reduce((prev,curr)=>prev+curr,0)
}

export function flagResult(totalPoints,earnPoints){
    return (totalPoints*50/100)<earnPoints;
}

export function CheckUserExist({children})
{
    // const auth=useSelector(state=>state.result.userId)
    // return auth? children :<Navigate to={'/'} replace={true}></Navigate>


    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to auth state changes.
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup subscription on unmount.
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If no user is logged in, redirect to /auth page.
  if (!user) {
    return <Navigate to={"/auth"} replace={true} />;
  }

  return children;
}


//get server data

export async function getServerData(url,callback){
const data =await(await axios.get(url))?.data;
return callback ? callback(data) :data;
}

//post server data

export async function postServerData(url,result,callback){
    const data =await(await axios.post(url,result))?.data;
    return callback ? callback(data) :data;
    }


