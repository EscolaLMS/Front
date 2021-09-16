import React from 'react'

const Preloader = () => {
    return (
        <>
            <div className="preloader">
                <div className="loader">
                    <div className="loadingio-spinner-reload">
                        <div className="ldio">
                            <div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .preloader {
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999999999999;
                    position: fixed;
                    background-color: rgba(255, 255, 255, 0.85);
                }

                .preloader .loader {
                    top: 50%;
                    left: 50%;
                    position: absolute;
                    -webkit-transform: translate(-50%, -50%);
                            transform: translate(-50%, -50%);
                }

                .preloader .ldio > div {
                    -webkit-animation: ldio 1s infinite linear;
                            animation: ldio 1s infinite linear;
                    -webkit-transform-origin: 50px 50px;
                            transform-origin: 50px 50px;
                }

                .preloader .ldio > div div {
                    position: absolute;
                }

                .preloader .ldio > div div:nth-child(1), .preloader .ldio > div div:nth-child(2) {
                    width: 75px;
                    height: 75px;
                    border: 5px solid;
                    border-radius: 50%;
                    border-color: transparent #fe4a55 #fe4a55 #fe4a55;
                    -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                    position: absolute;
                    -webkit-transform: rotate(45deg);
                            transform: rotate(45deg);
                    -webkit-transform-origin: 50px 50px;
                            transform-origin: 50px 50px;
                }

                .preloader .ldio > div div:nth-child(1) {
                    -webkit-transform: rotate(45deg) translate(12.5px, 12.5px);
                            transform: rotate(45deg) translate(12.5px, 12.5px);
                }

                .preloader .ldio > div div:nth-child(2) {
                    -webkit-transform: rotate(0deg) translate(12.5px, 12.5px);
                            transform: rotate(0deg) translate(12.5px, 12.5px);
                }

                .preloader .ldio > div div:nth-child(3) {
                    width: 0;
                    height: 0;
                    border: 12px solid;
                    border-color: transparent transparent transparent #fe4a55;
                    -webkit-transform: translate(50px, 6.5px);
                            transform: translate(50px, 6.5px);
                }

                .preloader .loadingio-spinner-reload {
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    display: inline-block;
                }

                .preloader .ldio {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    -webkit-transform: translateZ(0) scale(1);
                            transform: translateZ(0) scale(1);
                    -webkit-backface-visibility: hidden;
                            backface-visibility: hidden;
                    -webkit-transform-origin: 0 0;
                            transform-origin: 0 0;
                }

                @-webkit-keyframes ldio {
                    0% {
                        -webkit-transform: rotate(0);
                                transform: rotate(0);
                    }
                    100% {
                        -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                    }
                }

                @keyframes ldio {
                    0% {
                        -webkit-transform: rotate(0);
                                transform: rotate(0);
                    }
                    100% {
                        -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    )
}

export default Preloader
