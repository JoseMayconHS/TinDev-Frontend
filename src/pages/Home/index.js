import React, { useState } from 'react'
import api from '../../api'

import { FormHome, Input, Enter } from './styles'

import logo from '../../assets/logo.svg'

const Home = ({ history }) => {
	const [username, setUsername] = useState('')
	const [message, setMessage] =  useState('')
	
	 const handleSubmit = async e => {
	 	if (!username.length && !username.indexOf(' ') !== 0) return

		e.preventDefault()

		const { data } = await api.post('/devs', { username })

		if (!data.ok) return setMessage(data.message)

		history.push(`/dashboard/${data.dev._id}`)
	}

	return (
		<FormHome onSubmit={handleSubmit}>
			<img src={logo} alt='Logo TinderDev' />
			<Input 
				placeholder='Digite seu usuario'
				value={username}
				onChange={({ target }) => setUsername(target.value)} />
				{ message }
			<Enter>Entrar</Enter>
		</FormHome>
	)
}

export default Home
