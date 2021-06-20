import React,{useState}  from 'react';
import {Grid, Divider, Box, TextField} from '@material-ui/core';
import HintPage from "./HintPage";
import {ReadOnlyBoxit} from './common';

export default function QuizPage(props)
{
    function GetQuestions() {
        return [{
            picture:"https://www.indiewire.com/wp-content/uploads/2012/05/citizen-kane-05082012.jpg",
            quote:"You provide the prose poetry, I'll provide the war.",
            actors:["Orson Welles", "Joseph Cotton" ],
            year:"1940",
            title:"citizen kane"
        },
            {
                picture:"https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2012/8/3/1344010021461/North-by-Northwest-008.jpg",
                quote:"Now you listen to me, I'm an advertising man, not a red herring",
                actors:["Cary Grant", "Eva Marie Saint" ],
                year:"1959",
                title:"North By Northwest"
            },
            {
                picture:"https://i.pinimg.com/originals/5a/e6/ce/5ae6cee5b96045a33930770ad18bc75f.jpg",
                quote:"Someday a real rain will come and wipe this scum off the streets.",
                actors:["Robert Deniro", "Jody Foster" ],
                year:"1976",
                title:"taxi driver"
            }];
    }

    function Boxit1(title,value){
        return (
        <Box paddingLeft={3} paddingRight={3}>
            <div>
                {title}
            </div>
            <div>
                {value}
            </div>
        </Box>);
        }


    const  questions=GetQuestions();
    const hintcount=[0,0,0];
    const [score,setScore]=useState(0);
    const [question,setQuestion]=useState(1);
    const [guess,setGuess]=useState("");
    const [totalQuestions,setTotalQuestions]=useState(questions.length);

    return (<Grid>
        <Grid container alignItems="center" className="headerbox" >
            {ReadOnlyBoxit("Question",  question)}
            <Divider orientation="vertical" flexItem />
            {ReadOnlyBoxit("Remaining",totalQuestions)}
            <Divider orientation="vertical" flexItem />
            {ReadOnlyBoxit("Score",score)}
            <Divider orientation="vertical" flexItem />
            {ReadOnlyBoxit("Time","N/A")}
        </Grid>
         <Grid item>
                <TextField id="standard-basic"  label="Movie Title Guess" type="text" value={guess} onChange={(event)=>setGuess(event.target.value)} />
         </Grid>
         <HintPage/>

    </Grid>
       )
        ;

}