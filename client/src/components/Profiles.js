import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";



const Profiles = () => {

    const [profiles, setProfiles] = useState([]);
    const navigate = useNavigate();

    const handleClick=(profileId)=>{
        navigate('/profile/'+profileId)
    }

    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/getProfiles").then((res) =>
            res.json().then((data) => {
                console.log(data);
                setProfiles(data)
            })
                .catch((e) => {
                    console.log(e)
                })
        );
    }, []);

    return (
        <Grid sx={{margin:"20px"}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                   
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default Profiles;