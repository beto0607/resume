import React from "react"

import knowledgeSectionStyles from "../scss/knowledge_section.module.scss"
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const KnowledgeProjectItem = ({item})=>{
    return (
        <li className={knowledgeSectionStyles.projectItem} key={"knowledge-"+item.title}>
            <h3>
                {item.title}
                {item.links.map((element,index) =>(<a href={element} alt="Link to project" key={"link#"+index}><FaExternalLinkAlt/></a>))}
            </h3>
            <span>Status:<strong> {item.status}</strong></span>
            {item.description ? (<p>{item.description}</p>):null}
            {
                item.code ? (
                    <a href={item.code} alt="Source code">Source code <FaCode/></a>
                ):null
            }
        </li>
    );
};



export default KnowledgeProjectItem;