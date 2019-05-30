import React from "react"

import KnowledgeProjectItem from "./knowledge_project_item"
import knowledgeSectionStyles from "../scss/knowledge_section.module.scss"
import { useStaticQuery, graphql } from "gatsby";
import defaultIcon from "../images/default_icon.png";
import { FaInfoCircle } from 'react-icons/fa';

const KnowledgeItem = (props)=>{
    let icon = props.item.icon;
    if(!props.item.icon.match(/http/)){
        const data = useStaticQuery(graphql`
            query{
                allFile{
                    edges {
                        node {
                            publicURL
                            name
                        }
                    }
                }
            }
        `)
        icon = data.allFile.edges.find(element=>(element.node.name === props.item.icon))
        if(icon){icon = icon.node.publicURL;}
        else{icon = defaultIcon}
    }
    return (
    <li className={knowledgeSectionStyles.item} key={"knowledge-item-"+props.item.title}>
        <div className={knowledgeSectionStyles.imageContainer}>
            <img src={icon} alt={props.item.title + " icon"}/>
        </div>
        <FaInfoCircle className={knowledgeSectionStyles.readMore}/>
        <div className={knowledgeSectionStyles.informationWrapper}>
            <img src={icon} alt={props.item.title + " icon"}/>
            <h3 className={knowledgeSectionStyles.itemTitle}>{props.item.title}</h3>
            <h3>Description:</h3>
            <p>{props.item.description}</p>
            <ul>
            {
                (props.item.projects || []).map((element,index) => (
                    <KnowledgeProjectItem item={element} key={"key"+index}/>
                ))
            }
            </ul>
        </div>

    </li>
    )
}
export default KnowledgeItem;