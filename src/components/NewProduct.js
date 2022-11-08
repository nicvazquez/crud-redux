import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createNewProductAction } from "../actions/actionsProduct";
import { showAlertAction, hideAlertAction } from "../actions/actionsAlert";

export const NewProduct = () => {
	let navigate = useNavigate();
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);

	const dispatch = useDispatch();

	const loading = useSelector((state) => state.products.loading);
	const error = useSelector((state) => state.products.error);
	const alert = useSelector((state) => state.alert.alert);

	const addProduct = (product) => dispatch(createNewProductAction(product));

	const submitNewProduct = (e) => {
		e.preventDefault();

		if (name.trim() === "" || price <= 0) {
			const alert = {
				msg: "Both fields are required",
				classes: "alert alert-danger text-center text-uppercase p3",
			};
			dispatch(showAlertAction(alert));

			return;
		}

		dispatch(hideAlertAction());

		addProduct({
			name,
			price,
		});

		navigate("/");
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card p-4">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>
					</div>

					{alert && <p className={alert.classes}>{alert.msg}</p>}

					<form onSubmit={submitNewProduct}>
						<div className="form-group">
							<label>Product Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Product Name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className="form-group">
							<label>Product Price</label>
							<input
								type="number"
								className="form-control"
								placeholder="Product Price"
								name="price"
								value={price}
								onChange={(e) => setPrice(Number(e.target.value))}
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
						>
							Add
						</button>
					</form>

					{loading && <p>Loading ...</p>}
					{error && <p className="alert alert-danger p-2 mt-4 text-center">Error</p>}
				</div>
			</div>
		</div>
	);
};
