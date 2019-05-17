import React from "react"

import SectionContainer from "./section"
//import InfoContainer from "../components/info_container"
//import ProfilesContainer from "../components/profiles_container"

const CoverLetterSection = (props)=>{
    return (
        <SectionContainer name="cover_letter">
            {props.children}
        </SectionContainer>
    )
}
export default CoverLetterSection;