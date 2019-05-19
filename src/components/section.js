import React from "react"
import sectionStyles from "../scss/section.module.scss"




const SectionContainer = (props) =>{
	return (
		<section className={sectionStyles.container}>
			{props.children}
		</section>
	)
}

export default SectionContainer;
