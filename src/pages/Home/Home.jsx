import BlogDashboard from "../../components/BlogDashboard";
import FormPost from "../../components/Form";

import "./Home.scss"

const Home = () => {
    return (
        <div className="main-content">
            <div className="wrapper container">
                <FormPost/>
                <BlogDashboard/>
            </div>
        </div>     
    )
}
export default Home