import { Component } from "react";
import './index.css'
const banknameList = [{
    id:1,
    name:"SBI"
},{
    id:2,
    name:"HDFC"
},{
    id:3,
    name:"ICICI"
},{
    id:4,
    name:"Canara Bank"
}]
class BankDetails extends Component {
    state = {
        bankName:'',
        accountHolderName:'',
        accountNo:'',
        ifscCode:''
    }


    render(){
        return(<>
        
            <div className="form-container">
            <div >
            <h1 className="bank-head">Bank Details</h1>
                <div className="bank-info">
                        
                    <div className="input-container">
                        <label for="bankname" className="label-input">Bank Name</label>
                        <select name="bankname" id="bankname" className='bank-name'>
                        {banknameList.map(each => (
                            <option key={each.id} value={each.name}>{each.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="input-container">
                                <label for="account-name" className="label-input">Account Holder Name</label>
                                <input type="text" id="account-name" className="input-elements" placeholder="Name"/>
                        </div>
                        <div className="input-container">
                                <label for="account-number" className="label-input">Account No</label>
                                <input type="text" id="account-number" className="input-elements" placeholder="Eg . 000123456789"/>
                        </div>
                        <div className="input-container">
                                <label for="account-conf-no" className="label-input">Confirm Account No</label>
                                <input type="text" id="account-conf-no" className="input-elements" placeholder="Eg . 000123456789"/>
                        </div>
                        <div className="input-container">
                                <label for="ifsc" className="label-input">IFSC Code</label>
                                <input type="text" id="ifsc" className="input-elements" placeholder="Eg . 000123456789"/>
                        </div>

                </div>
                <div className="confirm-save-changes-btns">
                        <button type="button" className="confirm-btn">CONFIRM BANK DETAILS</button>
                        <button type="button" className="save-changes-btn">SAVE CHANGES</button>
                </div>
            </div>
        </div>
        <div className="save-view-btns">
                        <button type="button" className="savee-btn">SAVE</button>
                        <button type="button" className="view-btn">VIEW DETAILS</button>
                </div> 
        </>
        )
    }
}

export default BankDetails