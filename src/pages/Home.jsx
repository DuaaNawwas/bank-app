import React from "react";
import AddAccount from "../components/AddAccount";
import MyFooter from "../components/Footer";

import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
	return (
		<>
			<Header />
			<div className="flex gap-32 items-center px-10">
				<Main />
				<AddAccount />
			</div>
			<MyFooter />
		</>
	);
}
