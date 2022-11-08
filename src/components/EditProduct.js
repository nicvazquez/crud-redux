import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/actionsProduct";

export const EditProduct = () => {
	const product = useSelector((state) => state.products.editproduct);
	if (!product) return null;

	const { name, price, id } = product;

	const submitEditProduct = (e) => {
		e.preventDefault();

		editProductAction();
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>
					</div>

					<form className="p-4" onSubmit={submitEditProduct}>
						<div className="form-group">
							<label>Product Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Product Name"
								name="name"
								value={name}
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
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
						>
							Save Changes
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
