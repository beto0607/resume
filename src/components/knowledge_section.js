import React from "react"

import SectionContainer from "./section"
//import InfoContainer from "../components/info_container"
//import ProfilesContainer from "../components/profiles_container"

const KnowledgeSection = (props)=>{
    return (
        <SectionContainer name="knowledge">
            {props.children}
        </SectionContainer>
    )
}
export default KnowledgeSection;