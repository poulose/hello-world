import React from "react"
import Header from "./header"


export default function Main({children}){

	return(

		<div>

			<Header>


			</Header>

			<div>

				{children}

			</div>

			<footer>

			</footer>				
			
		</div>

	)

}