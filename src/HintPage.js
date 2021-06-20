import React, {useState} from 'react';
import {Grid, Divider, Box, TextField, Container,Button} from '@material-ui/core';
import {ReadOnlyBoxit} from "./common";

function HintPage(props) {
    const [formdata,setformdata]=useState({
        picture:"https://i.stack.imgur.com/v3mCQ.png",
        quote:"something said",
        actors:[],
        year:""
    });
    const handleClick = () => {
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
    };


    return (
        <Container>
        <Grid alignItems="center">
            {/*<Grid Item>*/}
            {/*    BOB*/}
            <Box paddingBottom={4} paddingTop={3}>
                {ReadOnlyBoxit("Quote",formdata.quote)}
            </Box>

            </Grid>
        <Grid container spacing={6} >
            <Grid item>
                <img src={formdata.picture}  className="photo"  alt="picture" height="300"/>
            </Grid>
            <Grid item>
                {ReadOnlyBoxit("Year",formdata.year)}
            </Grid>
            <Grid item>
                {ReadOnlyBoxit("Actors", <ul>{formdata.actors.map((actors) =><li>{actors}</li>)}</ul>)}
            </Grid>
            <Grid item>
                {ReadOnlyBoxit("Director",formdata.director)}
            </Grid>
        </Grid>
            <button  onClick={handleClick}  className="button">{"Hint"}</button>
        </Container>
    );
}

export default HintPage;