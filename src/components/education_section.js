import React from "react"

import SectionContainer from "./section"
import { useStaticQuery, graphql } from "gatsby";
import educationStyles from "../scss/education_section.module.scss"
import EducationContainer from './education_container'

const EducationSection = (props)=>{
    const data = useStaticQuery(graphql`query{
        dataJson{
            education {
                formal {
                  title
                  description
                  link
                  year
                  place
                }
                courses {
                  title
                  description
                  link
                  year
                  place
                }
            }
        }
    }`);
    return (
        <SectionContainer name="education" id={props.id} {...props}>
            <div className={educationStyles.wrapper}>
                <h1 className={educationStyles.title}>{props.title ||"Education"}</h1>
                <EducationContainer title="Formal" data={data.dataJson.education.formal}/>
                <EducationContainer title="Courses" data={data.dataJson.education.courses}/>
            </div>
        </SectionContainer>
    )
}
export default EducationSection;