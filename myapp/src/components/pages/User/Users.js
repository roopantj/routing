import User from './User';
import './Centered.css';

const Users = props =>{
    const DUMMY_DATA = [
        {id:'101', name:'Roopan'},
        {id:'102', name:'Yaswant'},
        {id:'103', name:'Murugan'}
    ]
   
    return(
        <div style={{margin:'3rem 3rem'}}>
            <h3>USERS</h3>
            <div className="centered">
                {
                    DUMMY_DATA.map(user=><User username={user.name} userid={user.id}/>)
                }
            </div>
        </div>
    )
}

export default Users;