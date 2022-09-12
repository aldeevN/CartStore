import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from "@mui/material";
import { useShoppingCart } from "./contex/ShoppingCartContext";




export default function SearchAppBar() {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 0,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/store"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 0,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Store
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/about"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}

                    >
                        About
                    </Typography>
                    <IconButton
                        color="inherit"
                        onClick={openCart}
                    >
                        <ShoppingCartIcon />
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >
                            {cartQuantity}
                        </div>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </Box>
    );
}