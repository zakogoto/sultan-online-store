import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {productPageActions} from '../store/reducers/productPageSlice'
import { cartActions } from "../store/reducers/cartSlice";
import { catalogActions } from "../store/reducers/catalogSlice";
import { filterActions } from "../store/reducers/filterSlice";

const allActions = {
    ...productPageActions,
    ...cartActions,
    ...catalogActions,
    ...filterActions,
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}