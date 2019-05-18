import React from "react"

import personalSectionStyles from "../scss/personal_section.module.scss"
import { useStaticQuery, graphql } from "gatsby";

const ProfilesItem = (props)=> {
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
    let icon = data.allFile.edges.find(element=>(element.node.name === props.item.icon))
	return (
	<li className={personalSectionStyles.list}>
		<a href={props.item.link} target="_blank" rel="noopener noreferrer">
			<h2>{props.item.name}</h2>
			<img src={icon.node.publicURL} alt={props.item.name + " icon"}/>
		</a>
	</li>
)}


export default ProfilesItem;
