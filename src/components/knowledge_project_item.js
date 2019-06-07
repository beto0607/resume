import React from "react"

import knowledgeSectionStyles from "../scss/knowledge_section.module.scss"
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const KnowledgeProjectItem = ({title, links, status, description, code})=>{
    return (
        <li className={knowledgeSectionStyles.projectItem} key={"knowledge-"+title}>
            <h3>
                {title}
                {links.map((element,index) =>(<a href={element} alt="Link to project" key={"link#"+index}><FaExternalLinkAlt/></a>))}
            </h3>
            <span>Status:<strong> {status}</strong></span>
            {description ? (<p>{description}</p>):null}
            {
                code ? (
                    <a href={code} alt="Source code">Source code <FaCode/></a>
                ):null
            }
        </li>
    );
};



export default KnowledgeProjectItem;