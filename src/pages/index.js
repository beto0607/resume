import React from "react"

import PersonalSection from "../components/personal_section"
import CoverLetterSection from "../components/cover_letter_section"
import KnowledgeSection from "../components/knowledge_section"
import EducationSection from "../components/education_section"
import OthersSection from "../components/others_section"

const IndexPage = () => (
    <React.Fragment>
			<PersonalSection to="Cover letter" next="cover_letter_section" id="personal_section"/>
			<CoverLetterSection  to="Knowloedge" next="knowledge_section" id="cover_letter_section"/>
			<KnowledgeSection to="Education" next="education_section" id="knowledge_section"/>
			<EducationSection to="Others" next="others_section" id="education_section"/>
			<OthersSection to="Personal" next="personal_section" id="others_section"/>
    </React.Fragment>

)

export default IndexPage
