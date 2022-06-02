import React from "react";
import './UnsupportedDevice.css';

class UnsupportedDevice extends React.Component {
    render() {
        return (
            <div className="UnsupportedDevice">
                <div className="UnsupportedDevice__content">
                    <img className="UnsupportedDevice__logo" src={'/img/logo/dnero_wallet_logo@2x.png'}/>
                    <div className="UnsupportedDevice__title">
                        This wallet is designed for desktop. Try our mobile wallets!
                    </div>
       
                </div>
            </div>
        );
    }
}

export default UnsupportedDevice;
