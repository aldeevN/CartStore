import { Card, CardMedia, Typography } from "@mui/material"
import { Box, Button } from "@mui/material"
import { formatCurrency } from "./CurrencyFormater"
import { useShoppingCart } from "./contex/ShoppingCartContext"
import DeleteIcon from "@mui/icons-material/Delete"

type StoreItemProps = {
    id: number
    imgUrl: string
    title: string
    price: number
}

export function StoreItem({ id, imgUrl, title, price }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card sx={{
            maxWidth: 400,
            padding: 10
        }}>
            <CardMedia
                component="img"
                alt={title}
                height="400px"
                image={imgUrl}
            />
            <Typography
                gutterBottom variant="h5"
                component="div"
                display="flex"
                justifyContent="space-between">
                <span>{title}</span>
                <span>{formatCurrency(price)}</span>
            </Typography>
            <Box
                style={{ maxWidth: 650 }}>
                {quantity === 0 ? (
                    <Button variant="contained" onClick={() => increaseCartQuantity(id)}>+Add to card</Button>
                ) : (<Box
                    display="flex"
                    justifyContent="center"
                    sx={{ width: '100%' }}>
                    <Button
                        onClick={() => decreaseCartQuantity(id)}
                        variant="outlined"
                    >-</Button>
                    <Button variant="contained"><span className="fs-3">{quantity}</span> in card</Button>

                    <Button
                        onClick={() => removeFromCart(id)}
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                    >
                        Remove
                    </Button>
                    <Button
                        onClick={() => increaseCartQuantity(id)}
                        variant="outlined">+
                    </Button>
                </Box>
                )}
            </Box>
        </Card>

    )
}