import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useWallet } from "@solana/wallet-adapter-react";
import useCandyMachine from '../../hooks/use-candy-machine';
import useWalletBalance from '../../hooks/use-wallet-balance';
import { shortenAddress } from '../../utils/candy-machine';
import Countdown from 'react-countdown';

const Home = () => { 
      
    const [isShown, setIsShown] = useState(false);

    const showModal = () => {console.log("------")
      setIsShown(true);
    };

    const closeModal = () => {
      setIsShown(false);
    };

    // useEffect(() => {
    //     console.log('--------------')
    //     showModal();
    //   if (!sessionStorage.popupModal) {
    //     const timer = setTimeout(() => {
    //       setIsShown(true);
    //       sessionStorage.popupModal = 1;
    //     }, 2000);

    //     return () => clearTimeout(timer);
    //   }
    // }, []);

    const [balance] = useWalletBalance()
    const [isActive, setIsActive] = useState(false);
    const wallet = useWallet();
  
    const { isSoldOut, mintStartDate, isMinting, onMint, onMintMultiple, nftsData } = useCandyMachine()
  
    const [count, setCount] = useState(1);

    const handleNumber = (cnt: number) => {
        setCount(cnt);
    }

    const handleMint = async () => {
        if (!wallet.connected) return;
        await onMintMultiple(1);
        setIsShown(true);
    }

    const handleCount = (cnt: number) => {
        if(cnt == 1) {
            if(count == 20) return;
            else setCount(count+1);
        } else if (cnt == -1) {
            if(count == 1) return;
            else setCount(count-1);
        }
    }

    return (
        <section id="home" className="bg-light-blue py-5">
            {isShown && <div className="modal" style={{display: 'block'}} id="channelModal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-light text-center">WELCOME ABOARD</h5>

                            <button
                                onClick={closeModal}
                                style={{ color: '#fff' }}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5>you successfully minted your Golden ticket!!</h5>
                        </div>                   
                    </div>
                </div>
            </div>}
            <div className="container py-md-5 my-xl-5">
                <div className="ps-xl-5 pb-xl-5 mb-xxl-5">                    
                    <div className="row align-items-center justify-content-center justify-content-lg-start pt-5 mt-5 mt-xl-0">
                        
                        <div className="col-lg-5">
                            <h1 className="mb-5">Shibagoal NFT
                            </h1>
                            <p className="mb-5">Shibagoal is a collection of 11,000 unique collectibles placed on the Solana 
                                blockchain. The 11,000 individual Shibagoal NFTs were AI-generated using over 
                                180 attributes, assuring that every Shibagoal NFT is totally unique! In the 1st 
                                MINTING PHASE, there will be 1.000 Shibagoal NFTs available to mint. After 
                                that, minting will be CLOSED and the GBC ALPHA Community with GBC ALPHA 
                                Insights will be started. Only holders will have access to the GBC Alpha 
                                Community with GBC ALPHA Insights.
                            </p>
                        </div>
                        <div className="col-md-7 col-9 py-4 py-lg-0">
                            <img src="/images/cardsunknown.png" alt="Illustration 1" className="w-100" />
                        </div>
                    </div>
                    <div className="pt-5 mt-0 mt-xxl-n6" id="minting">
                        <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mt-5">
                            <div className="bg-dark rounded-xl text-white py-3 py-sm-1 px-5">
                                <form method="post" action=".">
                                    <div className="row align-items-center justify-content-between ff-andes fw-black py-4">
                                        <div className="fs-4">{nftsData.itemsRedeemed}
                                             / {nftsData.itemsAvailable} NFTs minted (in&nbsp;PHASE&nbsp;1)
                                        </div>                                                                             <div className="col-12 py-3">
                                            <a className="btn btn-primary btn-red btn-lg w-100 fw-normal">
                                                <button 
                                                    type = 'button'
                                                    disabled={isSoldOut || isMinting || !isActive}
                                                    onClick={handleMint}
                                                >
                                                    {isSoldOut ? (
                                                        "SOLD OUT"
                                                    ) : isActive ?
                                                        <span>{isMinting ? 'LOADING...' : 'MINT NOW'}</span> 
                                                    :
                                                        <Countdown
                                                        date={mintStartDate}
                                                        onMount={({ completed }) => completed && setIsActive(true)}
                                                        onComplete={() => setIsActive(true)}
                                                        renderer={renderCounter}
                                                        />
                                                    }
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <a href="#minting" className="btn btn-secondary btn-lg btn-fixed">Minting live
                    </a>
                </div>
            </div>
        </section>
    )
}

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
      <span className="text-gray-800 font-bold text-2xl cursor-default">
        Live in {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </span>
    );
  };

export default Home;