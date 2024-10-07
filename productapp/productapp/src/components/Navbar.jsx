import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
<AppBar>
    <Toolbar>
        <Typography variant='h6' sx={{flexGrow:1}}>
          DASHBOARD
        </Typography>
        <Link to='/add-product'>
            <Button color='error'>Product</Button>
        </Link>
        <Link to='/dash'>
            <Button color='error'>Dashboard</Button>
        </Link>


    </Toolbar>
</AppBar>
    </div>
  )
}

export default Navbar