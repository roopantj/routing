import User from './User';
import { Button } from 'reactstrap';
import './Centered.css';
import { useHistory, useLocation } from 'react-router-dom';

const Users = props =>{
    const users = [
        {id:'101', name:'Roopan'},
        {id:'102', name:'Yaswant'},
        {id:'103', name:'Murugan'}
    ]

    const sortUsers = (users, ascending) => {
        return users.sort((userA, userB) => {
          if (ascending) {
            return userA.id > userB.id ? 1 : -1;
          } else {
            return userA.id < userB.id ? 1 : -1;
          }
        });
      };    

    const location = useLocation()
    const history = useHistory();

    const queryParams = new URLSearchParams(location.search);
    const isSortAsc = queryParams.get('sort')==='asc'?true:false;

    const sortedUsers = sortUsers(users,isSortAsc)

    const onSortHandler = () =>{
        history.push(`${location.pathname}?sort=${(isSortAsc ? 'desc' : 'asc')}`)
    }


    return(
        <div style={{margin:'3rem 3rem'}}>
            <h3>USERS</h3>
            <Button onClick={onSortHandler}>Sort {isSortAsc?'Descending':'Ascending'}</Button>
            <div className="centered">
                {
                    sortedUsers.map(user=><User username={user.name} userid={user.id}/>)
                }
            </div>
        </div>
    )
}

export default Users;