import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import CentralSection from "../CentralSection";


function PageNotFound(props) {

    return <CentralSection heading="Oops!">
        <Typography align="center" gutterBottom>Something went wrong. TODO: Report issue github link</Typography>
        {/* Link to github page for raising issue. */}
        <Grid container style={{marginTop: '30px'}} justify="center">
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => props.history.push("/")}>Go home</Button>
            </Grid>
        </Grid>
    </CentralSection>
}


export default PageNotFound