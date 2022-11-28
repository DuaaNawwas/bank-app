import { Footer } from "flowbite-react";
import React from "react";

export default function MyFooter() {
	return (
		<Footer container={true}>
			<Footer.Copyright by="DN" year={2022} />
			<Footer.LinkGroup>
				<Footer.Link>About</Footer.Link>
				<Footer.Link>Privacy Policy</Footer.Link>
				<Footer.Link>Licensing</Footer.Link>
				<Footer.Link>Contact</Footer.Link>
			</Footer.LinkGroup>
		</Footer>
	);
}
