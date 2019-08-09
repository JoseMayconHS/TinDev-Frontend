import styled from 'styled-components'

export const FormHome = styled.form`
	background: #f9f9f9;
	padding: 20px;
	border-radius: 10px ;
	border: 1px solid gray;
	width: 100%;
	position: relative;
	max-width: 300px;	
	transform: translateY(40vh);

	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Input = styled.input`
	font-size: 20px;
	width: 100%;
	margin: 10px 0px;
	border: 1px solid #DDD;
	border-radius: 5px;
	padding: 5px 20px;
	color: #666;

	::placeholder { color: #999; }
`

export const Enter = styled.button`
	color: white;
	margin: 10px;
	border: none;
	height: 48px;
	width: 100%;
	font-size: 16px;
	background-color: #DF4723;
	font-weight: bold;
	opacity: .9;
	border-radius: 2px;

	:hover { opacity: 1 }
`
