import {Link} from 'react-router-dom';
import { Button } from "reactstrap";
import styles from './User.module.css';

const User = props =>{
  return(
      <div className={styles.user}>
          <h3>{props.username}</h3>
          <p>ID: {props.userid}</p>
          <Link to={`users/${props.userid}`}><Button color='primary'>View Fullscreen</Button></Link>
      </div>
  )
}

export default User;