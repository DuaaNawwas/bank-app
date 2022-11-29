import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { connect } from "react-redux";

function AddAccount(props) {
	const [accData, SetAccData] = useState({
		customerName: "",
		accountNumber: "",
		accountType: "",
	});

	const handleAddAccount = (e) => {
		e.preventDefault();

		props.addAccount(accData);
		props.incrementAccounts();

		console.log(accData);
		SetAccData({
			customerName: "",
			accountNumber: "",
			accountType: "",
		});
	};
	return (
		<form onSubmit={handleAddAccount} className="flex flex-col gap-4 w-1/3">
			<div>
				<h1 className="text-lg font-bold text-center">Add a new account</h1>
				<div className="mb-2 block">
					<Label htmlFor="name" value="Customer Name" />
				</div>
				<TextInput
					id="name"
					type="text"
					placeholder=""
					required={true}
					shadow={true}
					value={accData.customerName}
					onChange={(e) =>
						SetAccData({ ...accData, customerName: e.target.value })
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="accnum" value="Account Number" />
				</div>
				<TextInput
					id="accnum"
					type="number"
					required={true}
					shadow={true}
					value={accData.accountNumber}
					onChange={(e) =>
						SetAccData({ ...accData, accountNumber: e.target.value })
					}
				/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="acctype" value="Account Type" />
				</div>
				<TextInput
					id="acctype"
					type="text"
					required={true}
					shadow={true}
					value={accData.accountType}
					onChange={(e) =>
						SetAccData({ ...accData, accountType: e.target.value })
					}
				/>
			</div>

			<Button type="submit">ADD</Button>
		</form>
	);
}

const mapStateToProps = (state) => {
	return {
		accounts: state.accounts,
		numberOfAccounts: state.numberOfAccounts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addAccount: (acc) => dispatch({ type: "ADD_ACCOUNT", payload: acc }),
		incrementAccounts: () => dispatch({ type: "INCREMENT_ACCOUNTS" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAccount);
