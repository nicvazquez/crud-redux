import React from "react";

export const NewProduct = () => {
	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>
					</div>

					<form className="p-4">
						<div className="form-group">
							<label>Product Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Product Name"
								name="name"
							/>
						</div>

						<div className="form-group">
							<label>Product Price</label>
							<input
								type="number"
								className="form-control"
								placeholder="Product Price"
								name="price"
							/>
						</div>

						<button
							type="submit"
							className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
						>
							Add
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
