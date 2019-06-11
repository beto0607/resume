import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaEnvelope, FaDownload } from 'react-icons/fa';

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
			<a href={`mailto:${data.dataJson.information.email}`} target="_blank">
				<FaEnvelope/>
				{data.dataJson.information.email}
			</a>
            <a href='cv.pdf' target="_blank">
				<FaDownload />
				Curriculum Vitae
			</a>
		</div>
	)
}


export default InfoContainer;