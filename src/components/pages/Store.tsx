import storeItems from '../data/items.json'
import { Box } from '@mui/system'
import { StoreItem } from '../StoreItems'
export function Store() {
    return (
        <><h1>Store</h1>
            <Box>
                {storeItems.map(iteme => <div key={iteme.id}><StoreItem {...iteme} /></div>)}
            </Box>
        </>
    )
}