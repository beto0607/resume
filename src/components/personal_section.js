import React from "react"

import SectionContainer from "./section"
import ScrollManager from "../components/scroll_manager"
import InfoContainer from "../components/info_container"
import ProfilesContainer from "../components/profiles_container"

import personalSectionStyles from "../scss/personal_section.module.scss"

const PersonalSection = (props) => {
    return (
        <SectionContainer name="personal_info" id={props.id}>
            <div className={personalSectionStyles.wrapper}>
                <InfoContainer />
                <ProfilesContainer/>
            </div>
            <ScrollManager title={props.to} next={props.next} down={true}/>
        </SectionContainer>
    )
}
export default PersonalSection;