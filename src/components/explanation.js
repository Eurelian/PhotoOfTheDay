import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	margin-bottom: 50px;
	width: 70%;
	text-align: center;
	font-size: 1.4rem;
	line-height: 1.7;
`;

const Explanation = ({ data }) => {
	return (
		<div>
			<Container>{data}</Container>
		</div>
	);
};

export default Explanation;
