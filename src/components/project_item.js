import React from "react"
import projectsSectionStyles from "../scss/projects_section.module.scss"
import { FaExternalLinkAlt, FaCode, FaChevronRight } from 'react-icons/fa';

const _handlerClickTechnologies = (event) => {
    const parent = event.target.closest('.' + projectsSectionStyles.technologiesContainer);
    if (parent.classList.contains(projectsSectionStyles.visible)) {
        parent.classList.remove(projectsSectionStyles.visible);
        event.target.innerText = 'Made with...';
    } else {
        parent.classList.add(projectsSectionStyles.visible);
        event.target.innerText = 'Collapse...';
    }
};
const ProjectItem = ({
    title,
    year,
    description,
    links,
    code,
    technologies,
}) => {
    const key_title = title.split(' ').join('');
    return (
        <li className={projectsSectionStyles.box}>
            <h3>{title}{year > 0 && (<span>, {year}</span>)}</h3>
            {
                description.length > 0 && (
                    <p>
                        {description}
                    </p>
                )
            }
            {
                links.length > 0 && (
                    <div className={projectsSectionStyles.linksContainer}>
                        <strong><FaChevronRight /></strong>
                        {
                            links.map((element, index) => (
                                <a target="_blank" href={element} key={key_title + "_links#" + index}>
                                    {'Link #' + (index + 1)}
                                    <FaExternalLinkAlt />
                                </a>
                            ))
                        }
                    </div>
                )
            }
            {
                code.length > 0 && (
                    <div className={projectsSectionStyles.codeContainer}>
                        <strong><FaChevronRight /></strong>
                        {
                            code.map((element, index) => (
                                <a target="_blank" href={element} key={key_title + "_code_link#" + index}>
                                    {'Source code #' + (index + 1)}
                                    <FaCode />
                                </a>
                            ))
                        }
                    </div>
                )
            }
            {
                technologies.length > 0 && (
                    <div className={projectsSectionStyles.technologiesContainer}>
                        <div className={projectsSectionStyles.technologiesListContainer}>
                            {technologies.map((element, index) =>
                                (
                                    <div key={key_title + "_technology_#" + index}>
                                        <img src={element.icon} alt={element.title + " icon"} />
                                        <p>{element.description}</p>
                                    </div>
                                )
                            )}
                        </div>
                        <div className={projectsSectionStyles.seeTechnologies} onClick={_handlerClickTechnologies}>
                            <strong>
                                Made with...
                            </strong>
                        </div>
                    </div>
                )
            }
        </li>
    )
}

export default ProjectItem
