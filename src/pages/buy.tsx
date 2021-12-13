import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Buy = () => {

    const [isToogle, setIsToogle] = useState(false);

    const renderSlides = () =>
        ['/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg', '/images/cardpreview01.jpg', '/images/cardpreview02.jpg'].map(item => (
            <div>
                <div className="ml-10">
                    <img src={item} alt="" className="w-100 border border-5 border-dark rounded-xl overflow-hidden" />
                    <img src={item} alt="" className="w-100 border border-5 border-dark rounded-xl overflow-hidden mx-96 mt-10" />
                </div>
            </div>
        ));


    return (
        <div>
            <header className="bg-red py-lg-5 py-4">
                <div className="container">
                    <div className=" row justify-content-between align-items-lg-start align-items-xl-center scrolled">
                        <div className="col-4 col-lg-3 col-xl-2 col-xxl-3 pe-0 pe-xxl-5 py-2">
                            <a href="/#">
                                <img src="/images/logo.svg" alt="Great Brains Club" className="w-100" />
                            </a>
                        </div>
                        <div className="col">
                            <nav className=" navbar navbar-expand-lg justify-content-end navbar-light text-uppercase fs-7 fw-bold" onClick={() => setIsToogle(!isToogle)}>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                    </span>
                                </button>
                                <div className={isToogle ? "" : "collapse navbar-collapse"}>
                                    <div className="row w-100">
                                        <div className="col-lg">
                                            <ul className=" navbar-nav text-nowrap h-100 align-items-center justify-content-end ">
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#home">
                                                        Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#about">
                                                        About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#features">
                                                        Features</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#roadmap">
                                                        Roadmap</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#community">
                                                        Community</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#team">
                                                        Team</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1" href="/#faq">
                                                        FAQ</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link ps-1 newbies" href="/how-to-buy">
                                                        How to buy NFT?</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg">
                                            <div className="row justify-content-end align-items-center">
                                                <div className="col-lg-auto text-nowrap text-center">
                                                    <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="btn btn-icon" rel="noreferrer">
                                                        <img src="/images/discord5.png" alt="" className="w-5" />
                                                    </a>
                                                    <a href="https://twitter.com/GreatBrainsNFT" target="_blank" className="btn btn-icon" rel="noreferrer">
                                                        <img src="/images/twitter5.png" alt="" className="w-5" />
                                                    </a>
                                                    <a href="https://instagram.com/greatbrainsclub_nft" rel="noreferrer" target="_blank" className="btn btn-icon">
                                                        <img src="/images/instagram5.png" alt="" className="w-5" />
                                                    </a>
                                                    <a href="https://opensea.io/collection/the-great-brains-club" rel="noreferrer" target="_blank" className="btn btn-icon">
                                                        <img src="/images/opensea5.png" alt="" className="w-5" />
                                                    </a>
                                                </div>
                                                <div className=" col-lg-3 col-xl-6 text-center text-lg-end px-0 mt-2 mt-lg-0 ">
                                                    <a href="#" data-bs-target="#metamask-modal" data-bs-toggle="modal" className="btn btn-secondary">
                                                        <span className="d-hover-none">
                                                            Disconnected</span>
                                                        <span className="d-none d-hover-inline-block">
                                                            Connect now</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section id="home" className="bg-red bg-how-to-buy py-5 overflow-x-clip">
                <div className="container pt-5 pb-md-5 mt-lg-5 mb-xl-5">
                    <div className="pb-xxl-5 pt-lg-5">
                        <div className=" row justify-content-center align-items-center pt-5 text-center ">
                            <div className="col-sm-7 col-lg-5 col-xxl-4">
                                <h1 className="mb-5 newbies">How to buy our NFTs?</h1>
                            </div>
                            <div className="col-12">
                            </div>
                            <div className="col-sm-8">
                                <p className="text-white">Do you want to become part of the Great Brains Club NFT holders’ community and invest in Great Brains Club NFTs but have no clue how it works? No worries — we’ve got you covered! On this page, we will explain to you step-by-step what NFTs are, why you should consider buying the Great Brains Club NFTs, and how you can purchase (mint) them when the time comes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="py-5">
                <div className="container py-md-5 my-xxl-5">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-12">
                            <h1 className="mb-5">What are NFTs?</h1>
                        </div>
                        <div className="col-12">
                        </div>
                        <div className="col-lg-8">
                            <p>NFTs, or non-fungible-tokens are unique (irreplaceable, irreplicable) digital files. In our case, they are in the form of unique illustrations. At the moment, most NFTs (Great Brains included) are part of the Ethereum blockchain (which means that you need to have some ETH in order to buy your own NFT). One could say that, in a way, NFTs are modern digital art, which can, of course, in the same way as the traditional art, grow in value over time.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="purchase" className="bg-green py-5">
                <div className="container py-md-5 my-xxl-5">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-9">
                            <h1 className="mb-5">How can I purchase (mint) the Great Brains Club NFTs?</h1>
                        </div>
                        <div className="col-12">
                        </div>
                        <div className="col-lg-7">
                            <p>For someone new to the NFT world, the purchasing process might seem a little confusing—and we get it. Let us show you step-by-step instructions on how you can buy your own Great Brains Club NFT in just a few minutes.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 pt-lg-5">
                        <div className="col-auto text-center">
                            <span className="line-dot dot-lg top-0">1</span>
                            <span className="line-straight">
                            </span>
                        </div>
                        <div className="col col-lg-8 pt-2 pb-5">
                            <h3 className="mb-5">Buy some ETH (Ethereum)</h3>
                            <p>Great Brains Club NFTs use the Ethereum network (each Great Brain is an ERC-721 token). On the minting day, each Great Brains Club NFT will cost 0.07 ETH + “gas fees” (fees paid for using the Ethereum network). So we recommend having around 0.09 to 0.12 ETH for each Great Brains Club NFT purchase. You can buy your ETH, for example, through Binance/Coinbase/or any other major cryptocurrency exchange.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto text-center">
                            <span className="line-dot dot-lg top-0">2</span>
                            <span className="line-straight">
                            </span>
                        </div>
                        <div className="col col-lg-8 pt-2 pb-5">
                            <h3 className="mb-5">Install a crypto wallet and link it with your account on the cryptocurrency exchange.</h3>
                            <p>For the next step, you will need to install a cryptocurrency wallet called<a href="https://metamask.io/download" target="_blank" className="text-dark" rel="noreferrer">Metamask</a>. After you have your wallet set up, connect it with your account on the cryptocurrency exchange.</p>
                            <p>The last thing is to connect your wallet with our website (you can see if you are connected or not by the sign, CONNECTED or DISCONNECTED, in the top-right corner of our website). The easiest way is to add your wallet (for example, Metamask) as an extension to your web browser (for example, Google Chrome).</p>
                            <p>Now, you are ready to buy your NFTs!</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto text-center">
                            <span className="line-dot dot-lg top-0">3</span>
                        </div>
                        <div className="col col-lg-8 pt-2">
                            <h3 className="mb-5">Buy your Great Brains Club NFTs!</h3>
                            <p>After the drop, you will be able to easily mint (minting basically means the initial purchase of an NFT collection) your own Great Brains! That’s amazing, isn’t it? ☺ After you buy your NFTs, they will be automatically moved into your wallet. After the minting, yours and others’ Great Brains Club NFTs will be available for resale and further trading on<a href="https://OpenSea.io" target="_blank" className="text-dark" rel="noreferrer">OpenSea.io</a>.</p>
                            <div className=" row align-items-center mx-0 rounded-md text-white bg-dark fw-regular w-100 py-2 ">
                                <div className="col-auto py-3 ps-4 pe-3">
                                    <img src='./images/bulb1.png' />
                                </div>
                                <div className="col ps-0 fs-7 fw-regular">
                                    <strong>Tip:</strong> We highly recommend buying<strong>at least three Great Brains NFTs</strong>. You will discover why in the near future!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-yellow py-5 overflow-hidden">
                <div className="slide-carousels py-md-5 my-xl-5">
                    <Slider
                        dots={false}
                        slidesToShow={5}
                        slidesToScroll={0.5}
                        autoplay={true}
                        autoplaySpeed={100}
                        pauseOnHover={false}
                    >
                        {renderSlides()}
                    </Slider>
                </div>
            </section>
            <footer className="py-sm-5 py-3">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-2 col-lg-3 col-4">
                            <img src="/images/logo.svg" alt="Great Brains Club" className="w-100" />
                        </div>
                        <div className="col-auto">
                            <div className="row">
                                <div className="col">
                                    <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="btn btn-icon bg-hover-light-white  border-0" rel="noreferrer">
                                        <img src="/images/discord3.png" alt="" className="w-20" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://twitter.com/GreatBrainsNFT" target="_blank" className="btn btn-icon bg-hover-light-white border-0" rel="noreferrer">
                                        <img src="/images/twitter3.png" alt="" className="w-10" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://instagram.com/greatbrainsclub_nft" target="_blank" rel="noreferrer" className="btn btn-icon bg-hover-light-white border-0">
                                        <img src="/images/instagram3.png" alt="" className="w-10" />
                                    </a>
                                </div>
                                <div className="col">
                                    <a href="https://opensea.io/collection/the-great-brains-club" rel="noreferrer" target="_blank" className="btn btn-icon bg-hover-light-white border-0">
                                        <img src="/images/opensea3.png" alt="" className="w-10" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p className="mb-0 fs-8">Ⓒ2021 – All rights reserved by Great Brains Club</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Buy