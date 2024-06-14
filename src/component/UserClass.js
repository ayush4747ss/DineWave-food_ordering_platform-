import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props); 
        
        this.state ={
            userinfo:{
                name:"ayush shukla",
                location:"paris",

                avatar_url:"https://avatars.githubusercontent.com/u/115624586?v=4"
            }
           
           
        };
    }

    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/ayush4747ss");
        const json =await data.json();
        this.setState({
            userinfo:json,
        })
        console.log(json);
    }
    

    render(){
        // const {location,name}=this.props;
        const{name,location,email,avatar_url} =this.state.userinfo;

        return(
        <div className='user-card'>   
            <img src={avatar_url}/>       
            <h3>Name: {name} </h3>
            <h3>Address: {location} </h3>
            <h4>Contact: {email ||"Not available"} </h4>
            {/* <h4>Contact: shuk la.ayush2001@gmail.com </h4> */}
        </div>
        );
    }
}
export default UserClass;