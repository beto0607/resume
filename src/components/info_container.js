import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope } from 'react-icons/fa';

import personalSectionStyles from "../scss/personal_section.module.scss"

const InfoContainer = () =>{
	const data = useStaticQuery(
		graphql`
			query{
				dataJson {
					information {
						name
						DoB
						nacionality
						email
					}
				}
			}
		`
	)
	return (
		<div className={personalSectionStyles.middle}>
			<h2>
				{data.dataJson.information.name}
			</h2>	
			<a href={`mailto:${data.dataJson.information.email}`}>
				<FaEnvelope/>
				{data.dataJson.information.email}
			</a>
		</div>
	)
}


export default InfoContainer;