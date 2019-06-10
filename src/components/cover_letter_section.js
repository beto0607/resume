import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import SectionContainer from "./section"
import coverSectionStyles from "../scss/cover_letter_section.module.scss"

const CoverLetterSection = (props)=>{
    const data = useStaticQuery(
		graphql`
			query{
				dataJson{
                    cover_letter {
                        title
                        header
                        content
                        work
                    }
                }
			}
		`
    )
    return (
        <SectionContainer name="cover_letter"  id={props.id} {...props}>
            <div className={coverSectionStyles.wrapper}>
                <h1>{data.dataJson.cover_letter.title}</h1>
                <p className={coverSectionStyles.header +' '+ coverSectionStyles.box}>{data.dataJson.cover_letter.header}</p>
                <p className={coverSectionStyles.content +' '+ coverSectionStyles.box}>{data.dataJson.cover_letter.content}</p>
                <p className={coverSectionStyles.work +' '+ coverSectionStyles.box}>{data.dataJson.cover_letter.work}</p>
            </div>
        </SectionContainer>
    )
}
export default CoverLetterSection;