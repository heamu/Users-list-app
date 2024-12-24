import Unit from './userUnit'

export default function userDisplay({iserror ,displayerror, userslist}){


    return (

        <div   className="secondState">
              { 

                userslist.map((user)=>{
                    return <Unit key={user.email}  user={user} />;
                })

              }
        </div>

    );

}