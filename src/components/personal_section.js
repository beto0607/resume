import React from "react"

import SectionContainer from "./section"
import InfoContainer from "../components/info_container"
import ProfilesContainer from "../components/profiles_container"

import personalSectionStyles from "../scss/personal_section.module.scss"

const PersonalSection = (props) => {
    return (
        <SectionContainer name="personal_info" id={props.id} {...props}>
            <div className={personalSectionStyles.wrapper}>
                <InfoContainer />
                <ProfilesContainer/>
            </div>
        </SectionContainer>
    )
}
export default PersonalSection;