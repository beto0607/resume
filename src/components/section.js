import React from "react"
import sectionStyles from "../scss/section.module.scss"

const SectionContainer = (props) =>{
	return (
		<div className={sectionStyles.container}>
			{props.children}
		</div>
	)
}

export default SectionContainer;
