import { Table } from "flowbite-react";
import React from "react";
import { connect } from "react-redux";

function Main(props) {
	return (
		<>
			<div className="w-9/12 mx-auto py-10">
				<Table>
					<Table.Head>
						<Table.HeadCell>Name</Table.HeadCell>
						<Table.HeadCell>Account Number</Table.HeadCell>
						<Table.HeadCell>Account Type</Table.HeadCell>
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
	};
};

export default connect(mapStateToProps)(Main);
