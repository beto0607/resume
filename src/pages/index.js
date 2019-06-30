import React from "react"
import { Helmet } from "react-helmet"

import sectionStyles from "../scss/section.module.scss"
import Header from "../components/header"
import PersonalSection from "../components/personal_section"
import ProjectSection from "../components/project_section"
import CoverLetterSection from "../components/cover_letter_section"
import EducationSection from "../components/education_section"
import typography from '../utils/typography'
import Knowledge from "../components/Knowledge/Knowledge";

const IndexPage = () => {
    typography.injectStyles()
    const personal_id = sectionStyles['personal_section'];
    const projects_id = sectionStyles['projects_section'];
    const cover_letter_id = sectionStyles['cover_letter_section'];
    const education_id = sectionStyles['education_section'];
    const knowledge_id = sectionStyles['knowledge_section'];
    const others_id = sectionStyles['others_section'];
    console.log(others_id);
    return (
        <React.Fragment>
            <Helmet>
                <title>Resume - Roberto Albanesi</title>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Helmet>
            <PersonalSection
                id={personal_id} />
            <CoverLetterSection
                id={cover_letter_id} />
            <ProjectSection
                id={projects_id} />
            <EducationSection
                id={education_id} />
            <Knowledge
                id={knowledge_id} />
            <Header sections={[
                { id: personal_id, name: "Information" },
                { id: cover_letter_id, name: "Cover letter" },
                { id: projects_id, name: "Projects" },
                { id: education_id, name: "Education" },
                { id: knowledge_id, name: "Knowledge" }
            ]} />
        </React.Fragment>)
}

export default IndexPage;
