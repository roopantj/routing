import Card from '../../Card/Card';

const Home = props =>{
    return(
        <div style={{margin:'3rem 3rem'}}>
            <h3>HOME</h3>
            <Card onClick={()=>props.history.push('users')}>
               <h4>Users</h4> 
            </Card>
            <Card onClick={()=>props.history.push('/add-user')}>
               <h4>Add new user</h4> 
            </Card>
        </div>
    )
}

export default Home;