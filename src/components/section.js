import React from "react"
import sectionStyles from "../scss/section.module.scss"
import ScrollManager from "../components/scroll_manager"



const SectionContainer = (props) =>{
	return (
		<section className={sectionStyles.container} id={props.id}>
			{props.children}
		</section>
	)
	//<ScrollManager parent={props.id} next={props.next} previous={props.previous}/>
}

export default SectionContainer;
