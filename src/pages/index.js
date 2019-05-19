import React from "react"

//FIRST SECTION
import PersonalSection from "../components/personal_section"
//SECOND SECTION
import CoverLetterSection from "../components/cover_letter_section"
//THIRD SECTION
import KnowledgeSection from "../components/knowledge_section"
//FOURTH SECTION
import EducationSection from "../components/education_section"
const IndexPage = () => (
    <React.Fragment>
		<PersonalSection to="Cover letter" next="cover_letter"/>
		<CoverLetterSection>
			
		</CoverLetterSection>
		<KnowledgeSection>
			<h1>Test2</h1>
		</KnowledgeSection>
		<EducationSection>
			<h1>Test3</h1>
		</EducationSection>
    </React.Fragment>

)

export default IndexPage
