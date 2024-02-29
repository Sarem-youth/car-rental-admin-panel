import React, { useState } from "react";
import {
    Button,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Tab,
    Tabs,
    Box,
    Typography,
    Grid,
    Card,
    CardActionArea,
    IconButton,
    CardMedia,
} from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const AddCar = () => {
  const years = Array.from({ length: 16 }, (_, i) => 2009 + i);

  const [tab, setTab] = useState(0);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [number, setNumber] = useState("");
  const [doors, setDoors] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [seats, setSeats] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");

  const categories = {
    Chandigarh: ["Vehicle 1", "Vehicle 2", "Vehicle 3"],
    Ethiopia: ["Vehicle A", "Vehicle B", "Vehicle C"],
  };

  const models = {
    "Vehicle 1": ["Model 1A", "Model 1B", "Model 1C"],
    "Vehicle 2": ["Model 2A", "Model 2B", "Model 2C"],
    // Add similar mappings for all categories
  };

  const makes = {
    "Model 1A": ["Make 1A-1", "Make 1A-2"],
    "Model 1B": ["Make 1B-1", "Make 1B-2"],
    // Add similar mappings for all models
  };

  const handleNext = () => {
    if (tab < 2) {
      setTab(tab + 1);
    } else {
      // Navigate to next page or perform submission
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // setVehicleImage(event.target.files[0]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)}>
        <Tab label="Fill Car Information" />
        <Tab label="Upload Car Documents" />
        <Tab label="Finalize" />
      </Tabs>
      {tab === 0 && (
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <FormControl fullWidth margin="normal">
            <Button variant="contained" component="label">
              Upload Vehicle Image
              <input type="file" required hidden onChange={handleImageChange} />
            </Button>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="city-select-label">City</InputLabel>
            <Select
              labelId="city-select-label"
              value={city}
              label="City"
              onChange={(event) => setCity(event.target.value)}
            >
              <MenuItem value="Chandigarh">Chandigarh</MenuItem>
              <MenuItem value="Ethiopia">Ethiopia</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              value={category}
              label="Category"
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories[city]?.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="model-select-label">Model</InputLabel>
            <Select
              labelId="model-select-label"
              value={model}
              label="Model"
              onChange={(event) => setModel(event.target.value)}
            >
              {models[category]?.map((model) => (
                <MenuItem key={model} value={model}>
                  {model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="make-select-label">Make</InputLabel>
            <Select
              labelId="make-select-label"
              value={make}
              label="Make"
              onChange={(event) => setMake(event.target.value)}
            >
              {makes[model]?.map((make) => (
                <MenuItem key={make} value={make}>
                  {make}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="year-select-label">Year</InputLabel>
            <Select
              labelId="year-select-label"
              value={year}
              label="Year"
              onChange={(event) => setYear(event.target.value)}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="number-input"
              label="Vehicle Number"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="doors-input"
              label="Doors"
              value={doors}
              onChange={(event) => setDoors(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="fuelType-input"
              label="Fuel Type"
              value={fuelType}
              onChange={(event) => setFuelType(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="seats-input"
              label="Seats"
              value={seats}
              onChange={(event) => setSeats(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="color-input"
              label="Color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              id="transmission-input"
              label="Transmission"
              value={transmission}
              onChange={(event) => setTransmission(event.target.value)}
            />
          </FormControl>
          <Button onClick={handleNext} sx={{ mt: 2 }}>
            Next
          </Button>
        </Box>
      )}
    {tab === 1 && (
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                Vehicle Images
            </Typography>
            <Typography variant="body2">
                Please upload images of all 4 sides (Front/Back/Left/Right)
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {['Front', 'Back', 'Left', 'Right'].map((side) => (
                    <Grid item xs={6} sm={3} key={side}>
                        <Card>
                            <CardActionArea>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id={`${side}-upload`}
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                                <label htmlFor={`${side}-upload`}>
                                    <IconButton component="span">
                                        <CameraAltIcon />
                                    </IconButton>
                                </label>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg" // Replace with actual image
                                    alt="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                License Plate
            </Typography>
            <Typography variant="body2">
                Front and Back License Plate
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {['Front', 'Back'].map((side) => (
                    <Grid item xs={6} sm={6} key={side}>
                        <Card>
                            <CardActionArea>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id={`license-${side}-upload`}
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                />
                                <label htmlFor={`license-${side}-upload`}>
                                    <IconButton component="span">
                                        <CameraAltIcon />
                                    </IconButton>
                                </label>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg" // Replace with actual image
                                    alt="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                Registration Certificate
            </Typography>
            <Typography variant="body2">
                Original Copy of Vehicle Registration Certificate
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={12}>
                    <Card>
                        <CardActionArea>
                            <input
                                accept="image/*"
                                type="file"
                                id="registration-upload"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                            <label htmlFor="registration-upload">
                                <IconButton component="span">
                                    <CameraAltIcon />
                                </IconButton>
                            </label>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg" // Replace with actual image
                                alt="Contemplative Reptile"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Button onClick={handleNext} sx={{ mt: 2 }}>
                Next
            </Button>
        </Box>
    )}
    {tab === 2 && (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                Enable Listing
            </Typography>
            <Typography variant="body2">
                Click the button below to enable your car listing.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => {
                    // Navigate to /rent-a-car
                    window.location.href = "/rent-a-car";
                }}
            >
                Enable Listing
            </Button>
        </Box>
    )}
      {/* Implement other tabs as needed */}
    </Box>
  );
};

export default AddCar;
