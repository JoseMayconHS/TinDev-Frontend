import styled from 'styled-components'

export const Dashboard = styled.div`
	max-width: 980px;
	margin: 0 auto;
	padding: 50px 0px;
	text-align: center;
`

export const DevsGroup = styled.ul`
	list-style: none;
	padding: 0px;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 30px;

	li {
		display: flex;
		flex-direction: column;
		opacity: 0;
		transition: opacity .5s linear;
	}

	li > img { 
		width: 100%; 
		border-radius: 5px 5px 0px 0px;
	}

	li > footer { flex: 1; }

	li > footer {
		pointer-events: none;
		background: #FFF;
		border: 1px solid #EEE;
		padding: 15px 20px;
		text-align: left;
		border-radius: 0 0 5px 5px;
	}

	li > footer > strong {
		font-size: 16px;
		color: #333;
	}

	li > footer > p {
		font-size: 14px;
		opacity: .9;
	}
`

export const Buttons = styled.div`
	margin-top: 5px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;

	> button {
		height: 50px;
		box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, .5);
		border-radius: 6px;

		img {
			transition: all .2s ease-in;
		}

		:hover img {
			transform: translateY(-5px);
		}

		:active {
			box-shadow: 0 0 4px 0 rgba(0, 0, 0, .5);
		}
	}
`

export const MatchContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	margin: 0;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	transition: all .3s ease-in;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	strong {
		font-size: 32px;
		color: #FFF;
	}

	p {
		margin-top: 10px;
		font-size: 20px;
		line-height: 30px;
		width: 97%;
		max-width: 400px;
		color: rgba(255, 255, 255, .8);
	}

	button {
		background: none;
		color: rgba(255, 255, 255, .8);	
		font-size: 20px;

		:hover {
			color: rgb(255, 255, 255);
		}
	}
`

export const MatchAvatar = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 5px solid white;
	margin: 30px 0;
`
