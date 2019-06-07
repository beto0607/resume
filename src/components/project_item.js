import React from "react"
import projectsSectionStyles from "../scss/projects_section.module.scss"
import { FaExternalLinkAlt, FaCode, FaChevronRight} from 'react-icons/fa';

const ProjectItem = ({
    title,
    year,
    description,
    links,
    code,
    technologies,
}) => {
    return (
        <li>
            <h3>{title}{year > 0 && (<span>, {year}</span>)}</h3>
            {
                description.length > 0 &&(
                    <p>
                        {description}
                    </p>
                )
            }
            {
                links.length > 0 && (
                    <div className={projectsSectionStyles.linksContainer}>
                        <strong><FaChevronRight/></strong>
                        {links.map((element,index)=>{
                            return (<a _target="blank"  href={element} key={"project_element_#"+index}>{'Link #'+(index+1)}<FaExternalLinkAlt/></a>)
                        })}
                    </div>
                )
            }
            {
                code.length > 0 && (
                    <div className={projectsSectionStyles.codeContainer}>
                        <strong><FaChevronRight/></strong>
                        {code.map((element,index)=>{
                            return (<a _target="blank"  href={element} key={"project_element_#"+index}>{'Source code #'+(index+1)}<FaCode/></a>)
                        })}
                    </div>
                )
            }
            {
                technologies.length > 0 && (
                    <div className={projectsSectionStyles.techonologiesContainer}>
                        <div className={projectsSectionStyles.technologiesListContainer}>
                            {technologies.map((element,index)=>{
                                return (<div key={"project_element_#"+index}>
                                    <img src={element.icon} alt={element.title +" icon"}/>
                                    <p>{element.description}</p>
                                </div>)
                            })}
                        </div>
                    </div>
                )
            }
        </li>
    )
}

export default ProjectItem
