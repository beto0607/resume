import React from "react"

import SectionContainer from "./section"


const KnowledgeSection = (props)=>{
    return (
        <SectionContainer name="knowledge" id={props.id} {...props}>
            {props.children}
        </SectionContainer>
    )
}
export default KnowledgeSection;