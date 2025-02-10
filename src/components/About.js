import { Outlet } from "react-router-dom";
const About = () => {
    return(
        <div>
            <h1>Hiiiii</h1>
            <p>
                {" "}
                This is the Namaste react by meeeeeeeeeee...............
            </p>
            <Outlet/>
        </div>
    )

}

export default About;