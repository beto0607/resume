import React from "react"

import personalSectionStyles from "../scss/personal_section.module.scss"

const ProfilesItem = ({link, icon, name})=> {
	return (
	<li className={personalSectionStyles.list}>
		<a href={link} target="_blank" rel="noopener noreferrer">
			<img src={icon} alt={name + " icon"}/>
		</a>
	</li>
)}


export default ProfilesItem;
