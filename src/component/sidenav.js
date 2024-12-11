import { Outlet,Link } from "react-router-dom";

function Sidenav(){
    return(
        <>
        <nav>
    <ul>
      <li><Link to ="/">London</Link></li>
      <li><Link to="paris">Paris</Link></li>
      <li><Link to="tokyo">Tokyo</Link></li>
    </ul>
  </nav>
        </>
    )
}

export default Sidenav;