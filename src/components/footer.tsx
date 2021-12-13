import React from 'react';
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="py-sm-5 py-3">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-2 col-lg-3 col-4">
                        <img src="/images/logo250.png" alt="Shibagoal" className="w-100" />
                    </div>
                    <div className="col-auto">
                        <div className="row">
                            <div className="col">
                                <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="btn btn-icon bg-hover-light-blue border-0" rel="noreferrer">
                                    <img src="/images/discord3.png" alt="" className="w-10" />                                                    
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://twitter.com/GreatBrainsNFT" target="_blank" className="btn btn-icon bg-hover-light-blue border-0" rel="noreferrer">
                                    <img src="/images/twitter3.png" alt="" className="w-5" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://instagram.com/greatbrainsclub_nft" target="_blank" rel="noreferrer" className="btn btn-icon bg-hover-light-blue border-0">
                                    <img src="/images/instagram4.png" alt="" className="w-5" />
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://opensea.io/collection/the-great-brains-club" rel="noreferrer" target="_blank" className="btn btn-icon bg-hover-light-blue border-0">
                                    <img src="/images/opensea3.png" alt="" className="w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className="mb-0 fs-8">Ⓒ2021 – All rights reserved by Great Brains Club
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;