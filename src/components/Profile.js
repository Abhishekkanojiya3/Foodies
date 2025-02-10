import React from "react";
// const Profile = () => {
//     return(
//         <h1>Hiiiiiiiiiiiiiiiiiiii</h1>
//     )
// }

// export default Profile

class Profile extends React.Component{
constructor(props)
{
    super(props);
    this.state = {
        name: "Abhishek"
    }
}
render(){
    return(
        <>
        <h2>Name: {this.state.name}</h2>
        <button onClick={ () => {
            this.setState({name : "Kanojiya"})
        }}>Change</button>
        </>
    )
}

}

export default Profile