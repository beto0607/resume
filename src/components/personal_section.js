import React from "react"

import SectionContainer from "./section"
import ScrollManager from "../components/scroll_manager"
import InfoContainer from "../components/info_container"
import ProfilesContainer from "../components/profiles_container"

import personalSectionStyles from "../scss/personal_section.module.scss"

const PersonalSection = (props) => {
    return (
        <SectionContainer name="personal_info">
            <div className={personalSectionStyles.wrapper}>
                <InfoContainer />
                <ProfilesContainer/>
            </div>
            <ScrollManager title={props.to} next={props.nextObjectName} down={true}/>
        </SectionContainer>
    )
}
export default PersonalSection;