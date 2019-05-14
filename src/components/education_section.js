import React from "react"

import SectionContainer from "./section"
//import InfoContainer from "../components/info_container"
//import ProfilesContainer from "../components/profiles_container"

const EducationSection = (props)=>{
    return (
        <SectionContainer name="education">
            {props.children}
        </SectionContainer>
    )
}
export default EducationSection;