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
	START_PRODUCT_EDITION,
	PRODUCT_EDITED_SUCCESS,
	PRODUCT_EDITED_ERROR,
} from "../types";
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

export function getProductsAction() {
	return async (dispatch) => {
		dispatch(downloadProducts());

		try {
			setTimeout(async () => {
				const response = await axiosClient.get("/products");
				dispatch(productsDownloadSuccessful(response.data));
			}, 500);
		} catch (error) {
			console.log(error);
			dispatch(productsDownloadError());
		}
	};
}

const downloadProducts = () => ({
	type: START_PRODUCTS_DOWNLOAD,
	payload: true,
});

const productsDownloadSuccessful = (products) => ({
	type: DOWNLOAD_PRODUCTS_SUCCESS,
	payload: products,
});

const productsDownloadError = () => ({
	type: DOWNLOAD_PRODUCTS_ERROR,
	payload: true,
});

export function deleteProductAction(id) {
	return async (dispatch) => {
		dispatch(getProductDelete(id));

		try {
			await axiosClient.delete(`/products/${id}`);
			dispatch(deleteProductSuccess());

			Swal.fire("Deleted!", "Your product has been deleted.", "success");
		} catch (error) {
			console.log(error);
			dispatch(deleteProductError());
		}
	};
}

const getProductDelete = (id) => ({
	type: GET_PRODUCT_DELETE,
	payload: id,
});

const deleteProductSuccess = () => ({
	type: PRODUCT_DELETED_SUCCESS,
});

const deleteProductError = () => ({
	type: PRODUCT_DELETED_ERROR,
	payload: true,
});

export function getProductEdit(product) {
	return (dispatch) => {
		dispatch(getProductAction(product));
	};
}

const getProductAction = (product) => ({
	type: GET_PRODUCT_EDIT,
	payload: product,
});

export function editProductAction(product) {
	return async (dispatch) => {
		dispatch(editProduct(product));

		try {
			const response = await axiosClient.put(`/products/${product.id}`, product);
			console.log(response);
		} catch (error) {}
	};
}

const editProduct = (product) => ({
	type: START_PRODUCT_EDITION,
	payload: product,
});
