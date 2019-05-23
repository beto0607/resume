import React from "react"

import SectionContainer from "./section"

const OthersSection = (props)=>{
    return (
        <SectionContainer name="others_section"  id={props.id} {...props}>
            {props.children}
        </SectionContainer>
    )
}
export default OthersSection;