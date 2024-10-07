import { InputLabel, TextField, Typography, Select, Button, FormControl, MenuItem, Box } from '@mui/material'
import React from 'react'

const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Add Product
                </Typography>
                <form >
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Price"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="number"
                        //value={price}
                        required
                    />
                    <TextField
                        label="Category"
                        variant="outlined"
                        fullWidth
                        margin="normal"

                        //value={price}
                        required
                    />

                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                    />
                    <label htmlFor="file-upload">
                        <Button variant="contained" component="span">
                            Upload File
                        </Button>
                    </label>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                        {'No file chosen'}
                    </Typography>


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 2 }}
                    >
                        Add Product
                    </Button>
                </form>
            </Box>
        </div>

    )
}

export default Product