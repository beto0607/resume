import React from "react"
import projectsSectionStyles from "../scss/projects_section.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import defaultIcon from "../images/default_icon.png"

const ProjectItem = ({
    title,
    image,
    description,
    links,
    code,
    technologies,
}) => {
    /*if(!icon.match(/http/)){
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
          icon = data.allFile.edges.find(element=>(element.node.name === icon))
          if(icon){icon = icon.node.publicURL;}
          else{icon = defaultIcon}
      }*/
    return (
        <li key={key}>
            <h3>{title}</h3>
            <p>{description}</p>
            {
                links.length ? 
                    <div>
                        <strong>Links</strong>
                        {links.map((element,index)=>{
                            return (<a href={element}>#{index+1}</a>)
                        })}
                    </div>
                :null
            }
            {
                code.length ? 
                    <div>
                        <strong>Code</strong>
                        {code.map((element,index)=>{
                            return (<a href={element}>#{index+1}</a>)
                        })}
                    </div> : null
            }
        </li>
    )
}

export default ProjectItem
