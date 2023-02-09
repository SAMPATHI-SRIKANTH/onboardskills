import { Component } from "react";
import Skills from "../Skills";
import BankDetails from "../BankDetails";
import './index.css'

const tabs = [{
    id:1,
    name:"PERSONAL INFO"
},
{
    id:2,
    name:"EXPERIENCE"
},
{
    id:3,
    name:"SKILLS"

},
{
    id:4,
    name:"BANK DETAILS"

}]
class HeaderTabs extends Component {

    state = {
        activeTab:1
    }



    changeTab = (id) => {
        this.setState({activeTab:id})
    }

    render(){
        const { activeTab} = this.state 
        
        
        return(
            <div className="form-section">       
                <div className='header'>
                    <ul className='tabs-list'>
                        {tabs.map(each => {
                            const active = (each.id === activeTab ? "tab active":"tab")
                            return(
                                <li key={each.id}>
                                    <button type="button" className={active} onClick={() => this.changeTab(each.id)}>{each.name} </button>  </li>
                            )
                        })}
                        
                    </ul>
                    <hr className='line'/>
                </div>
                <div className="skills-container">
                {activeTab === 3 ?<Skills/>:""}
                {activeTab === 4 ? <BankDetails/>:""}
                </div>
                
            </div>
        )
    }
}

export default HeaderTabs
