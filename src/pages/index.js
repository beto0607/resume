import React from "react"

import sectionStyles from "../scss/section.module.scss"
import Header from "../components/header"
import PersonalSection from "../components/personal_section"
import ProjectSection from "../components/project_section"
import CoverLetterSection from "../components/cover_letter_section"
import EducationSection from "../components/education_section"
import OthersSection from "../components/others_section"
import typography from '../utils/typography'

const IndexPage = () => {
    typography.injectStyles()
    const personal_id = sectionStyles['personal_section'];
    const projects_id = sectionStyles['projects_section'];
    const cover_letter_id = sectionStyles['cover_letter_section'];
    const education_id = sectionStyles['education_section'];
    const others_id = sectionStyles['others_section'];
    console.log(others_id);
    return (
        <React.Fragment>
            <PersonalSection
                id={personal_id} />
            <ProjectSection
                id={projects_id} />
            <CoverLetterSection
                id={cover_letter_id} />
            <EducationSection
                id={education_id} />
            <OthersSection
                id={others_id} />
            <Header sections={[
                { id: personal_id, name: "Information" },
                { id: projects_id, name: "Projects" },
                { id: cover_letter_id, name: "Cover letter" },
                { id: education_id, name: "Education" },
                { id: others_id, name: "More" }
            ]} />
        </React.Fragment>)
}

export default IndexPage;
