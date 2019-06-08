import React from "react"

import educationStyles from "../scss/education_section.module.scss"
import { FaExternalLinkAlt } from 'react-icons/fa';

const EducationContainer = ({title, data})=>{
    return (
        <div className={educationStyles.container}>
            <h2>{title}</h2>
            <ul>
                {
                    data.map(({title, link, description, year}, index)=>{
                        return(
                        <li className={educationStyles.box} key={`education_${title.toLowerCase()}#${index}`}>
                            <strong>
                                {title}
                                {link.length ?(<a href={link}><FaExternalLinkAlt/></a>):null}
                            </strong>
                            <span> - {year}</span>
                            <p>{description}</p>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}


export default EducationContainer;