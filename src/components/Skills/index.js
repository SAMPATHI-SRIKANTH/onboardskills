import { Component } from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import './index.css'

const socialLinkList = [{
    id:1,
    url:"www.facebook.com"
},
{
    id:2,
    url:"www.twitter.com"
},
{
    id:3,
    url:"www.linkedin.com",
},{
    id:4,
    url:"www.twitter.com"
}]


class Skills extends Component {
    state = {
        skillList:[],
        languagesList:[],
        skills:"",
        languages:'',
        socialMediaLink:""
    }

    onChangeSkills = (event) => {
        this.setState({skills:event.target.value})
    }

    addToSkillList = () => {
        const {skillList,skills} = this.state
        const skillLength = skillList.length
        const newSkill =  {
            id:skillLength+1,
            skillName:skills
        }

        this.setState(prevState => {
            const prevSkillList = prevState.skillList
            const newSkillList = [...prevSkillList,newSkill]
            return {skillList:newSkillList,skills:""}
        })
    }

    onChangeLanguage = (event) => {
        this.setState({languages:event.target.value})
    }

    onAddLanguage = () => {
        const {languages,languagesList}= this.state 
        const languagesLength = languagesList.length
        const newLanguage = {
            id:languagesLength+1,
            languageName:languages
        }

        this.setState(prevState => {
            const prevLanguageList = prevState.languagesList
            const newLanguageList = [...prevLanguageList,newLanguage]
            return {languagesList:newLanguageList,languages:""}
        })
    }

    onChangeSocialLink = (event) => {
        this.setState({socialMediaLink:event.target.value})
    }

    onDelete = ()=>{
        this.setState({skillList:[],languagesList:[]})
    }

    renderSocialLinks = (props) => {
        const {details} = props
        return(
            <li>
                <div className='input-container'>
                    <label for="name"  className='label-input'>URL</label>
                    <input type="text" id="name" className='input-elements' placeholder={details.url} onChange={this.onChangeSocialLink} value={this.state.socialMediaLink}/>
                </div>
            </li>

        )
    }


    render(){
        const {skills,skillList,languages,languagesList} = this.state
        return(
            <div className="skills-container">
                <div className="form-container">
                    <div className="list-inputs">  
                        <div className="skill-box">
                            <div className="title-head">
                                <h3>Skills</h3>
                                <div className="add-btn-container">
                                    <button type="button" className="add-btn" onClick={this.addToSkillList}>
                                    <AiOutlinePlus/>ADD
                                    </button>
                                </div>
                            </div>
                            <div className="input-container">
                                <label for="skills" className="label-input">Skills</label>
                                <input type="text" id="skills" className="input-elements" placeholder="Enter Skills" onChange={this.onChangeSkills} value={skills}/>
                            </div>
                        <ul className="list-of-skills">
                            {skillList.map(each=>(
                                <li key={each.id} className="skills">{each.skillName}</li>
                            ))}
                        </ul>
                        </div>
                        <div className="lang-box">
                            <div className="title-head">
                                <h3>Languages</h3>
                                <div  className="add-btn-container">
                                    <button type="button" className="add-btn" onClick={this.onAddLanguage}>
                                    <AiOutlinePlus />
                                    ADD
                                    </button> 
                                </div>
                            </div>
                            <div className="input-container">
                                <label for="languages" className="label-input">languages</label>
                                <select name="languages" id="languages"  className="select-lang" onChange={this.onChangeLanguage} value={languages}>
                                    <option>select</option>
                                    <option value="JAVA">JAVA</option>
                                    <option value="PYTHON">PYTHON</option>
                                    <option value="JAVASCRIPT">JAVASCRIPT</option>
                                    <option value="KOTLIN">KOTLIN</option>
                                    <option value="GOLANG">GOLANG</option>
                                </select>
                            </div>
                            <ul className="list-of-languages">
                            {languagesList.map(each=>(
                                <li key={each.id} className="languages">{each.languageName}</li>
                            ))}
                        </ul>
                        </div>

                    </div>

                    <div className="save-delete-btns">
                        <button type="button" className="save-btn">SAVE CHANGES</button>
                        <button type="button" className="delete-btn" onClick={this.onDelete}>DELETE</button>
                    </div>
                </div>
                <div className="form-container">
                    <div className="list-inputs">
                        <div className="social-links">
                            <div className="title-head">
                                    <h3>Social Links</h3>
                            </div>
                            <ul className='social-list-inputs'>
                            {socialLinkList.map(each => (
                                <this.renderSocialLinks key={each.id} details = {each}/>
                            ))}
                            </ul>
                        </div>

                    </div>
                    <div className="save-delete-btns">
                        <button type="button" className="save-btn">SAVE CHANGES</button>
                        <button type="button" className="delete-btn" >DELETE</button>
                    </div>
                </div>
                </div>
        )
    }
}

export default Skills