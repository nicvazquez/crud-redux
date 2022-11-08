import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { deleteProductAction, getProductEdit } from "../actions/actionsProduct";

export const Product = ({ product }) => {
	const { name, price, id } = product;

	const dispatch = useDispatch();
	let navigate = useNavigate();

	const confirmDeleteProduct = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.value) {
				dispatch(deleteProductAction(id));
			}
		});
	};

	const redirectToEdit = (product) => {
		dispatch(getProductEdit(product));
		navigate(`/products/edit/${product.id}`);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>
				<span className="font-weight-bold">${price}</span>
			</td>
			<td className="actiones">
				<button
					type="button"
					onClick={() => redirectToEdit(product)}
					className="btn btn-primary mr-2"
				>
					Edit
				</button>

				<button
					type="button"
					className="btn btn-danger"
					onClick={() => confirmDeleteProduct(id)}
				>
					Delete
				</button>
			</td>
		</tr>
	);
};
