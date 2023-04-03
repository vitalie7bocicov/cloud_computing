const express = require('express');
const axios = require('axios');
const cors = require('cors');
const addDataFromApis = require("./utils/addDataFromApis");
require('dotenv').config()
const app = express();

app.use(cors());
const port = 5001;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: '*'
}));

app.use(express.json());

const API_HOST = 'localhost:5000'; // Replace with your desired API host

function handleError(res, error){
    if (error.response) {
        const status = error.response.status;
        const message = error.response.statusText;
        res.status(status).send(`Error ${status}: ${message}`);
        console.error(error);
    } else {
        res.status(500).send('Server error');
    }
}

app.get('/dealerships', async (req, res) => {
    try {
        const dealerships = await axios.get(`http://${API_HOST}/car_dealerships`);

        res.send(dealerships.data);
    } catch (error) {
        handleError(res, error);
    }
})

app.get('/dealerships/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dealership = await axios.get(`http://${API_HOST}/car_dealerships/${id}`);

        res.send(dealership.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.get('/dealerships/:id/cars', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await axios.get(`http://${API_HOST}/car_dealerships/${id}/cars`);

        const cars = await addDataFromApis(response.data);
        res.send(cars);
    } catch (error) {
        handleError(res, error);
    }
});

app.delete('/dealerships/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteReq = await axios.delete(`http://${API_HOST}/car_dealerships/${id}`);
        res.send(deleteReq.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.put('/dealerships/:id', async(req, res) => {
    const dealership = req.body;
    if(dealership.isOpen)
        dealership.isOpen = 1;
    else
        dealership.isOpen = 0;
    const id = req.params.id;
    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    try {
        const response = await axios.put(`http://${API_HOST}/car_dealerships/${id}`, dealership, config);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.post('/dealerships', async(req, res) => {
    const dealership = req.body;
    if(dealership.isOpen)
        dealership.isOpen = 1;
    else
        dealership.isOpen = 0;
    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    try {
        const response = await axios.post(`http://${API_HOST}/car_dealerships`, dealership, config);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.get('/cars', async (req, res) => {
    try {
        const response = await axios.get(`http://${API_HOST}/cars`);
        const cars = await addDataFromApis(response.data);
        res.send(cars);
    } catch (error) {
        handleError(res, error);
    }
})

app.get('/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const car = await axios.get(`http://${API_HOST}/cars/${id}`);
        res.send(car.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.delete('/cars/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteReq = await axios.delete(`http://${API_HOST}/cars/${id}`);
        res.send(deleteReq.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.put('/cars/:id', async(req, res) => {
    const car = req.body;
    const id = req.params.id;
    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    try {
        const response = await axios.put(`http://${API_HOST}/cars/${id}`, car, config);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.post('/cars', async(req, res) => {
    const car = req.body;
    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    try {
        const response = await axios.post(`http://${API_HOST}/cars`, car, config);
        res.send(response.data);
    } catch (error) {
        handleError(res, error);
    }
});

app.listen(port,() => {
    console.log("Server is listening on port ", port);
})

