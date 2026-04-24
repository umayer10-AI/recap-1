import cart from "../data/data.json"

export const allCarts = async () => {
    return cart
}

export const postTask = async (newTask) => {
    newTask.id = cart.length+1;
    cart.push(newTask)
    return {ok: true, messege: "Successfully"}
}