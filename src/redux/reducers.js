import { combineReducers } from 'redux'
import products from './slices/productsSlice'
import cart from "./slices/cartSlice";

const reducers = combineReducers({
    products,
    cart
})

export default reducers;