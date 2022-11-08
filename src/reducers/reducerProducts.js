import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	ADD_PRODUCT_ERROR,
	START_PRODUCTS_DOWNLOAD,
	DOWNLOAD_PRODUCTS_SUCCESS,
	DOWNLOAD_PRODUCTS_ERROR,
	GET_PRODUCT_DELETE,
	PRODUCT_DELETED_SUCCESS,
	PRODUCT_DELETED_ERROR,
	GET_PRODUCT_EDIT,
} from "../types";

// Each reducer has its own state
const initialState = {
	products: [],
	error: null,
	loading: false,
	deleteproduct: null,
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
		case DOWNLOAD_PRODUCTS_ERROR:
		case PRODUCT_DELETED_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case DOWNLOAD_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				products: action.payload,
			};

		case GET_PRODUCT_DELETE:
			return {
				...state,
				deleteproduct: action.payload,
			};

		case PRODUCT_DELETED_SUCCESS:
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== state.deleteproduct
				),
				deleteproduct: null,
			};

		case GET_PRODUCT_EDIT:
			return {
				...state,
				editproduct: action.payload,
			};

		default:
			return state;
	}
}
