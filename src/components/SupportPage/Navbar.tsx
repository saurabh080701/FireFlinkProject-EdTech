import { AppBar, Button, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <div>
            <AppBar position="fixed" className="abcd">
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff',
                    color: 'black',
                    height: '12vh',
                    fontWeight: '600',
                    '@media (max-width: 800px)': {
                        height: 'auto',
                        flexDirection: 'column',
                        fontSize: '0.5rem',
                        alignItems: 'center',
                        padding: '0'
                    }
                    ,'@media (max-width: 400px)': {
                      height: 'auto',
                      flexDirection: 'column',
                      alignItems: 'center',
                      fontSize: '0.2rem',
                      padding: '20px',
                  }
                }}>
                    <Stack direction='row' spacing={2} alignItems='center' justifyContent={'space-evenly'} flexBasis={'50%'}>
                        <Stack direction='row' spacing={3} sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Link to ={'/'} style={{cursor: "pointer", display:'flex', flexDirection:"row", textDecoration: 'none', color: 'inherit', gap:'0.75rem', justifyContent: 'center', alignItems: 'center'}}>
                            <img className='pwLogo'src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt="" width={'45px'} height={'45px'} />
                            <Typography variant="h6" component={'div'} sx={{ flexGrow: 1, fontWeight: 600 }}>
                                PW Support Page
                            </Typography>
                            </Link>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <Button sx={{ fontWeight: '400' }} >PW Centers</Button>
                            <Button sx={{ fontWeight: '400' }}>PW Skills</Button>
                            <Button sx={{ fontWeight: '400' }}>Ask Doubt</Button>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} spacing={2} flexBasis={'40%'} justifyContent={"flex-end"} sx={{ fontWeight: '900' }}>
                        <Button color="inherit"
                            size="large"
                            id="resources-button"
                            onClick={handleClick}
                            aria-controls={open ? 'resources-menu' : undefined}
                            endIcon={<KeyboardArrowDownIcon />}>All Courses</Button>
                        <Button color="inherit" startIcon={<ShoppingCartOutlinedIcon />}>PW Store </Button>
                        <button style={{ padding: '0.8rem', fontSize: '1rem'  }}>Login/Register</button>
                    </Stack>
                    <Menu id='resources-button' anchorEl={anchorEl} open={open}
                        MenuListProps={{
                            'aria-labelledby': 'resources-button',
                        }}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                        }}
                    >
                        <MenuItem onClick={handleClose}>IIT JE</MenuItem>
                        <MenuItem onClick={handleClose}>UPSC</MenuItem>
                        <MenuItem onClick={handleClose}>GATE</MenuItem>
                        <MenuItem onClick={handleClose}>MBA</MenuItem>
                        <MenuItem onClick={handleClose}>CA</MenuItem>
                        <MenuItem onClick={handleClose}>FINANCE</MenuItem>
                        <MenuItem onClick={handleClose}>DEFENCE</MenuItem>
                        <MenuItem onClick={handleClose}>STATE PSC</MenuItem>

                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}
