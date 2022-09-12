import { Button } from "@mui/material"
import { useShoppingCart } from "./contex/ShoppingCartContext"
import storeItems from "./data/items.json"
import { formatCurrency } from "./CurrencyFormater"
import { Container } from "@mui/system"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Container>
            <div className="me-auto">
                <div>
                    {item.title}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button
                variant="contained"
                onClick={() => removeFromCart(item.id)}
            >
                &times;
            </Button>
        </Container>
    )
}