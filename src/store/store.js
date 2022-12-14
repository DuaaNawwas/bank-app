import { createStore } from "redux";

const initState = {
	accounts: [
		{
			id: 1,
			customerName: "Israa Othman",
			accountNumber: "123456",
			accountType: "Savings",
		},
		{
			id: 2,
			customerName: "Ahmad Zahran",
			accountNumber: "987654",
			accountType: "Student accounts",
		},
		{
			id: 3,
			customerName: "Duaa Nawwas",
			accountNumber: "987254",
			accountType: "Student accounts",
		},
		{
			id: 4,
			customerName: "Lana Ali",
			accountNumber: "123432",
			accountType: "Student accounts",
		},
		{
			id: 5,
			customerName: "Rana Ahmad",
			accountNumber: "215487",
			accountType: "Savings",
		},
		{
			id: 6,
			customerName: "Salim Tariq",
			accountNumber: "548761",
			accountType: "Student accounts",
		},
		{
			id: 7,
			customerName: "Walid Ibrahim",
			accountNumber: "785412",
			accountType: "Savings",
		},
		{
			id: 8,
			customerName: "Jana Iyad",
			accountNumber: "154681",
			accountType: "Student accounts",
		},
		{
			id: 9,
			customerName: "Layan Majed",
			accountNumber: "213548",
			accountType: "Student accounts",
		},
		{
			id: 10,
			customerName: "Ayham Wael",
			accountNumber: "323157",
			accountType: "Savings",
		},
	],

	numberOfAccounts: 10,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_ACCOUNT":
			const data = { ...action.payload, id: state.numberOfAccounts + 1 };
			const newData = [...state.accounts, data];
			return { ...state, accounts: newData };
		case "INCREMENT_ACCOUNTS":
			return { ...state, numberOfAccounts: state.numberOfAccounts + 1 };
		case "DELETE_ACCOUNT":
			const newArr = state.accounts.filter((i) => i.id != action.payload);
			return { ...state, accounts: newArr };
		case "DECREMENT_ACCOUNTS":
			return { ...state, numberOfAccounts: state.numberOfAccounts - 1 };
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
