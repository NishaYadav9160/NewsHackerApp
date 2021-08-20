import React,{useEffect,useState} from 'react';
import {getStoryIds,getStory} from "../Service/HackerNewApi"
import {Story} from "../components/Story"
import { Scroll } from '../hooks/Scroll';
export const StoriesContainer = ()=>{
    const {count}=Scroll()
    const [storyIds,setStoryIds]=useState([]);
    
    useEffect (()=>{
        getStoryIds().then(data =>setStoryIds(data));
      },[]) 

      return (
          <>
          {
         storyIds.slice(0,count).map(storyId => (
         <Story key={storyId} storyId={storyId}/>
         ))}
          </>
          
      )
     

}