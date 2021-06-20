import React, {useState} from 'react';
import {ReadWriteBoxit} from "./common";
import {Box, Container, Divider, Grid, TextField} from "@material-ui/core";
import './EditPage.css';


export default function PageTest(props) {
    const [title,setTitle]=useState("");
    const [picture,setPicture]=useState(null);
    const [quote,setQuote]=useState("");
    const [director,setDirector]=useState("");
    const [actorsString,setActorsString]=useState("");
    const [year,setYear]=useState("");

        const handleSaveClick = () => {
        const axios = require('axios').default;
        //const actors=null;
        let actors=null;
        try {
            actors= actorsString.split(",");
        }
        catch(error){
            actors=[];
        }

        const formdata={
            title:title,
            picture:picture,
            quote:quote,
            actors:actors.map(a=>a.trim()),
            year:year
        };
        axios.post('https://movie-quizard-default-rtdb.firebaseio.com/rest/quizard/movies.json',formdata).then(()=>{setTitle("");setQuote("");setPicture(null);setYear("") ;setDirector("");setActorsString("");alert("Saved"); },err=>err);
    };

    return (
        <div>
            Enter new movie information
        <div className="EditList">
            {ReadWriteBoxit("Title",title,setTitle)}
            {ReadWriteBoxit("Quote",quote,setQuote)}
            {ReadWriteBoxit("Url1",picture,setPicture)}
            {ReadWriteBoxit("Year",year,setYear)}
            {ReadWriteBoxit("Director",director,setDirector)}
            {ReadWriteBoxit("Actors (separated by ,)",actorsString,setActorsString)}
            <img src={picture==null || picture==""?"https://i.stack.imgur.com/v3mCQ.png":picture}  className="photo"  alt="picture" height="300"/>
        </div>
        <div className="SaveButton">
        <button  onClick={handleSaveClick} className="button" >{"Save"}</button>
       </div>
        </div>
    );
}



