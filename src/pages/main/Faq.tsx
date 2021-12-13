import React, { useState } from 'react';

const Faq = () => {
    const [isFaq1, setIsFaq1] = useState(false);
    const [isFaq2, setIsFaq2] = useState(false);
    const [isFaq3, setIsFaq3] = useState(false);
    const [isFaq4, setIsFaq4] = useState(false);
    const [isFaq5, setIsFaq5] = useState(false);
    const [isFaq6, setIsFaq6] = useState(false);
    const [isFaq7, setIsFaq7] = useState(false);

    return (
        <section id="faq" className="bg-light-blue py-5">
            <div className="container py-md-5 my-lg-5">
                <h2 className="text-center mb-4">FAQ
                </h2>
                <p className="text-center">Some of your frequently asked questions.
                </p>
                <div className="row justify-content-center mt-5 pt-4">
                    <div className="col-xl-8 col-lg-10">
                        <div id="faq-collapse">
                            <button onClick={() => setIsFaq1(!isFaq1)}>
                                <h3 className="fs-4 mb-0 pb-3 q1 ml-10" data-bs-target="#faq-collapse-1" data-bs-toggle="collapse">When are the Shibagoal dropping?
                                </h3>
                            </button>
                            <div className={isFaq1 ? "collapse fs-7 show" : "collapse fs-7 hide"} id="faq-collapse-1">
                                <p className="mb-0 ml-10">Shibagoal Club is dropping on 18th October, 7PM UTC. We highly recommend everyone join our

                                    <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="text-dark" rel="noreferrer">Discord
                                    </a>
                                    and

                                    <a href="https://twitter.com/GreatBrainsNFT" target="_blank" className="text-dark" rel="noreferrer">Twitter
                                    </a>
                                    for updates. All Shibagoal Club purchases will be made at

                                    <a href="https://www.greatbrainsclub.com" target="_blank" className="text-dark" rel="noreferrer">www.greatbrainsclub.com
                                    </a>.
                                </p>
                            </div>                            
                            <button onClick={() => setIsFaq3(!isFaq3)}>
                                <h3 className="fs-4 mb-0 pb-3 mt-5 mr-5" data-bs-target="#faq-collapse-3" data-bs-toggle="collapse">How and where can I purchase Shibagoal Club NFTs?
                                </h3>
                            </button>
                            <div className={isFaq3 ? "collapse fs-7 show ml-10" : 'collapse fs-7 hide'} id="faq-collapse-3">
                                <p>The Shibagoal Club NFTs will be available for purchase (minting) directly on our website on 18th October, 7PM UTC. In order to mint your own Shibagoal Club NFT(s), you will need to have a

                                    <a href="https://metamask.io/download" target="_blank" className="text-dark" rel="noreferrer">Metamask
                                    </a>, to be able to purchase (mint) your own Shibagoal Club NFT(s).
                                </p>
                                <p>After your wallet is connected to our website, you can easily choose the amount of Shibagoal Club NFTs that you wish to purchase (mint) (after the drop starts, of course).
                                </p>
                                <p className="mb-0">Once the Shibagoal NFTs sell out, you will also be able to purchase them on the secondary market,

                                    <a href="https://opensea.io" target="_blank" className="text-dark" rel="noreferrer">OpenSea.io
                                    </a>. However, we have to say that the resale prices will most likely be much higher!
                                </p>
                            </div>
                            <button onClick={() => setIsFaq4(!isFaq4)}>
                                <h3 className="fs-4 mb-0 pb-3 mt-5 question mr-10" data-bs-target="#faq-collapse-4" data-bs-toggle="collapse">How many Shibagoal NFTs can be minted per transaction?
                                </h3>
                            </button>
                            <div className={isFaq4 ? "collapse fs-7 show" : 'collapse fs-7 hide'} id="faq-collapse-4">
                                <p className="mb-0 ml-10">You can mint a maximum of 20 Shibagoal Club NFTs per transaction.
                                </p>
                            </div>
                            <button onClick={() => setIsFaq5(!isFaq5)}>
                                <h3 className="fs-4 mb-0 pb-3 mt-5 ml-10" data-bs-target="#faq-collapse-5" data-bs-toggle="collapse">What type of tokens are the Shibagoal?
                                </h3>
                            </button>
                            <div className={isFaq5 ? "collapse fs-7 show" : 'collapse fs-7 hide'} id="faq-collapse-5">
                                <p className="mb-0 ml-10">Each Great Brain NFT is an ERC-721 token. The images will be hosted on the IPFS (InterPlanetary File System) so that they will be with us forever!
                                </p>
                            </div>
                            <button onClick={() => setIsFaq6(!isFaq6)}>
                                <h3 className="fs-4 mb-0 pb-3 mt-5 ml-9" data-bs-target="#faq-collapse-6" data-bs-toggle="collapse">How many Shibagoal do you recommend buying on the drop day?
                                </h3>
                            </button>
                            <div className={isFaq6 ? "collapse fs-7 show" : 'collapse fs-7 hide'} id="faq-collapse-6">
                                <p className="mb-0 ml-10">That’s completely up to you. However, we strongly recommend everyone buy at least three Shibagoal NFTs (you will know why in the near future). Also, the more Shibagoal you purchase, the higher the chance you have of getting a very rare, valuable piece.
                                </p>
                            </div>
                            <button onClick={() => setIsFaq7(!isFaq7)}>
                                <h3 className="fs-4 mb-0 pb-3 mt-5 ml-10" data-bs-target="#faq-collapse-7" data-bs-toggle="collapse">How can I contact the Shibagoal team?
                                </h3>
                            </button>
                            <div className={isFaq7 ? "collapse fs-7 show" : 'collapse fs-7 hide'} id="faq-collapse-7">
                                <p className="mb-0 ml-10">You can contact us on

                                    <a href="https://twitter.com/GreatBrainsNFT" target="_blank" className="text-dark" rel="noreferrer">Twitter
                                    </a>
                                    and

                                    <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="text-dark" rel="noreferrer">Discord
                                    </a>, where we are extremely active, and also on

                                    <a href="https://instagram.com/greatbrainsclub_nft" target="_blank" rel="noreferrer" className="text-dark">Instagram
                                    </a>
                                    and through our email:

                                    <a href="mailto:nft@greatbrainsclub.com" target="_blank" className="text-dark" rel="noreferrer">nft@greatbrainsclub.com
                                    </a>. We are more than happy to answer all of your questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;