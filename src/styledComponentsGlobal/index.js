import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
	* { box-sizing: border-box; outline: none; }
	input { border: none; }
	body { 
		height: 100vh; 
		margin: 0; 
		padding: 0; 
		background: #f1f1f1; 
		font-family: Arial, Halvetica, sans-serif;
	} 
	button { border: none; }
	button:hover { cursor: pointer }
`

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
