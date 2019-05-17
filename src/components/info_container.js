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
			<a href={`mailto:${data.dataJson.information.email}`}>{data.dataJson.information.email}</a>
		</div>
	)
}

export default InfoContainer;