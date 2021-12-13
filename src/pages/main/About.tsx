const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="ps-lg-5 py-5 my-5">
                    <div className="row justify-content-between align-items-start align-items-xl-center pt-xxl-5 mt-xxl-5">
                        <div className="col-xl-5">
                            <div className="row">
                                <div className="col-xxl-10">
                                    <h2 className="mb-5">What is Shibagoal about?
                                    </h2>
                                </div>
                            </div>
                            <p>Owning a Shibagoal NFT gives you many benefits besides the ownership itself (
                                <a href="#features" className="fw-black text-dark">check the features page here
                                </a>).
                            </p>
                            <p>For example, as the Shibagoal NFT holder, you will get access to an exclusive 
                                membership community, where not only that you will be surrounded by 
                                likeminded individuals, but you will also get the latest updates from the NFT 
                                world, daily tips and signals on trading NFTs successfully from real cryptoexperts (so that you might make some extra ETH money), you will be part of 
                                many giveaways, you will have access to Shibagoal Podcasts, and much more!
                            </p>
                            {/* <p>In other words, your NFT Brain will definitely grow bigger!
                            </p> */}
                        </div>
                        <div className="col-md-6 mt-5 mt-xl-0">
                            <div className="border border-5 border-dark rounded-xl overflow-hidden">
                                <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                                    {/* <div className="carousel-inner">
                                        <div className="carousel-item example" data-bs-interval="2000">
                                            <img src="/images/gif.gif" alt="About 1" className="w-100" />
                                        </div>
                                        <div className="carousel-item example" data-bs-interval="2000">
                                            <img src="/images/cardpreview02.jpg" alt="About 2" className="w-100" />
                                        </div>
                                        <div className="carousel-item example" data-bs-interval="2000">
                                            <img src="/images/cardpreview01.jpg" alt="About 3" className="w-100" />
                                        </div>
                                        <div className="carousel-item example active" data-bs-interval="2000">
                                            <img src="/images/cardpreview02.jpg" alt="About 4" className="w-100" />
                                        </div>
                                    </div> */}
                                    <img src="/images/gif.gif" alt="About 1" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-12">
                            <div className="row py-xl-5 my-5">
                                <div className="col-xl-3 mb-3 mb-xl-0">
                                    <div className="bg-light-blue rounded-lg py-5 px-4 h-100 shadow-bottom">
                                        <h3 className="pe-5 mb-4">11,000 NFT’s
                                        </h3>
                                        <p className="text-medium fs-7">Original Shibagoal NFTs. In the first MINTING PHASE, there will be 3,333 NFTs 
                                            available to MINT. After that, minting will be CLOSED and the GBC ALPHA 
                                            Community with GBC ALPHA Insights will be started. Only holders will have 
                                            access to the GBC Alpha Community with GBC ALPHA Insights.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 mb-3 mb-xl-0">
                                    <div className="bg-red rounded-lg py-5 px-4 h-100 shadow-bottom">
                                        <h3 className="pe-5 mb-4">Fair distribution
                                        </h3>
                                        <p className="text-medium fs-7">There are no price tiers; each Shibagoal costs 0.07 ETH. The price will be constant throughout the minting period.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 mb-3 mb-xl-0">
                                    <div className="bg-yellow rounded-lg py-5 px-4 h-100 shadow-bottom">
                                        <h3 className="pe-1 mb-4">Why Shibagoal is on Solana and not in EThereum
                                        </h3>
                                        <p className="text-medium fs-7">Solana’s NFT ecosystem caught fire in late summer, with the platform providing 
                                            an alternative to Ethereum with low fees and rapid transaction times, so it was a 
                                            natural choice for Shibagoal too avoid collectors to be forced to pay high gas 
                                            costs and long wait transaction time; the procedures are exactly the same as 
                                            Ethereal so users that already bought in ETH won’t be caught by surprise, and 
                                            new users will be welcomed by a quicker, cheaper platform.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 mb-3 mb-xl-0">
                                    <div className="bg-green rounded-lg py-5 px-4 h-100 shadow-bottom">
                                        <h3 className="pe-5 mb-4">1 per transaction
                                        </h3>
                                        <p className="text-medium fs-7">You can mint only 1 Shibagoal per transaction in the public mint.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-xxl-5 mb-xxl-5 pb-lg-5">
                        <div className="col-12">
                            <div className="bg-blue rounded-xl shadow-bottom p-5">
                                <div className="row align-items-center">
                                    <div className="col-sm-auto text-center">
                                        <div className="bg-white rounded-circle w-auto d-inline-block p-2 btn-icon">
                                            <img src="/images/discord1.png" alt="" className="w-10" /> 
                                        </div>
                                    </div>
                                    <div className="col-sm col-xxl-5 pe-lg-5 pt-3 pt-sm-0">
                                        <p className="ff-andes fs-4 fw-black lh-sm text-white mb-0">Join our Discord and explore growing Shibagoal community
                                        </p>
                                    </div>
                                    <div className="col-xl col-md-auto text-center text-md-end pt-4 pt-md-0">
                                        <a href="https://discord.gg/pcwcrJV7NM" target="_blank" className="btn btn-primary btn-lg fw-bold text-blue" rel="noreferrer">Join Discord
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;