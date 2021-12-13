import {WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import React, {useState} from 'react';
import {TokenService} from '../core/api-services/token.service';
import {SuccessResponse} from '../core/types/token';

const Header = () => {
    const [isToogle, setIsToogle] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() =>
    //         console.log("00000000000000000"), 1000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);

    const revealClicked = () => {
        console.log('reveal clicked');
        TokenService.reveal().then((res: SuccessResponse) => {
            console.log('reveal info = ', res);
        }).catch(() => {
            console.log('reveal tokens launched error');
        }).finally(() => {
            console.log('reveal tokens finally finsihed');
        });
    }


    return (
        <header className="bg-light-blue py-lg-5 py-4 scrolled">
            <div className="container">
                <div className="row justify-content-between align-items-lg-start align-items-xl-center">
                    <div className="col-4 col-lg-3 col-xl-2 col-xxl-3 pe-0 pe-xxl-5 py-2">
                        <a href="/#">
                            <img src="/images/logo250.png" alt="Shibagoal" className="w-100" />
                        </a>
                    </div>
                    <div className="col">
                        <nav className="navbar navbar-expand-lg justify-content-end navbar-light text-uppercase fs-7 fw-bold" onClick={() => setIsToogle(!isToogle)}>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                </span>
                            </button>
                            <div className={isToogle ? "" : "collapse navbar-collapse"}>
                                <div className="row w-100">
                                    <div className="col-lg">
                                        <ul className="navbar-nav text-nowrap h-100 align-items-center justify-content-end">
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#features">Features</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#roadmap">Roadmap</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#community">Community</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#team">Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1" href="/#faq">FAQ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link ps-1 newbies" href="/buy">How to buy NFT?</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg px-0">
                                        <div className="row justify-content-end align-items-center">
                                            <div className="col-lg-auto text-nowrap text-center ps-0">
                                                <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="btn btn-icon" rel="noreferrer">
                                                    <img src="/images/discord.png" alt="" className="w-5" />
                                                </a>
                                                <a href="https://twitter.com/GreatBrainsNFT" target="_blank" className="btn btn-icon" rel="noreferrer">
                                                    <img src="/images/twitter.png" alt="" className="w-5" />
                                                </a>
                                                <a href="https://instagram.com/greatbrainsclub_nft" rel="noreferrer" target="_blank" className="btn btn-icon">
                                                    <img src="/images/instagram.png" alt="" className="w-5" />
                                                </a>
                                                <a href="https://opensea.io/collection/the-great-brains-club" rel="noreferrer" target="_blank" className="btn btn-icon">
                                                    <img src="/images/opensea.png" alt="" className="w-5" />
                                                </a>
                                            </div>
                                            <div className="col-lg-3 col-xl-6 text-center text-lg-end px-0 mt-2 mt-lg-0">
                                                <button onClick={revealClicked} className="btn-primary btn btn-danger">Reveal</button>
                                                <WalletMultiButton />
                                                {/* <WalletDisconnectButton /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>);
}

export default Header;