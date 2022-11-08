import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/actionsProduct";

export const Products = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const loadProducts = () => dispatch(getProductsAction());
		loadProducts();
	}, []);

	return (
		<>
			<h2 className="text-center my-5">Products List</h2>

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>

				<tbody></tbody>
			</table>
		</>
	);
};
