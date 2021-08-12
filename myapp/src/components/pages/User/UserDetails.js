import {useParams} from 'react-router-dom';
import Card from '../../Card/Card';

const UserDetails = props =>{
    const DUMMY_DATA = [
        {id:'101', name:'Roopan'},
        {id:'102', name:'Yaswant'},
        {id:'103', name:'Murugan'}
    ]
    const params =useParams(); 
    const user_data = DUMMY_DATA.filter(user=>user.id===params.userId)
    console.log(user_data)
    return(
         <div style={{margin:'3rem 3rem'}}>
             <h3>USER DETAILS</h3>
             <Card>
                 <h4>Name {user_data[0].name}</h4>
                 <p>ID {user_data[0].id}</p>
             </Card>
         </div>
     )
}

export default UserDetails;