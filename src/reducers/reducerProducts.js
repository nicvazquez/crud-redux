import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	START_PRODUCTS_DOWNLOAD,
	DOWNLOAD_PRODUCTS_SUCCESS,
	DOWNLOAD_PRODUCTS_ERROR,
} from "../types";

// Each reducer has its own state
const initialState = {
	products: [],
	error: null,
	loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case START_PRODUCTS_DOWNLOAD:
		case ADD_PRODUCT:
			return {
				...state,
				loading: action.payload,
			};

		case ADD_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload],
			};

		case ADD_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
}
