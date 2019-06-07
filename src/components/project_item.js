import React from "react"
import projectsSectionStyles from "../scss/projects_section.module.scss"

const ProjectItem = ({
    title,
    image,
    description,
    links,
    code,
    technologies,
}) => {
    return (
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
            {
                links.length ? 
                    <div className={projectsSectionStyles.linksContainer}>
                        <strong>Links</strong>
                        {links.map((element,index)=>{
                            return (<a href={element}>#{index+1}</a>)
                        })}
                    </div>
                :null
            }
            {
                code.length ? 
                    <div className={projectsSectionStyles.codeContainer}>
                        <strong>Code</strong>
                        {code.map((element,index)=>{
                            return (<a href={element}>#{index+1}</a>)
                        })}
                    </div> : null
            }
            {
                technologies.length ? 
                    <div className={projectsSectionStyles.techonologiesContainer}>
                        <strong>Techonolies</strong>
                        {code.map((element,index)=>{
                            return (<a href={element}>#{index+1}</a>)
                        })}
                    </div> : null
            }
        </li>
    )
}

export default ProjectItem
