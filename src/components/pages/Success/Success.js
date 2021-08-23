import Card from '../../Card/Card';
import {Button} from 'reactstrap';
import styles from './Success.module.css';
import {useLocation,Link, Redirect} from 'react-router-dom';
 
const Success = props =>{
    const location = useLocation();     
    const UserDetails = location.state;

    return(
       UserDetails ?   
       <div className={styles.success}>
         <h3>New User added successfully</h3>
         <Card>
            <h4>Name {location.state.name}</h4>
            <p>ID {location.state.id}</p>
         </Card>
         <Link to='/' style={{margin:'1rem auto'}}><Button color='primary'>Go Home</Button></Link>
       </div>
       :
       <Redirect to='/'/>
   )
}

export default Success;