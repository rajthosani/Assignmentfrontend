import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { CardContent } from "@mui/material";


export default function Card(){
    const URL="http://localhost:8800/api/movies/";
    const [data,setdata]=useState();
    useEffect(()=>{
        const fetchdata=async()=>{
            const response=await axios.get(URL);
            setdata(response?.data);
        }
        fetchdata();
    },[]);
    console.log("data is",data);
    return(
        <>
            {data?.map(movie=>(
                <div style={{padding:"10px"}}>
                    <div style={{backgroundColor:"yellow",width:"200px"}}>
                        <p>{movie?.name}</p>
                        <p>{movie?.release_date}</p>
                        <p>{movie?.rating}</p>
                    </div>
                </div>
            
            ))}
        
            

         
        </>
        );
};