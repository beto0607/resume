import React from "react"

import KnowledgeProjectItem from "./knowledge_project_item"
import knowledgeSectionStyles from "../scss/knowledge_section.module.scss"
import { FaInfoCircle } from 'react-icons/fa';

const KnowledgeItem = ({icon, title, description, projects})=>{
    return (
    <li className={knowledgeSectionStyles.item} key={"knowledge-item-"+title}>
        <div className={knowledgeSectionStyles.imageContainer}>
            <img src={icon} alt={title + " icon"}/>
        </div>
        <FaInfoCircle className={knowledgeSectionStyles.readMore}/>
        <div className={knowledgeSectionStyles.informationWrapper}>
            <img src={icon} alt={title + " icon"}/>
            <h3 className={knowledgeSectionStyles.itemTitle}>{title}</h3>
            <h3>Description:</h3>
            <p>{description}</p>
            <ul>
            {
                (projects || []).map((element,index) => (
                    <KnowledgeProjectItem {...element} key={"key"+index}/>
                ))
            }
            </ul>
        </div>

    </li>
    )
}
export default KnowledgeItem;