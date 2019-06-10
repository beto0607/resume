import React from "react"

import educationStyles from "../scss/education_section.module.scss"
import { FaExternalLinkAlt } from 'react-icons/fa';

const EducationContainer = ({title, data})=>{
    return (
        <div className={educationStyles.container}>
            <h2>{title}</h2>
            <ul>
                {
                    data.map(({title, link, description, year, place}, index)=>{
                        return(
                        <li className={educationStyles.box} key={`education_${title.toLowerCase()}#${index}`}>
                            <strong>
                                {title}
                            </strong>
                            
                            <span> - {place}{link.length ?(<a href={link} target="_blank"><FaExternalLinkAlt/></a>):null} {year}</span>
                            <p>{description}</p>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}


export default EducationContainer;