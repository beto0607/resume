import React from "react"

import SectionContainer from "./section"
import ScrollManager from "../components/scroll_manager"    

const CoverLetterSection = (props)=>{
    return (
        <SectionContainer name="cover_letter"  id={props.id}>
            {props.children}
            <ScrollManager title={props.to} next={props.next} down={true}/>
        </SectionContainer>
    )
}
export default CoverLetterSection;