import React from "react";
import NavBar from "./navbar";
import styled from "styled-components";
import Explanation from "./explanation";
import { Route } from "react-router-dom";

const Container = styled.div`
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	margin-bottom: 40px;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	border-radius: 20px;
	margin-top: 50px;
	box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.5);
`;

const DetailsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 40%;
	margin: 0 auto;
`;

const Details = styled.p`
	font-size: 1.2rem;
	font-weight: bold;
	padding: 20px;
`;

const Title = styled.h1`
	text-align: center;
	text-transform: uppercase;
	font-size: 3rem;
	margin-top: 60px;
	margin-bottom: 30px;
	width: 75%;
	margin: 0 auto;
`;

const NasaPhoto = ({ data }) => {
	console.log(data);

	return (
		<React.Fragment>
			<Container>
				<Image src={data.hdurl} />
			</Container>
			<Title>{data.title}</Title>
			<DetailsContainer>
				<Details>Shot by: {data.copyright}</Details>
				<Details>On: {data.date}</Details>
			</DetailsContainer>
			<NavBar />
			<Route
				path='/photo/explanation'
				render={(props) => <Explanation {...props} data={data.explanation} />}
			/>
			)}
		</React.Fragment>
	);
};

export default NasaPhoto;
