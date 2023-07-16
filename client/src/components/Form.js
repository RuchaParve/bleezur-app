import React from "react";
import { TextField, Button, Container, Stack, Grid, Typography, Select, MenuItem, InputAdornment, FormControl } from '@mui/material';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [role, setRole] = useState('')
    const [industryName, setIndustryName] = useState('')
    const [customerProfileDetails, setCustomerProfileDetails] = useState('')
    const [sellingAddress, setSellingAddress] = useState('')
    const [companyUrl, setCompanyUrl] = useState('')
    const [sellingProfileNames, setSellingProfileNames] = useState('')
    const [selectedCompanySize, setSelectedCompanySize] = useState('')
    const [companyRevenue, setCompanyRevenue] = useState('')
    const [dealSize, setDealSize] = useState('')
    const [leads, setLeads] = useState('')
    const [skillsandStrengths, setSkillsandStrengths] = useState('')

    const navigate = useNavigate();


    const companySize = [
        "1-10",
        "11-50",
        "51-200",
        "201-500",
        "501-1000",
        "1001-5000",
        "5001-10000",
        "10000+"
    ]

    const revenue = [
        "$ 0-500000",
        "$ 500001 - 1000000",
        "$ 1000001-10000000",
        "$ 10000001+",
    ]

    useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("/get").then((res) =>
            res.json().then((data) => {
                console.log(data);
            })
        );
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let obj = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "companyName": companyName,
            "role": role,
            "industryName": industryName,
            "customerProfileDetails": customerProfileDetails,
            "sellingAddress": sellingAddress,
            "companyUrl": companyUrl,
            "sellingProfileNames": sellingProfileNames,
            "dealSize": dealSize,
            "leads": leads,
            "skillsandStrengths": skillsandStrengths
        }

        const response = await fetch("/addProfile/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then((res) =>
                res.json().then((data) => {
                    alert(res);
                    navigate('/profiles')
                }))
        console.log(obj);
    }

    return (
        <Grid container sx={{ padding: "50px", background: "#f5f5f5" }}>
            <Grid item md={12} sx={{ marginBottom: "20px" }}>
                <Typography sx={{ fontWeight: 'bold' }}>Let us define your Ideal Customer Profile</Typography>
            </Grid>
            <Grid item md={6}>
                <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                    <label for="name-field">
                    <Typography display="inline">Your Name </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4, mt: 2 }}>
                        <label for="name-field">
                            First Name
                        </label>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            fullWidth
                            required
                        />
                        <label for="name-field">
                            Last Name
                        </label>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            fullWidth
                            required
                        />
                    </Stack>
                    <label for="name-field">
                    <Typography display="inline">Your Email </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='secondary'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                    <Typography display="inline">Your Company Name </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        onChange={e => setCompanyName(e.target.value)}
                        value={companyName}
                        required
                        fullWidth
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                    <Typography display="inline">Your Company Website/URL </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">http://</InputAdornment>,
                        }}
                        onChange={e => setCompanyUrl(e.target.value)}
                        value={companyUrl}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                    <Typography display="inline">Your Role / Designation </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        onChange={e => setRole(e.target.value)}
                        vale={role}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                    <Typography display="inline">Customer Profile Details </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='standard'
                        color='secondary'
                        onChange={e => setCustomerProfileDetails(e.target.value)}
                        value={customerProfileDetails}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                        <Typography display="inline">Where do yo want to sell? </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        placeholder='City, State, Country - Add multiple'
                        onChange={e => setSellingAddress(e.target.value)}
                        value={sellingAddress}
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                        <Typography display="inline">Which industry do you focus on? </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        placeholder='Industry Domain, Industry Subdomains - Add multiple'
                        onChange={(e) => setIndustryName(e.target.value)}
                        value={industryName}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                        <Typography display="inline">Who do you sell to? </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        placeholder='Roles/Designation - Add multiple'
                        onChange={(e) => { setSellingProfileNames(e.target.value) }}
                        value={sellingProfileNames}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    /><br></br>
                    <label for="name-field">
                        <Typography display="inline">What is the size of the company who you sell to? </Typography><Typography display="inline" sx={{ color: "grey" }}>(required)</Typography>
                    </label><br></br>
                    <FormControl sx={{ width: 300, mt: 1, mb: 4 }}>
                        <Select
                            displayEmpty
                            onChange={(e) => setSelectedCompanySize(e.target.value)}
                            value={selectedCompanySize}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Choose what suits best</em>;
                                }
                                return selected
                            }}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Choose what suits best</em>
                            </MenuItem>
                            {companySize.map((size) => (
                                <MenuItem
                                    key={size}
                                    value={size}
                                >
                                    {size}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br></br>
                    <label for="name-field">
                        What is the revenue of the company you sell to?
                    </label>
                    <br></br>
                    <FormControl sx={{ width: 300, mt: 1, mb: 4 }}>
                        <Select
                            displayEmpty
                            onChange={(e) => setCompanyRevenue(e.target.value)}
                            value={companyRevenue}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Choose what suits best</em>;
                                }
                                return selected
                            }}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Choose what suits best</em>
                            </MenuItem>
                            {revenue.map((size) => (
                                <MenuItem
                                    key={size}
                                    value={size}
                                >
                                    {size}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br></br>
                    <label for="name-field">
                        What is your average deal size?
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        onChange={(e) => setDealSize(e.target.value)}
                        value={dealSize}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <br></br>
                    <label for="name-field">
                        How do you find a good lead right now?
                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        placeholder='Industry Domain, Industry Subdomains - Add multiple'
                        onChange={(e) => setLeads(e.target.value)}
                        value={leads}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <label for="name-field">
                        What are the main skills / strengths that you position to win the deal?                    </label>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        placeholder='Technologies, Services, Capabilities - Add multiple'
                        onChange={(e) => setSkillsandStrengths(e.target.value)}
                        value={skillsandStrengths}
                        multiline
                        rows={4}
                        fullWidth
                        required
                        sx={{ mb: 4, mt: 1 }}
                    />
                    <Button type="submit" style={{ background: "#f6745a", height: 55, color: "white", width: 80 }} >
                        Submit</Button>
                </form>
            </Grid>
        </Grid>
    )
}

export default Form;

