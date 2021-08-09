import Card from "../../Card/Card";

const User = props =>{
  return(
      <Card>
          <h3>{props.username}</h3>
          <p>ID: {props.userid}</p>
      </Card>
  )
}

export default User;