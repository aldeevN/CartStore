import { Modal, Button, Box, Typography } from "@mui/material"
import { useShoppingCart } from "./contex/ShoppingCartContext"
import { formatCurrency } from "./CurrencyFormater"
import { CartItem } from "./CartItem"
import storeItems from "./data/items.json"
type ShoppingCartProps = {
    isOpen: boolean
}

// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 500,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <div>
            <Modal
                open={isOpen} onClose={closeCart}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Cart
                    </Typography>

                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </Typography>
                </Box>

            </Modal>
        </div>

    )
}


//     return (
//         <div>

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Text in a modal
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                     </Typography>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }