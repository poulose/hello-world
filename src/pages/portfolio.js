import React from "react"

function Hello(props){

		return <div> Hello {props.first} </div>
}

export default function Home() {
	// Render the protfolio page

	return <Hello first="Portfolio"/>
}