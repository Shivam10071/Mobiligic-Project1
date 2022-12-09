import React from 'react';
import Body from './Body/body'
import styles from './style.module.css';

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return(
       <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Uploading Site</h1>
                <button className={styles.white_btn} onClick={handleLogout}>Logout</button>
            </nav>
            <div style={{"margin": "10px"}}>
                <center>
                    <Body />
                </center>
            </div>
       </div> 
    )
}

export default Main;