import React from "react"

import SectionContainer from "./section"
import KnowledgeItem from "./knowledge_item"
import knowledgeSectionStyles from "../scss/knowledge_section.module.scss"
import { useStaticQuery, graphql } from "gatsby";

const KnowledgeSection = (props)=>{
    const data = useStaticQuery(graphql`query{
        dataJson{
            knowledge {
                title
                description
                icon
                projects {
                    title
                    status
                    description
                    code
                    links
                }
            }
        }
    }`);
    return (
        <SectionContainer name="knowledge" id={props.id} {...props}>
            <div className={knowledgeSectionStyles.wrapper}>
                <ul>
                    {
                        (data.dataJson.knowledge || []).map(element => (
                            <KnowledgeItem key={element.title} {...element}/>
                        ))
                    }
                </ul>
            </div>
        </SectionContainer>
    )
}
export default KnowledgeSection;