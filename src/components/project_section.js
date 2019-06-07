import React from "react"

import SectionContainer from "./section"
import ProjectItem from "./project_item"
import projectsSectionStyles from "../scss/projects_section.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const ProjectSection = props => {
    const data = useStaticQuery(graphql`query{
        allDataJson{
            edges {
                node {
                    id
                    projects {
                        title
                        year
                        description
                        links
                        code
                        technologies {
                            title
                            icon
                            description
                        }
                    }
                }
            }
        }
    }`)

    let projects = (data.allDataJson.edges[0].node.projects).sort((a, b) => { return b.year - a.year });
    return (
        <SectionContainer name="projects" id={props.id} {...props}>
            <div className={projectsSectionStyles.wrapper}>
                <ul>
                    {projects.map((element, index) => (
                        <ProjectItem {...element} key={"project_element_#" + index} />
                    ))}
                </ul>
            </div>
        </SectionContainer>
    )
}
export default ProjectSection
