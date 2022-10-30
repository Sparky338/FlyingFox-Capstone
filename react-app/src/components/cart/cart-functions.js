const localStorageItems = JSON.parse(localStorage.getItem("Items"))
const cart = JSON.parse(localStorage.getItem('cart'))

export const addToCart = () => {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', "[]");
    }

}
