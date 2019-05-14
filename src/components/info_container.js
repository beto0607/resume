import React from "react"
import personalSectionStyles from "../scss/personal_section.module.scss"

const InfoContainer = (props) =>{
	return (
		<div className={personalSectionStyles.middle}>
			<h2>Roberto Javier Albanesi</h2>	
			<a href="mailto:albanesi.roberto.javier@gmail.com">albanesi.roberto.javier@gmail.com</a>
		</div>
	)
}

export default InfoContainer;
