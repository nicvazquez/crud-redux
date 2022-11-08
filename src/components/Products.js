import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/actionsProduct";
import { Product } from "./Product";

export const Products = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const loadProducts = () => dispatch(getProductsAction());
		loadProducts();
	}, []);

	const products = useSelector((state) => state.products.products);

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

				<tbody>
					{products.length === 0
						? "There are no products"
						: products.map((product) => <Product key={product.id} product={product} />)}
				</tbody>
			</table>
		</>
	);
};
