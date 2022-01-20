import React,{Component}from "react";
import './Form.css';
class Form extends Component{
    
    
    submitChange= event => {
        event.preventDefault()
       const Firstname=event.target.fname.value;
       const Lastname=event.target.lname.value;
       const Emailid=event.target.mail.value;
       const Dateofbirth=event.target.birthdate.value;
       console.log("First Name: "+Firstname ,"  Last Name: "+Lastname,"  Email Id: "+Emailid,"  Date Of Birth: "+Dateofbirth)

       
       
    }
    

    render(){
    
        return(
            <form onSubmit={this.submitChange}>
            <div className="but1">
                <button className="but2">save</button>
            </div>
            
            <div className="div1">
                <div className="div2">
                    <div className="space1"> 
                    <lable>First Name</lable>
                    <input type="Text" 
                    //value={this.state.Firstname}
                    
                    name="fname"
                    
                     />
                    </div>
                    <div className="space1">
                    <lable>Last Name</lable>
                    <input type="Text" 
                     name="lname"
                    />
                    </div>
                </div>
                <div className="div2">
                    <div className="space1">
                    <lable>Email Id</lable>
                    <input type="Text"
                    name="mail"
                    />
                    </div>
                    <div className="space1"> 
                    <lable>Date Of Birth</lable>
                    <input type="Text"
                    name="birthdate"
                    />
                    </div>
                </div>
            </div>
            </form>
        )
    }
}
export default Form;