import React from "react";
import WalletAdapter from "./WalletAdapter.tsx";
import './WalletVerification.css';

function WalletVerification() {
    return(
        <div className="biggerMain">
            <div className="main">
                <div className="leftContainer">
                    <div className="leftSide">
                        <WalletAdapter/>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="gifcontainer">
                        <img className="gif" src={require('./img/nftexamples.gif')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletVerification;