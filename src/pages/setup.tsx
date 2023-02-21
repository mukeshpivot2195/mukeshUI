import React from "react"
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import './setup.css'
const Setup =()=>{
    return (
        <Box>
        <Grid container maxWidth="lg" className="setup-container">
            <Grid item lg={8}>
        <Card>
            <CardContent>
            <Typography variant="h2">
                Wel-Come
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
               Looks like you are setting up the machine. Our setup helper will guide you through the setup
                </Typography>
                <Typography variant="body1" component="div" color="text.secondary">
                   Before we proceed with software configuration, please verify that the following manual setup are complete
                </Typography>

                <ul className="setup-list">
                    <li>Is water source is attached to dispenser?</li>
                    <li>Is carbonated tank setup and connected?</li>
                    <li>Are syrups and flavours connected to the dispenser?</li>
                </ul>
            

            
                <Typography variant="body1" color="text.secondary">


            
                   If the above is complete, please press 'Proceed'. If not, please complete the manual steps and only then Proceed
                </Typography>
            
            </CardContent>
            <CardActions>
                <Button size="small">Proceed</Button>
            </CardActions>
            </Card>
                
             
            </Grid>
        </Grid>
        </Box>
    )
}

export default Setup