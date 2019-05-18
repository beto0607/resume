import React from "react"
import ProfilesItem from "../components/profiles_item"
import { useStaticQuery, graphql } from "gatsby"

import personalSectionStyles from "../scss/personal_section.module.scss"


const ProfilesContainer = (props) =>{
	const data = useStaticQuery(graphql`
			query{
				dataJson {
					profiles {
					  name
					  link
					  icon
					}
				}  
			}
		`
	)
	return (
		<div className={personalSectionStyles.bottom}>
			<h2>Profiles</h2>
			<ul>
				{
					(data.dataJson.profiles || []).map(element => (
						<ProfilesItem key={element.name} item={element}/>
					))
				}
			</ul>
		</div>
	)
}

export default ProfilesContainer;
