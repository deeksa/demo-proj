
import './DataElement.css';

const DataElement=props=>{
    const {userData,onDelete}=props 
    const{id,Firstname,Lastname,Emailid,Dateofbirth}=userData

const deleteMethod=()=>{
    onDelete(id);


}
    

     
   
    

    
    
   // const editMethod=()=>{
     //  editData(id);
   //}
   

    
    return(
    <li className="lilist1">
        <p>{id}</p>
        <p>{Firstname}</p>
        <p>{Lastname}</p>
        <p>{Emailid}</p>
        <p>{Dateofbirth}</p>
        <div className="icons">
        <div>
        <button type="button" onClick={deleteMethod}>
        <i class="fas fa-trash-alt"></i>
        </button>
        </div>
       
        </div>

    </li>
        )
    
    }
export default  DataElement;
