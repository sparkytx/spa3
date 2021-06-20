import {TextField} from "@material-ui/core";
import React from "react";
import "./common.css";

export function ReadOnlyBoxit(title, value){
    return Boxit(title,value,null);
};

export function ReadWriteBoxit(title, value,setValue){
    return Boxit(title,value,setValue);
}


function Boxit(title, value,setValue){
    return (
        <TextField className="BoxIt"
            id="standard-read-only-input"
            label={title}
            defaultValue={value}
            fullWidth={true}
            onChange={null?null: e=>setValue(e.target.value) }
            InputProps={{
                readOnly: setValue==null
            }} />
    );
};



