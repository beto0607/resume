import React from "react"
import pageStyles from "../scss/page.module.scss"

const PageContainer = (props) =>{
	console.log(pageStyles[props.contains])
	return (
		<div className={pageStyles.container+' '+pageStyles[props.contains]}>{props.children}</div>
	)
}

export default PageContainer;
