//@author: beto0607
//generated by create_container

import React from "react"
import styles from "./Knowledge.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import SectionContainer from "../section"

const KnowledgeSection = props => {
  const data = useStaticQuery(
    graphql`
      query {
        dataJson {
          knowledge {
            title
            icon
          }
        }
      }
    `
  )
  return (
    <SectionContainer name="knowledge" id={props.id} {...props}>
      <div className={styles.container}>
        <h1>I know</h1>
        <ul>
          {data.dataJson.knowledge.map(({ title, icon }) => (
            <li key={`knowledge_${title}`} className={styles.box}>
              <img src={icon} alt={title} />
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  )
}

export default KnowledgeSection
