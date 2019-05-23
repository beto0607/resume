import React from "react"
import sectionStyles from "../scss/section.module.scss"
import ScrollManager from "../components/scroll_manager"



const SectionContainer = (props) =>{
	return (
		<section className={sectionStyles.container} id={props.id}>
			{props.children}
			<ScrollManager parent={props.id} title={props.to} next={props.next} down={true}/>
		</section>
	)
}

export default SectionContainer;
