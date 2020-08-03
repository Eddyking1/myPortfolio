import React, { useReducer, useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import "../form/index.scss";


function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [response, setResponse] = useState("");
	const [url, setUrl] = useState('/api/contact');

	const postData = async (name, email, message) => {
		axios({
			method: 'post',
			url: url,
			data: {
				name: name,
				email: email,
				message: message,
			},
			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
		})
			.then(function (response) {
				//handle success
				setResponse(response.data.message);
				console.log(response);
			})
			.catch(function (response) {
				//handle error
				setResponse(response.data.message);
				console.log(response);
			});
	};

	return (
		<form
			className="flex"
			onSubmit={e => {
				console.log("submit did run");
				e.preventDefault();
				postData(email, name, message);
				setEmail("");
				setName("");
				setMessage("");
			}}
		>
			<div className="formInputs">
				<p>{response}</p>
				<input
					className="input"
					placeholder="Name"
					type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					required={true}
				/>
				<input
					className="input"
					placeholder="Email"
					type="text"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required={true}
				/>
				<textarea
					className="input textArea"
					placeholder="Message"
					type="textarea"
					value={message}
					onChange={e => setMessage(e.target.value)}
					required={true}
				/>
				<button className="buttonSubmit" type="submit"> <p>Submit</p> </button>
			</div>
		</form>
	);
}

export default Contact;

