import React from "react"

import SectionContainer from "./section"

const EducationSection = (props)=>{
    return (
        <SectionContainer name="education" id={props.id} {...props}>
            {props.children}
        </SectionContainer>
    )
}
export default EducationSection;