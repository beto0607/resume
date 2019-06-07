import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import SectionContainer from "./section"
import coverSectionStyles from "../scss/cover_letter_section.module.scss"
import sectionStyles from '../scss/section.module.scss'

const _onMouseMove = (e)=>{
    return;
    if(typeof window == "undefined"){return;}
    var m = Math.atan2(e.screenY - (window.innerHeight / 2), e.screenX - (window.innerWidth/2)) * 180 / Math.PI;
    m = (Math.trunc(m + 90)) + "deg";
    let xBreakPoint = Math.trunc(e.screenX/window.innerWidth * 100);
    xBreakPoint = Math.min(2, Math.max(xBreakPoint, 98));
    let sectionElement = window.document.getElementById(sectionStyles.cover_letter_section);
    let newbackground = getComputedStyle(sectionElement).backgroundImage.split("%");
    newbackground[1] = newbackground[1].slice(0,-2)+(xBreakPoint);
    newbackground = newbackground.join("%");
    if(newbackground.match(/[-0-9]+deg/)){
        newbackground = newbackground.replace(/[-0-9]+deg/, m);
    }else{
        newbackground = newbackground.replace(/t\(/, "t("+m+",");
    }
    sectionElement.style.backgroundImage = newbackground;
}
const CoverLetterSection = (props)=>{
    const data = useStaticQuery(
		graphql`
			query{
				dataJson{
                    cover_letter {
                        title
                        header
                        content
                    }
                }
			}
		`
    )
    return (
        <SectionContainer name="cover_letter"  id={props.id} {...props}>
            <div className={coverSectionStyles.wrapper} onMouseMove={_onMouseMove}>
                <h1>{data.dataJson.cover_letter.title}</h1>
                <p className={coverSectionStyles.header}>{data.dataJson.cover_letter.header}</p>
                <p className={coverSectionStyles.content}>{data.dataJson.cover_letter.content}</p>
            </div>
        </SectionContainer>
    )
}
export default CoverLetterSection;