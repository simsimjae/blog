import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
	display: flex;
	background: #fcfcfc;
	.contents {
		width: 100%;
		margin-right: 250px;
	}
	@media screen and (max-width: 1500px) {
		.contents {
			margin-right: 250px;
		}
	}
	@media screen and (max-width: 1080px) {
		.contents {
			margin: 100px 0;
		}
	}
`;

const Layout = ({ children }) => {
	return (
		<Wrapper>
			<Sidebar />
			<main className="contents">{children}</main>
		</Wrapper>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
