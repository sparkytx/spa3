import React, {useState} from 'react';
import {ReadWriteBoxit} from "./common";
import {Box, Container, Divider, Grid, TextField} from "@material-ui/core";


export default function EditPage(props) {
    const [formdata,setformdata]=useState({
        picture:"https://i.stack.imgur.com/v3mCQ.png",
        quote:"now is the time for all good men to come to the aid of their country",
        actors:[],
        year:""
    });

    const handleLoadClick = () => {

    };

    const handleClick = () => {

        //save to database
        //     // alert("you clicked me "+hints);
        //     if (hints==0){
        //         formdata.picture=answer.picture;
        //         sethints(hints+1);
        //     }
        //     else if (hints==1){
        //         formdata.year=answer.year;
        //         sethints(hints+1);
        //     }
        //     else if (hints==2){
        //         formdata.actors=answer.actors;
        //         sethints(hints+1);
        //     }
        //     else {
        //         alert("no more hints");
        //     }
        //
        //  {ReadWriteBoxit("Actors", <ul>{formdata.actors.map((actors) =>{actors})}</ul>)}
    };

    return (
        <div className="EditList">
            <div className="BoxIt">
                now is the time for all good men to come to the aid of their country,
                {ReadWriteBoxit("Quote",formdata.quote)}
            </div>

              <div className="BoxIt">
                  {ReadWriteBoxit("Url1",formdata.picture)}
                  {/*<button  onClick={handleLoadClick}  className="button">{"Load Image"}</button>*/}
                  {/*<img src={formdata.picture}  className="photo"  alt="picture"/>*/}
              </div>
            <div className="BoxIt">
                {ReadWriteBoxit("Year",formdata.year)}
            </div>
            <div className="BoxIt">
                {ReadWriteBoxit("Director",formdata.director)}
            </div>

             <button  onClick={handleClick}  className="button">{"Save"}</button>
        </div>






    );
}



