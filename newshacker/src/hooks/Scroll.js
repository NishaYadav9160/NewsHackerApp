import { useState,useEffect } from "react";
import {MAX_NEWS,NEWS_INCREMENT} from "../constants/Index"

export const Scroll = ()=>{
    const [loading,setLoading] = useState(false)
    const [count,setCount]=useState(NEWS_INCREMENT)
  const handleScroll =()=>{
      if(window.innerHeight+document.documentElement.scrollTop !==
        document.documentElement.offsetHeight||
        loading){
            return false;
        }
        setLoading(true)
  };
  useEffect(()=>{
 if(!loading)return;

 if(count +NEWS_INCREMENT >=  MAX_NEWS){
     setCount(MAX_NEWS);

 }else{
     setCount(count+NEWS_INCREMENT)
 }
 setLoading(false)

  },[loading])

  useEffect(()=>{
      window.addEventListener('scroll',handleScroll);
      return () => window.removeEventListener('scroll',handleScroll);
  },[]);
  return {count}


}