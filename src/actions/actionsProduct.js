import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function createNewProductAction(product) {
	return async (dispatch) => {
		dispatch(addProduct());

		try {
			await axiosClient.post("/products", product);

			dispatch(addProductSuccess(product));

			Swal.fire("Success", "The product has been added successfully", "success");
		} catch (error) {
			console.log(error);
			dispatch(addProductError(true));

			Swal.fire({
				icon: "error",
				title: "Error",
				text:
					"An error has occurred. Check the development console for more information",
			});
		}
	};
}

const addProduct = () => ({
	type: ADD_PRODUCT,
	payload: true,
});

const addProductSuccess = (product) => ({
	type: ADD_PRODUCT_SUCCESS,
	payload: product,
});

const addProductError = (state) => ({
	type: ADD_PRODUCT_ERROR,
	payload: state,
});
