import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";

const ProfilesData = () => {

    const [data, setData] = useState();
    const params = useParams();
    useEffect(() => {
        console.log(params)
        fetch('/getProfile/' + params.id).then((res) =>
            res.json().then((result) => {
                console.log(result);
                setData([result]);
            })
                .catch((e) => {
                    console.log(e)
                })
        );
    }, [])
    return (
        <>
            <Grid container>
                <Grid item md={8}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableCell align="First Name"></TableCell>
                                <TableCell align="Last Name"></TableCell>
                                <TableCell align="Email"></TableCell>
                                <TableCell align="Company Name"></TableCell>
                                <TableCell align="Company Url"></TableCell>
                                <TableCell align="Role / Designation"></TableCell>
                                <TableCell align="Customer Profile Details"></TableCell>
                                <TableCell align="Target Selling City"></TableCell>
                                <TableCell align="Focused Industries"></TableCell>
                                <TableCell align="Selling to"></TableCell>
                                <TableCell align="Size of Company"></TableCell>
                                <TableCell align="Revenue of Company"></TableCell>
                                <TableCell align="Average deal size"></TableCell>
                                <TableCell align="Good leads"></TableCell>
                                <TableCell align="Main skills / strengths"></TableCell>
                            </TableHead>
                            {data.map((ele) => (
                                <TableBody>
                                    <TableCell component="th" scope="row">
                                        {ele.firstName}
                                    </TableCell>
                                    <TableCell align="right">{ele.lastName}</TableCell>
                                    <TableCell align="right">{ele.email}</TableCell>
                                    <TableCell align="right">{ele.role}</TableCell>
                                    <TableCell align="right">{ele.protein}</TableCell>
                                    <TableCell align="right">{ele.lastName}</TableCell>
                                    <TableCell align="right">{ele.email}</TableCell>
                                    <TableCell align="right">{ele.role}</TableCell>
                                    <TableCell align="right">{ele.industryName}</TableCell>
                                    <TableCell align="right">{ele.customerProfileDetails}</TableCell>
                                    <TableCell align="right">{ele.companyUrl}</TableCell>
                                    <TableCell align="right">{ele.sellingProfileNames}</TableCell>
                                    <TableCell align="right">{ele.dealSize}</TableCell>
                                    <TableCell align="right">{ele.leads}</TableCell>
                                    <TableCell align="right">{ele.skillsandStrengths}</TableCell>
                                </TableBody>
                            ))}
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default ProfilesData;