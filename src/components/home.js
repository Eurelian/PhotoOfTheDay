import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../img/background.svg";

const StyledLink = styled.div`
	color: palevioletred;
	font-weight: bold;
	cursor: pointer;
	background: linear-gradient(to right, #8e2de2, #4a00e0);
	width: 200px;
	padding: 20px 30px;
	border-radius: 100px;
	color: white;
	transition: all 0.5s ease;
	text-align: center;
	box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.3);
	&:hover {
		transform: translateY(-5px);
		color: #f2a71b;
		box-shadow: 0px 4px 15px 5px rgba(0, 0, 0, 0.3);
	}

	&: active {
		transform: translateY(-2px);
		box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.3);
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100%;
	align-items: center;
	background-image: url(${background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const HomePage = () => {
	return (
		<div>
			<Container>
				<Link style={{ textDecoration: "none" }} to='/photo'>
					<StyledLink>Dance with the Stars</StyledLink>
				</Link>
			</Container>
		</div>
	);
};

export default HomePage;
