import React from "react"

import SectionContainer from "./section"
//import InfoContainer from "../components/info_container"
//import ProfilesContainer from "../components/profiles_container"

const EducationSection = (props)=>{
    return (
        <SectionContainer name="education" id={props.id} {...props}>
            {props.children}
        </SectionContainer>
    )
}
export default EducationSection;