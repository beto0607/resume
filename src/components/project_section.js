import React from "react"

import SectionContainer from "./section"
import ProjectItem from "./project_item"
import projectsSectionStyles from "../scss/projects_section.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const ProjectSection = props => {
  const data = useStaticQuery(graphql`query{
        dataJson{
            projects {
                title
                image
                description
                links
                code
                technologies{
                    title
                    icon
                    description
                }
            }
        }
    }`)
    console.log(data.dataJson.projects);
  return (
    <SectionContainer name="projects" id={props.id} {...props}>
      <div className={projectsSectionStyles.wrapper}>
        <h1>Projects</h1>
        <ul>
          {data.dataJson.projects.map((element, index) => (
            <ProjectItem key={"project_" + index} {...element} />
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}
export default ProjectSection
