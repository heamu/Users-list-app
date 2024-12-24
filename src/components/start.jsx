

import DisplayUsers from './userdisplay'

import { useState } from 'react';

export default function start({iserror,displayerror}){
  
    const [userslist , setuserslist] = useState(null);
    const [ispressed , setispressed] = useState(false);

    async function fetchUsers(){

        try{
          const data = await fetch('https://dummyjson.com/users');
          const result = await data.json();
      
          if(result){
            setispressed(true);
            setuserslist(result.users);
          }
          else{
            displayerror();
          }
        
          
        }
        catch(e){
          displayerror();
        }
      
        }

    return(
      !ispressed ?
        ( <div className='initial'>
          <h1  className='users_list'>Users list</h1>
          <button  onClick={()=>{fetchUsers()}}   className='get_users'> Get users</button>
     </div>):
     (
        <DisplayUsers iserror={iserror}  displayerror={displayerror} userslist={userslist} />
     )
    )
  }