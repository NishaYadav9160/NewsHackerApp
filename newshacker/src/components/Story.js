import React,{useEffect,useState} from 'react';
import { getStory, getStoryIds } from '../Service/HackerNewApi';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { MapTimesStory } from '../mappers/MapTimesStory';
import "../styles/NewshackerCSS.css"
export const Story =({storyId}) =>{
const [story,setStory]=useState({});
    useEffect (()=>{
 getStory(storyId).then(data=>data && data.url && setStory(data))
    },[])

     return story && story.url?(
         <>
          <CssBaseline />
          
          <Container fixed>
        
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '18vh' }}>
          <a href={story.url}>
              <p>{story.title}</p>
          </a>
          <div
        >
        <div className="flex-content">
        <p>By:</p><p>{story.by}</p>
        </div>
        <div className="flex-content">
        <p> Posted:</p> <p>{MapTimesStory(story.time)}</p>
         </div>
         </div>
         </Typography>
         </Container>
         </>
        
     ):null
    
}