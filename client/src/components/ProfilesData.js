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
                            
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}

export default ProfilesData;