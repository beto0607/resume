import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import personalSectionStyles from "../scss/personal_section.module.scss"

const InfoContainer = () =>{
	const data = useStaticQuery(
		graphql`
			query{
				dataJson {
					information {
						name
						age
						nacionality
						email
					}
				}
			}
		`
	)
	return (
		<div className={personalSectionStyles.middle}>
			<h2>{data.dataJson.information.name}, <span>{data.dataJson.information.age} years old</span></h2>	
			<a href="mailto:albanesi.roberto.javier@gmail.com">albanesi.roberto.javier@gmail.com</a>
		</div>
	)
}

export default InfoContainer;