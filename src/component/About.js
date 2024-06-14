import User from "./User"
import UserClass from "./UserClass"
const About=()=>{
    return(
        <div>
            <h2>About</h2>
            {/* <User/> */}
            <UserClass name={"Ayush shukla class"} location ={"Bengaluru"}/>
            {/* <UserClass name={" shukla class"} location ={"Bengaluru"}/> */}
        
        </div>

    );

}

export default About