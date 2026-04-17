export const BUY_CAKE = "BUY_CAKE"
export const RESTOCK_CAKE = "RESTOCK_CAKE"

export function buyCake(q = 1)
{
    return {
        type : BUY_CAKE,
        payload : q
    }
}

export function restockCake(q = 1)
{
    return {
        type : RESTOCK_CAKE,
        payload : q
    }
}