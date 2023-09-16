import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <>
        <div className="" id="navbar">
            <div id="left-side-navbar">
                <img src="leetcode-clone\src\assets\LeetCode_logo_black.png" alt="leetcode-logo" id="leetcode-logo" />
                <h2 id="leetcode-text-nav">LeetCode</h2>

            </div>
            <div id="right-side-navbar">
                <div id="navbar-options"><Link to='/premium'>Premium</Link></div>
                <div id="navbar-options"><Link to='/explore'>Explore</Link></div>
                
                <div id="navbar-options"><Link to='/product'>Product</Link></div>
                <div id="navbar-options"><Link to='/developer'>Developer</Link></div>
                <div id="navbar-options"><Link to='/signIn'>Sign In</Link></div>



            </div>

        </div>        
        </>
    )
}

export default Navbar