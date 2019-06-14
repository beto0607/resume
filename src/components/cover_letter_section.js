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
                        paragraphs
                    }
                }
			}
		`
    )
    return (
        <SectionContainer name="cover_letter"  id={props.id} {...props}>
            <div className={coverSectionStyles.wrapper}>
                <h1>{data.dataJson.cover_letter.title}</h1>
                {(
                    data.dataJson.cover_letter.paragraphs.map((element, index)=>(
                        <p className={coverSectionStyles.paragraph +' '+ coverSectionStyles.box} key={`cover_letter_paragrphs${index}`}>{element}</p>

                    ))
                )}
            </div>
        </SectionContainer>
    )
}
export default CoverLetterSection;