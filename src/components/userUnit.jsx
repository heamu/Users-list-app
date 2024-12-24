import { useState } from "react";

import Dialog from "@mui/material/Dialog";  
import DialogContentText from "@mui/material/DialogContentText";  
import DialogTitle from "@mui/material/DialogTitle";  
import DialogActions from "@mui/material/DialogActions";  
import DialogContent from "@mui/material/DialogContent";  
import Button from "@mui/material/Button";


export default function userUnit({user}){

    const [dialogopen , setdialogopen] = useState(false);



    const [details,setdetails] = useState(null);

    async function getDialogue(user_id,username){     

         const det = await fetch(`https://dummyjson.com/users/${user_id}`);
            const result = await det.json();
            setdetails(result);
            setdialogopen(true);
    }

    function closeDialog(){
        setdialogopen(false);
        setdetails(null);
    }

 

    return (<>
            <div key={user.id} className="userunit" >
                <h3>{user.username}</h3>
                <h4> <span>Age :</span> {user.age}</h4>
                <h4><span>Role :</span> {user.company.title}</h4>
                <h4><span>State :</span> {user.address.city}</h4>
                <button className="get_users" onClick={()=>{getDialogue(user.id,user.username)}}> more </button>
            </div>

            <Dialog open={dialogopen} >
                    <DialogContent>
                        <h2>{`${details?.firstName} ${details?.lastName}`}</h2>
                        <h3><span>phone : </span>{details?.phone}</h3>
                        <h3><span>email : </span>{details?.email}</h3>
                        <h3><span>company : </span>{details?.company.name}</h3>
                        <h3></h3>
                        <h3></h3>
                    </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Close</Button>
                </DialogActions>
            </Dialog>
             
            </>
    );
}