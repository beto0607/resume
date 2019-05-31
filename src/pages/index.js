import React from "react"

import sectionStyles from "../scss/section.module.scss"
import Header from "../components/header"
import PersonalSection from "../components/personal_section"
import CoverLetterSection from "../components/cover_letter_section"
import KnowledgeSection from "../components/knowledge_section"
import EducationSection from "../components/education_section"
import OthersSection from "../components/others_section"

const IndexPage = () => {
	const personal_id = sectionStyles['personal_section'];
	const cover_letter_id = sectionStyles['cover_letter_section'];
	const knowledge_id = sectionStyles['knowledge_section'];
	const education_id = sectionStyles['education_section'];
	const others_id = sectionStyles['others_section'];
	console.log(others_id);
	return (
  <React.Fragment>
		<PersonalSection 
			id={personal_id}/>
		<CoverLetterSection 
			id={cover_letter_id}/>
		<KnowledgeSection 
			id={knowledge_id}/>
		<EducationSection
			id={education_id}/>
		<OthersSection 
			id={others_id}/>
		<Header sections={[
			{id: personal_id, name:"Information"},
			{id: sectionStyles['cover_letter_section'], name:"Cover letter"},
			{id: knowledge_id, name:"Knoweldge"},
			{id: education_id, name:"Education"},
			{id: others_id, name:"More"}
		]}/>
  </React.Fragment>)
}

export default IndexPage;
