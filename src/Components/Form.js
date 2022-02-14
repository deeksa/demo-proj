import React,{Component}from "react";
import DataElement from './DataElement';
import './Form.css';
//import {v4 as uuidv4} from 'uuid';
let newList1=[]
class Form extends Component{
    state={
        List1:newList1,
        id:1,
        Firstname:"",
        Lastname:"",
        Emailid:"",
        Dateofbirth:""}
    
    
    
    submitChange= event => {
        event.preventDefault()
        const {id,Firstname,Lastname,Emailid,Dateofbirth}=this.state 
        const newData={
            //id:uuidv4(),
            id:id,
            Firstname:Firstname,
            Lastname:Lastname,
            Emailid: Emailid,
            Dateofbirth:Dateofbirth
            
            

        }
        this.setState(prevstate=>({
            List1:[...prevstate.List1,newData],
            
            
        }))

        this.setState(prevstate=>({
            id:prevstate.id+1
        }))
        //const set=(...each)=>{
        //event.target.fname.value=each.Firstname
            //Lastname:"",
            //Emailid: "",
           // Dateofbirth:""
        
        
    }
    
    
     onDelete=(id)=>{
         console.log("hi")
        
            }

    

   /* editData=(id)=>{
        this.setState(prestate=>({
            List1:prestate.List1.map(each=>{
                if(id===each.id){
                    console.log(each.Firstname)
                    return{...each,
                        Firstname:each.Firstname
                        
                    }
                    
                }
                return each
            })

        }))

    }*/


    
        onChangeFirstname=event=>{
            this.setState({Firstname:event.target.value})
        }
        onChangeLastname=event=>{
            this.setState({Lastname:event.target.value})
        }
        onChangeEmailid=event=>{
            this.setState({Emailid:event.target.value})
        }
        onChangeDateofbirth=event=>{
            this.setState({Dateofbirth:event.target.value})
        }
        
       
      // console.log("First Name: "+Firstname ,"  Last Name: "+Lastname,"  Email Id: "+Emailid,"  Date Of Birth: "+Dateofbirth)

       
       
    
    

    render(){
        const {Firstname,List1}=this.state
        console.log(List1)

        
              
        
        return(
            <div>
            <form onSubmit={this.submitChange}>
            <div className="but1">
                <button type="submit" className="but2">save</button>
            </div>
            
            <div className="div1">
                <div className="div2">
                    <div className="space1"> 
                    <lable>First Name</lable>
                    <input type="Text"
                    className="input"
                    value={Firstname}
                    
                    onChange={this.onChangeFirstname}
                    
                    //name="fname"
                    
                     />
                     
                    </div>
                    <div className="space1">
                    <lable>Last Name</lable>
                    <input type="Text" 
                     name="lname"
                     onChange={this.onChangeLastname}

                    />
                    </div>
                </div>
                <div className="div2">
                    <div className="space1">
                    <lable>Email Id</lable>
                    <input type="Text"
                    name="mail"
                    onChange={this.onChangeEmailid}
                    />
                    </div>
                    <div className="space1"> 
                    <lable>Date Of Birth</lable>
                    <input type="Date"
                    name="birthdate"
                    onChange={this.onChangeDateofbirth}
                    />
                    </div>
                </div>
            </div>
            </form>
            <ul className="unlist">
                <li className="lilist">
                  <p>id</p>
                  <p>FirstName</p>
                  <p>LastName</p>
                  <p>EmailId</p>
                  <p>DateOfBirth</p>
                  <p>Action</p>

                </li>
                {List1.map(each=>(
                    <DataElement key={each.id} Details={each}  onDelete={this.onDelete}/>
                ))}


            </ul>
            </div>
        )
    }
}

export default Form;