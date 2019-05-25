import React from "react"

import PersonalSection from "../components/personal_section"
import CoverLetterSection from "../components/cover_letter_section"
import KnowledgeSection from "../components/knowledge_section"
import EducationSection from "../components/education_section"
import OthersSection from "../components/others_section"

const IndexPage = () => (
    <React.Fragment>
			<PersonalSection 
				next={{title:"Cover letter",id:"cover_letter_section"}} 
				id="personal_section"/>
			<CoverLetterSection 
				previous={{title:"Personal", id:"personal_section"}}
				next={{title:"Knowloedge", id:"knowledge_section"}}
				id="cover_letter_section"/>
			<KnowledgeSection 
				previous={{title:"Cover letter", id:"education_section"}}
				next={{title:"Education", id:"cover_letter_section"}}
				id="knowledge_section"/>
			<EducationSection
				previous={{title:"Knowloedge", id:"knowledge_section"}}
				next={{title:"Others", id:"others_section"}}
				id="education_section"/>
			<OthersSection 
				previous={{title:"Education", id:"education_section"}}
				next={{title:"Personal", id:"personal_section"}}
				id="others_section"/>
    </React.Fragment>

)

export default IndexPage
