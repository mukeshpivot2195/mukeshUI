import { Grid, Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import valves from './valve.json';
import ingredians from './ingredian.json'

import "./ConfiValve.css";
import Icon from "@mui/material/Icon";

export const ConfiValve = () => {
    const [valveData, setValveData] = useState(valves);
    // const [isOpenIngrediants, setIsOpenIngrediants] = useState(false);
    const [isSyrup, setIsSyrup] = useState(false);
    const [selectIngrediant, setSelectIngrediant] = useState("");
    const [selectValveType, setSelectValveType] = useState("");
    const [flag, setFlag] = useState(true);



    useEffect(() => {
        if (valveData.length) {
            setValveData(valveData);
        } else {
            setValveData(valves);
        }
    }, [valveData]);

    const handleIngrediantSelection = (ingrediant: any) => {
        setSelectIngrediant(ingrediant);
    }

    const handleSelection = (type: any) => {
        
        setSelectValveType(type);
        // setIsOpenIngrediants(true);
        setIsSyrup(type.includes("S") ? true : false);
        setFlag(!flag);

    }

    const handleSubmite = () => {
        let sampleData = [...valveData];
        sampleData.forEach(x=>{
            if(x.name === selectValveType)
            {
                x.pumps[0].inserted = true;
                x.syrupType = selectIngrediant;
            }
        });
        setValveData(sampleData);
    }
    return (
        <>
            <div className="DIV1">
                <h3>Valve-Ingrediant Assignment</h3>
                <p>Please select a valve and then select the ingredient you have attached to the valve</p>

            </div>
            <Grid container xs={12} className="padding1">
                <Grid item xs={8} className="fullborder2" spacing={3}>
                    <Grid container direction="row" className="firstgrid">
                        
                        <Grid item xs={4}>

                            <Grid container direction="column" spacing={4}>
                                {valveData.filter(x=>x.name.includes("S")).splice(0, 8).map(item=>{
                                    return (
                                        <Grid item xs={12}>
                                            {item.pumps[0].inserted ? <span><Button variant="contained" color={"error"}>{`${item.name} / ${item.syrupType || "Assigned"} `} </Button> <button id="btnx">X</button></span> :
                                        <Button onClick={()=>handleSelection(item.name)} variant="contained" id="btn">{item.name}</Button>}
                                    </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>

                            <Grid container direction="column" spacing={4}>
                            {valveData.filter(x=>x.name.includes("S")).splice(8, 15).map(item=>{
                                    return (
                                        <Grid item xs={12}>
                                            {item.pumps[0].inserted ? <span><Button variant="contained" color={"error"}>{`${item.name} / ${item.syrupType || "Assigned"} `} </Button> <button id="btnx">X</button></span> :
                                        <Button onClick={()=>handleSelection(item.name)} variant="contained" id="btn">{item.name}</Button>}
                                    </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>

                        <Grid item xs={4}>

                            <Grid container direction="column" spacing={4}>
                                {valveData.filter(x=>x.name.includes("A")).map(item=>{
                                    return (
                                        <Grid item xs={12}>
                                            {item.pumps[0].inserted ? <span><Button variant="contained" color={"error"}>{`${item.name} / ${item.syrupType || "Assigned"} `}</Button> <button id="btnx">X</button></span> :
                                        <Button onClick={()=>handleSelection(item.name)} variant="contained" id="btn">{item.name}</Button>}
                                    </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>



                <Grid item xs={3} className="fullborder1">
                    <span className="title"><b>Select Ingrediant</b></span>

                    <Grid container direction="row" spacing={2}>

                        <Grid item xs={4}>
                            <Grid container direction="column" spacing={5}>
                                {ingredians.map(item=>{
                                    return (                               
                                         <Grid item xs={12}>
                                        <Button onClick={()=>handleIngrediantSelection(item.name)}  variant="contained" id="btn">{item.name}</Button>
                                    </Grid>)
                                })}
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container direction="column" spacing={5}>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container direction="column" spacing={5}>
                                <Grid item xs={12}>
                                    <Button  variant="contained" disabled={isSyrup} onClick={e => handleIngrediantSelection("Cherry")} id="btn">Cherry</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" disabled={isSyrup} onClick={e => handleIngrediantSelection("Vanila")} id="btn">Vanila</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" disabled={isSyrup} onClick={e =>handleIngrediantSelection("Lyclee")} id="btn">Lyclee</Button>
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <button disabled={isSyrup} onClick={e => handleIngrediantSelection(e)}>Strawberry</button>
                                </Grid>
                                <Grid item xs={12}>
                                    <button disabled={isSyrup} onClick={e => handleIngrediantSelection(e)}>Cherry Vanila</button>
                                </Grid>
                                <Grid item xs={12}>
                                    <button disabled={isSyrup} onClick={e => handleIngrediantSelection(e)}>Chocolate</button>
                                </Grid>
                                <Grid item xs={12}>
                                    <button disabled={isSyrup} onClick={e => handleIngrediantSelection(e)}>Lemon</button>
                                </Grid>
                                <Grid item xs={12}>
                                    <button disabled={isSyrup} onClick={e => handleIngrediantSelection(e)}>Orange</button>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
            <div className="btn1">
                <Button variant="contained" id="btn">Pour Valve</Button>
                <Button onClick={handleSubmite} style={{marginLeft: '85rem'}} variant="contained" id="btn">Done</Button>
            </div>



        </>
    )
}