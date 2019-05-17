import React from "react"
import personalSectionStyles from "../scss/personal_section.module.scss"

const ProfilesItem = (props)=>{
	return (
		<li className={personalSectionStyles.list}>
		</li>
	)
}


const ProfilesContainer = (props) =>{
	return (
		<div className={personalSectionStyles.bottom}>
			<h2>Profiles</h2>
			<ul>
			<ProfilesItem/>
			</ul>
		</div>
	)
}

export default ProfilesContainer;
