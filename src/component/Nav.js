import ShoppingCartIcon  from "@material-ui/icons/ShoppingCart";
import Search from './Search';
function Nav(){
    return(
        <>
        <div className="navbar">
            <div className="main_nav">
                <nav>
                    <ul>
                        <li>
                            <h2 className="logo"><span className="bold">HK</span>
                            <span className="rem">VITALS</span> </h2>
                        </li>
                        <li>
                            <input/>
                        </li>
                        <li>
                            <a href="home" className="button"><span>login/signup</span></a>
                        </li>
                        <li>
                            <a href="cart"><span className="cart"><ShoppingCartIcon/></span></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="nv">

            </div>
        </div>
        </>
    );
}

export default Nav;