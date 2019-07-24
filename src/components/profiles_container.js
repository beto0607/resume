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
			<ul>
				{
					(data.dataJson.profiles || []).map((element,index) => (
						<ProfilesItem key={`${element.name}_${index}`} {...element}/>
					))
				}
			</ul>
		</div>
	)
}

export default ProfilesContainer;
