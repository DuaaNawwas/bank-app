import { Table } from "flowbite-react";
import React from "react";
import { connect } from "react-redux";

function Main(props) {
	const handleDelete = (id) => {
		props.deleteAccount(id);
		props.decrementAccounts();
	};
	return (
		<>
			<div className="w-2/3 py-10">
				<h1 className="text-lg font-bold text-center">
					Number of accounts: {props.numberOfAccounts}
				</h1>
				<Table>
					<Table.Head>
						<Table.HeadCell>Name</Table.HeadCell>
						<Table.HeadCell>Account Number</Table.HeadCell>
						<Table.HeadCell>Account Type</Table.HeadCell>
						<Table.HeadCell></Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{props.accounts.map((acc) => {
							return (
								<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
									<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
										{acc.customerName}
									</Table.Cell>
									<Table.Cell>{acc.accountNumber}</Table.Cell>
									<Table.Cell>{acc.accountType}</Table.Cell>
									<Table.Cell>
										<button
											onClick={() => handleDelete(acc.id)}
											className="text-red-500"
										>
											Delete
										</button>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</>
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
		deleteAccount: (id) => dispatch({ type: "DELETE_ACCOUNT", payload: id }),
		decrementAccounts: () => dispatch({ type: "DECREMENT_ACCOUNTS" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
