import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.div`
	color: palevioletred;
	font-weight: bold;
	cursor: pointer;
	background: linear-gradient(to right, #8e2de2, #4a00e0);
	width: 150px;
	padding: 20px 30px;
	border-radius: 100px;
	color: white;
	transition: all 0.5s ease;
	text-align: center;
	margin-top: 40px;
	box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);

	&:hover {
		transform: translateY(-5px);
		color: #f2a71b;
		box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.3);
	}

	&: active {
		transform: translateY(-2px);
		box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.3);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 50px;
`;

const NavBar = () => {
	return (
		<div>
			<Container>
				<Link style={{ textDecoration: "none" }} to='/photo/explanation'>
					<StyledLink>About This Picture</StyledLink>
				</Link>
			</Container>
		</div>
	);
};

export default NavBar;
