import React from 'react';
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
        <nav className={`${styles.navigation} container flex`}>
            <div>
                <img className='logo-image' src="./images/logo.png" alt="logo" />
            </div>
            <div className="link-items">
                <ul className="links flex">
                    <li className="items">
                        <a href="" className="item">home</a>
                    </li>
                    <li className="items">
                        <a href="" className="item">about us</a>
                    </li>
                    <li className="items">
                        <a href="" className="item">contact</a>
                    </li>
                    <li className="items">
                        <a href="" className="item">gallery</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navigation;
