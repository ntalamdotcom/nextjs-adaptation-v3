import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeadPortfolio({

}) {

    const [loadAnimations, setLoadAnimations] = useState<boolean>(false)
    useEffect(() => {
        document.body.className = "dark-vertion black-bg";
        eval("setActiveStyleSheet('red')")
        if (!loadAnimations) {
            setLoadAnimations(true)
        }
    }, []);

    return <>
        <Head>

            <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" href="assets/icons/font-awesome-4.7.0/css/font-awesome.min.css" />
            {/* <!-- Bootstrap CSS --> */}
            <link rel="stylesheet" href="assets/plugins/css/bootstrap.min.css" />
            {/* <!-- Animate CSS--> */}
            <link rel="stylesheet" href="assets/plugins/css/animate.css" />
            {/* <!-- Owl Carousel CSS--> */}
            <link rel="stylesheet" href="assets/plugins/css/owl.css" />
            {/* <!-- Fancybox--> */}
            <link rel="stylesheet" href="assets/plugins/css/jquery.fancybox.min.css" />

            {/* <!-- Custom CSS--> */}
            <link rel="stylesheet" href="assets/css/styles.css" />
            <link rel="stylesheet" href="assets/css/responsive.css" />

            {/* <!-- Colors --> */}
            <link rel="alternate stylesheet" href="assets/css/colors/blue.css" title="blue" />
            <link rel="stylesheet" href="assets/css/colors/defauld.css" title="defauld" />
            {/* <link rel="alternate stylesheet" href="assets/css/colors/green.css" title="green" />
            <link rel="alternate stylesheet" href="assets/css/colors/blue-munsell.css" title="blue-munsell" />
            <link rel="alternate stylesheet" href="assets/css/colors/orange.css" title="orange" />
            <link rel="alternate stylesheet" href="assets/css/colors/purple.css" title="purple" />
            <link rel="alternate stylesheet" href="assets/css/colors/slate.css" title="slate" />
            <link rel="alternate stylesheet" href="assets/css/colors/yellow.css" title="yellow" /> */}
            <link rel="alternate stylesheet" href="assets/css/colors/red.css" title="red" />
            {/* 
            <!--
            ==============
            * JS Files *
            ==============
    -->

            <!-- jQuery first, then Popper.js, then Bootstrap JS -->

            <!-- jQuery --> */}
            <script src="assets/plugins/js/jquery.min.js"></script>
            {/* <!-- popper --> */}
            <script src="assets/plugins/js/popper.min.js"></script>
            {/* <!-- bootstrap --> */}
            <script src="assets/plugins/js/bootstrap.min.js"></script>
            {/* <!-- owl carousel --> */}
            <script src="assets/plugins/js/owl.carousel.js"></script>
            {/* <!-- validator --> */}
            <script src="assets/plugins/js/validator.min.js"></script>
            {/* <!-- wow --> */}
            <script src="assets/plugins/js/wow.min.js"></script>
            {/* <!-- mixin js--> */}
            <script src="assets/plugins/js/jquery.mixitup.min.js"></script>
            {/* <!-- circle progress--> */}
            <script src="assets/plugins/js/circle-progress.js"></script>
            {/* <!-- jquery nav --> */}
            <script src="assets/plugins/js/jquery.nav.js"></script>
            {/* <!-- Fancybox js--> */}
            <script src="assets/plugins/js/jquery.fancybox.min.js"></script>
            {/* <!-- Map api --> */}
            <script
                src="http://maps.googleapis.com/maps/api/js?v=3.exp&amp;key=AIzaSyCRP2E3BhaVKYs7BvNytBNumU0MBmjhhxc"></script>
            {/* <!-- isotope js--> */}
            <script src="assets/plugins/js/isotope.pkgd.js"></script>
            <script src="assets/plugins/js/packery-mode.pkgd.js"></script>
            {/* <!-- Custom Scripts--> */}
            {/* <script src="assets/js/map-init.js"></script> */}
            <script src="/assets/js/custom-scripts.js"></script>


            {/* <!-- ****************
      After neccessary customization/modification, Please minify 
      JavaScript/jQuery according to http://browserdiet.com/en/ for better performance
    **************** -->
	<!-- STYLE SWITCH STYLESHEET ONLY FOR DEMO --> */}
            <link rel="stylesheet" href="demo/demo.css" />
            <script type="text/javascript" src="demo/styleswitcher.js"></script>
            <script type="text/javascript" src="demo/demo.js"></script>
            {/* {loadAnimations && */}
            <div className="section-loader">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>
            {/* } */}

            <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav" id="mh-header">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                            <button
                                className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto ml-auto">
                                    <li className="nav-item active">
                                        <Link
                                            // target="_new" 
                                            href="/"
                                            className="nav-link"
                                        >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            // target="_new" 
                                            href="/about"
                                            className="nav-link"
                                        >About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            // target="_new" 
                                            href="/skills"
                                            className="nav-link"
                                        >Skills</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/experience-education"
                                            className="nav-link"
                                        >Experience & Education</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/porftolio"
                                            className="nav-link"
                                        >Portfolio</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link
                                            href="/experience"
                                            className="nav-link"
                                        >Pricing</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link
                                            href="/blog"
                                            className="nav-link"
                                        >Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            href="/contact"
                                            className="nav-link"
                                        >Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </Head>
    </>
}