import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import api from '../../api'

import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import itsamatch from '../../assets/itsamatch.png'

import { 
	Dashboard, DevsGroup, Buttons,
	MatchContainer, MatchAvatar 
} from './styles'

const Main = ({ match }) => {
	const [devs, setDevs] = useState([])
	const [ready, setReady] = useState(false)
	const [matchDev, setMatchDev] = useState(false)

	useEffect(() => {
		(async function loadDevs() {
			const { data } = await api.get('/devs', { 
					headers: { 
						user: match.params.id
					} 
				})

			setDevs(data.users)
			setReady(true)

			activeEffect()
		})()
	}, [match.params.id])

	useEffect(() => {
		const socket = io('http://localhost:3001', {
			query: { user: match.params.id }
		})


		socket.on('match', dev => setMatchDev(dev))
	}, [match.params.id])

	function activeEffect() {
		setTimeout(() => {
			document.querySelectorAll('#devs > li').forEach((li, index) => {
				setTimeout(() => li.style.opacity = '1', 300 * (index + 1))
			})
		}, 400)
	}

	function kickEffect(id) {
		document.querySelector(`#li-${id}`)
			.style.opacity = '0'

		setTimeout(() => {
			setDevs(devs.filter(({ _id }) => _id !== id))
			document.querySelectorAll('#devs > li').forEach(li => li.style.opacity = '1')
		}, 500)
	}

	async function handleLike(id) {
		const { data } = await api.post(`/devs/${id}/like`, null, { 
			headers: { 
				user: match.params.id
			} 
		})

		data.ok && kickEffect(id)
	}

	async function handleDislike(id) {
		const { data } = await api.post(`/devs/${id}/dislike`, null, { 
			headers: { 
				user: match.params.id
			} 
		})

		data.ok && setDevs(devs.filter(({ _id }) => _id !== id))
	}

	return (
		<Dashboard>
			<Link to='/'><img src={logo} alt='Logo TinderDev' /></Link>
			{ready? (
					<div>
						{devs.length? (
							<DevsGroup id='devs'>
								{devs.map(({ _id, avatar, bio, name }, index) => 
									<li id={`li-${_id}`} key={index}>
										<img src={avatar} alt='' />
										<footer>
											<strong>{ name }</strong>
											<p>
												{ bio }
											</p>
										</footer>
										<Buttons>
											<button type='button' onClick={() => handleLike(_id)}>
												<img src={like} alt='like' />
											</button>
											<button type='button' onClick={() => handleDislike(_id)}>
												<img src={dislike} alt='dislike' />
											</button>
										</Buttons>
									</li>
								)}
							</DevsGroup>
							) : (
								<h1>Vazio</h1>
							)}
					</div>
				) : (
					<h1>Carregando...</h1>
				)}
			{ matchDev && (
				<MatchContainer>
					<img src={itsamatch} alt="It's a match" />
					<MatchAvatar src={matchDev.avatar} alt='Avatar' />
					<strong>{matchDev.name}</strong>
					<p>{matchDev.bio}</p>
					<button onClick={() => setMatchDev(false)}>Fechar</button>
				</MatchContainer>
			) }	
		</Dashboard>
	)
}

export default Main
