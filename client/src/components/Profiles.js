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
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                First Name
                            </TableCell>
                            <TableCell align="right">
                                Last Name
                            </TableCell>
                            <TableCell align="right">
                                Email
                            </TableCell>
                            <TableCell align="right">
                                Company Name
                            </TableCell>
                            <TableCell align="right">
                                Company Url
                            </TableCell>
                            <TableCell align="right">
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {profiles.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th':
                                        { border: 0 }
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell align="right">
                                    {row.lastName}
                                </TableCell>
                                <TableCell align="right">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">
                                    {row.companyName}
                                </TableCell>
                                <TableCell align="right">
                                    {row.companyUrl}
                                </TableCell>
                                <TableCell align="right">
                                    <Button  onClick={() => handleClick(row._id)}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default Profiles;