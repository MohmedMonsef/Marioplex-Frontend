<template>
  <!--eslint-disable-->
    <div class="justify-content-center">
        <div class="front-search front-box">
            <div class="container justify-content-center">
                <div class="row">
                    <div
                        class="container text-center col-xs-12 col-md-8 col-md-offset-2"
                    >
                        <div class="head_cot">
                            <h1>
                                <font color="white">
                                    <strong>How can we help you?</strong>
                                </font>
                            </h1>
                        </div>
                        <div class="search-container">
                            <div class="search-box container row">
                                <div class="col-10">
                                    <input
                                        type="text"
                                        class="form-control col-10"
                                        id="search"
                                        placeholder="Search"
                                        autocomplete="off"
                                        v-model="search"
                                        v-on:input="check(search)"
                                    />
                                </div>
                                <div class="col-2">
                                    <button
                                        type="button"
                                        class="close col-2"
                                        aria-label="Close"
                                        v-if="
                                            search !== '' &&
                                                (contant1 ||
                                                    contant2 ||
                                                    contant3 ||
                                                    contant4 ||
                                                    contant5 ||
                                                    thereisnoresult)
                                        "
                                        @click="reset"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <i
                                        class="fa fa-search icon"
                                        style="margin-left:50%;"
                                        v-if="!apear"
                                    ></i>
                                    <i
                                        class="fa-li fa fa-spinner fa-spin col-2"
                                        v-if="
                                            apear &&
                                                !(
                                                    contant1 ||
                                                    contant2 ||
                                                    contant3 ||
                                                    contant4 ||
                                                    contant5
                                                ) &&
                                                !thereisnoresult
                                        "
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div class="results text-left">
                            <div
                                calss="row highlite"
                                id="highlite"
                                v-if="contant1 && search !== ''"
                            >
                                <div class="row">
                                    <div class="col-7 col-md-50%">
                                        <router-link
                                            tag="li"
                                            class="ard-link link col"
                                            id="insmall"
                                            to="/HelpFixed/HelpCantLogIn"
                                            testid="song"
                                            >Can't log in</router-link
                                        >
                                    </div>
                                    <div>
                                        <span
                                            class="col-5 col-md-50% white info"
                                            >Account &amp; Payment &gt; Account
                                            Help</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                calss="row highlite"
                                id="highlite"
                                v-if="contant2 && search !== ''"
                            >
                                <div class="row">
                                    <div class="col-7 col-md-50%">
                                        <router-link
                                            tag="li"
                                            class="ard-link link col"
                                            id="insmall"
                                            to="/HelpFixed/HelpRestPassword"
                                            testid="song"
                                            >Reset your password</router-link
                                        >
                                    </div>
                                    <div>
                                        <span
                                            class="col-5 col-md-50% white info"
                                            >Account &amp; Payment &gt; Account
                                            Help</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                calss="row highlite"
                                id="highlite"
                                v-if="contant3 && search !== ''"
                            >
                                <div class="row">
                                    <div class="col-7 col-md-50%">
                                        <router-link
                                            tag="li"
                                            class="ard-link link col"
                                            id="insmall"
                                            to="/HelpFixed/HelpFindingAccount"
                                            testid="song"
                                            >Finding accounts</router-link
                                        >
                                    </div>
                                    <div>
                                        <span
                                            class="col-5 col-md-50% white info"
                                            >Account &amp; Payment &gt; Account
                                            Help</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                calss="row highlite"
                                id="highlite"
                                v-if="contant4 && search !== ''"
                            >
                                <div class="row">
                                    <div class="col-7 col-md-50%">
                                        <router-link
                                            tag="li"
                                            class="ard-link link col"
                                            id="insmall"
                                            to="/HelpFixed/HelpMangePaymentDetail"
                                            testid="song"
                                            >Manage payment details</router-link
                                        >
                                    </div>
                                    <div>
                                        <span
                                            class="col-5 col-md-50% white info"
                                            >Account &amp; Payment &gt; Account
                                            Help</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                calss="row highlite"
                                id="highlite"
                                v-if="contant5 && search !== ''"
                            >
                                <div class="row">
                                    <div class="col-7 col-md-50%">
                                        <router-link
                                            tag="li"
                                            class="ard-link link col"
                                            id="insmall"
                                            class-active="active"
                                            to="/HelpFixed/HelpMadeForYou"
                                            testid="song"
                                            >Made for you</router-link
                                        >
                                    </div>
                                    <div>
                                        <span
                                            class="col-5 col-md-50% white info"
                                            style=" margin-top: 100px;"
                                            >Account &amp; Payment &gt; Account
                                            Help</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="search !== '' && thereisnoresult"
                                class="white noresult"
                            >
                                No results found. Please try another search.
                            </div>
                        </div>
                    </div>
                    <div class="top-solutions">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <h3
                                        class="hidden-xs hidden-sm pcolor bottom80"
                                    >
                                        Account Help
                                    </h3>
                                    <a
                                        href="/HelpFixed/HelpCantLogIn"
                                        class="fontsizelarge"
                                        >Can't log in</a
                                    >
                                </div>
                                <div class="col-md-3">
                                    <h3
                                        class="hidden-xs hidden-sm pcolor bottom80"
                                    >
                                        Account Help
                                    </h3>
                                    <a
                                        href="/HelpFixed/HelpRestPassword"
                                        class="fontsizelarge"
                                        >Reset your password</a
                                    >
                                </div>
                                <div class="col-md-3">
                                    <h3
                                        class="hidden-xs hidden-sm pcolor bottom80"
                                    >
                                        Account Help
                                    </h3>
                                    <a
                                        href="/HelpFixed/HelpFindingAccount"
                                        class="fontsizelarge"
                                        >Finding accounts</a
                                    >
                                </div>
                                <div class="col-md-3">
                                    <h3
                                        class="hidden-xs hidden-sm pcolor bottom80"
                                    >
                                        Payment Help
                                    </h3>
                                    <a
                                        href="/HelpFixed/HelpMangePaymentDetail"
                                        class="fontsizelarge"
                                        >Manage payment details</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="background">
            <div class="container">
                <a class="scroll-button pull-left" href="#community">
                 <i class="fa fa-angle-double-down weight "></i>
                </a>
                <div class="row justify-content-center">
                    <div class="col-xs-offset-1 col-xs-10">
                        <div class="row margins">
                            <div class="col-xs-3 col-lg-4">
                                <h3 class="front-navigation__header">
                                    Account&amp;Payment
                                </h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <a
                                            href="/HelpFixed/HelpAccountHelp"
                                            class="item__link"
                                            >Account Help</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Payment Help</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >SubscriptionOptions</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Premium Family</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Privacy &amp; Security</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-3 col-md-4">
                                <h3 class="front-navigation__header">
                                    Using Spotify
                                </h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="/" class="item__link"
                                            >Video Tutorials</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Getting Started</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Playlists</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Features</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >System&amp;Settings</a
                                        >
                                    </li>
                                    <li class="visible-xs" v-if="show1">
                                        <a href="/" class="item__link"
                                            >Troubleshooting</a
                                        >
                                    </li>
                                </ul>
                                <a
                                    class="show-all hidden-xs"
                                    v-if="!show1"
                                    @click="showmore1"
                                    >Show all</a
                                >
                            </div>
                            <div class="col-xs-3 col-lg-4">
                                <h3 class="front-navigation__header">
                                    Listen Everywhere
                                </h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="/" class="item__link"
                                            >Speakers</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link">TVs</a>
                                    </li>
                                    <li>
                                        <a href="/" class="item__link">Cars</a>
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Gaming</a
                                        >
                                    </li>
                                    <li>
                                        <a href="/" class="item__link"
                                            >Smart Watches</a
                                        >
                                    </li>
                                    <li class="visible-xs">
                                        <a
                                            href="/"
                                            class="item__link"
                                            v-if="show2"
                                            >Smart Displays</a
                                        >
                                    </li>
                                    <li class="visible-xs">
                                        <a
                                            href="/"
                                            class="item__link"
                                            v-if="show2"
                                            >Voice Assistants</a
                                        >
                                    </li>
                                </ul>
                                <a
                                    class="show-all hidden-xs"
                                    v-if="!show2"
                                    @click="showmore2"
                                    >Show all</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="front-box front-community" id="community">
            <div class="container justify-content-center">
                <a class="scroll-button pull-left" href="#how-to-use">
                <i class="fa fa-angle-double-down weight "></i>
                </a>

                <div class="row text-center">
                    <div class="row">
                        <div class="marigntop col-md-12">
                            <h1 style="font-size:50px;">Visit the Community</h1>
                        </div>
                        <div
                            class="col-xs-10 col-xs-offset-1 col-lg-12 marginbottom"
                        >
                            <p id="bigsize">
                                Have questions? Find answers from our worldwide
                                Community of expert fans!
                            </p>
                        </div>
                        <div class="col-xs-10 col-xs-offset-2 col-lg-12">
                            <p id="bigsize">
                                <span>1785</span>
                                members online right now.
                            </p>
                        </div>
                    </div>
                    <div class="container bottom50">
                        <a
                            href="https://community.spotify.com/t5/Spotify-Answers/tkb-p/Spotify-Answers?_ga=2.36098784.1952448288.1589335808-1465163653.1582551381"
                            target="_blank"
                            class="btn btn-primary bot"
                            >FIND ANSWERS</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="front-how-to-use front-box " id="how-to-use">
            <div class="container">
                <a class="scroll-button pull-left" href="#how-to-use-half">
                <i class="fa fa-angle-double-down weight "></i>
                </a>
                <div class="padding">
                    <h1 class="text-center" style="font-size:50px;">
                        How to use the features
                    </h1>
                </div>
                <div class="row container justify-content-center">
                    <div
                        class="col-sm-12 col-md-10 col-md-offset-1 features-container hidden-xs"
                    >
                        <div class="row">
                            <div class="col-sm-6 feature-container">
                                <h3 class="bottomborder">
                                    GET STARTED
                                </h3>
                            </div>
                            <div class="col-sm-6 feature-container">
                                <h3 class="bottomborder">
                                    AND CHECK THESE OUT
                                </h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 feature-container">
                                <div class="feature-box">
                                    <a href="/"></a>
                                    <h2>Search</h2>
                                    <p>
                                        Search a song, album, artist, label,
                                        genre, mood, activity, or friend on
                                        Spotify.
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                            <div class="col-sm-6 feature-container">
                                <div class="feature-box">
                                    <a href="/"></a>
                                    <h2>Radio</h2>
                                    <p>
                                        Tune into one of our many stations or
                                        create one based on your favorite
                                        artist, album, or song.
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 feature-container">
                                <div class="feature-box">
                                    <a href="/"></a>
                                    <h2>Playlists</h2>
                                    <p>
                                        Playlists are like mixtapes you create
                                        on Spotify. You can share them,
                                        subscribe to them, and collaborate on
                                        them with your friends.
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                            <div class="col-sm-6 feature-container">
                                <div class="feature-box">
                                    <a href="/"></a>
                                    <h2>Discover Weekly</h2>
                                    <p>
                                        Wonder how you'll find new music? Every
                                        week Spotify builds a playlist for you
                                        of tracks based on your taste but that
                                        you may have never heard before!
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div
                                class="col-sm-6 feature-container"
                                id="how-to-use-half"
                            >
                                <div class="feature-box">
                                    <a href="/"> </a>
                                    <h2>Listen Offline</h2>
                                    <p>
                                        Play music anywhere, even without
                                        internet! For Premium subscription only.
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                            <div class="col-sm-6 feature-container">
                                <div class="feature-box">
                                    <a href="/"></a>
                                    <h2>Spotify on Chromecast</h2>
                                    <p>
                                        Play Spotify on your other favorite
                                        service: Chromecast.
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="row bottom50">
                            <div class="col-sm-6 feature-container"></div>
                            <div class="col-sm-6 feature-container">
                                <div class="feature-box">
                                    <a href="/"></a>
                                    <h2>Share</h2>
                                    <p>
                                        Share music with friends and find out
                                        what they're listening to.
                                    </p>
                                    <a href="/" class="big-underline"
                                        >READ MORE</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a
            class="scroll-button pull-left"
            id="specialnavg"
            href="#using-spotify"
        >
        <i class="fa fa-angle-double-down weight "></i>
        </a>
        <div id="allcontent">
            <div class="front-box front-video" id="videos" v-if="!playingvideo">
                <div class="container container-carousel">
                    <div class="row">
                        <div
                            class="col-md-6 hidden-xs hidden-sm carousel-iphones"
                        >
                            <div class="iphone-device">
                                <div class="iphone-screen">
                                    <img
                                        src="https://support.scdn.co/static/img/videos/video-offline.jpg"
                                        class="slide img"
                                        v-if="video1"
                                    />
                                    <img
                                        src="https://support.scdn.co/static/img/videos/video-connect.jpg"
                                        class="slide img"
                                        v-if="video2"
                                    />
                                    <img
                                        src="https://support.scdn.co/static/img/videos/video-chromecast.jpg"
                                        class="slide img"
                                        v-if="video3"
                                    />
                                    <img
                                        src="https://support.scdn.co/static/img/videos/video-playlist.jpg"
                                        class="slide img"
                                        v-if="video4"
                                    />
                                    <img
                                        src="https://support.scdn.co/static/img/videos/video-search.jpg"
                                        class="slide img"
                                        v-if="video5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 video-info-container">
                            <div class="carousel slide">
                                <div class="carousel-inner" id="trans">
                                    <div class="video-info item" v-if="video1">
                                        <h1>Listen Offline</h1>
                                        <div class="row">
                                            <div
                                                class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0"
                                            >
                                                <p>
                                                    How to take your music with
                                                    you in the car, on the
                                                    plane, or wherever you may
                                                    not be able to access the
                                                    internet
                                                </p>
                                                <div id="videobuttom">
                                                    <div
                                                        class="btn"
                                                        id="btnstyle1"
                                                        @click="
                                                            playingvideo1 = true;
                                                            playingvideo = true;
                                                        "
                                                    >
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            viewBox="0 0 39 48"
                                                        >
                                                            <path
                                                                d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z"
                                                                fill="#000"
                                                                fill-rule="evenodd"
                                                            />
                                                        </svg>
                                                        Watch video
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-info item" v-if="video2">
                                        <h1>Spotify Connect</h1>
                                        <div class="row">
                                            <div
                                                class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0"
                                            >
                                                <p>
                                                    Play Spotify on your
                                                    speaker, sound system, or TV
                                                    with Spotify Connect. Here's
                                                    how!
                                                </p>
                                                <div
                                                    class="btn"
                                                    id="btnstyle2"
                                                    @click="
                                                        playingvideo2 = true;
                                                        playingvideo = true;
                                                    "
                                                >
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 39 48"
                                                    >
                                                        <path
                                                            d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z"
                                                            fill="#000"
                                                            fill-rule="evenodd"
                                                        />
                                                    </svg>
                                                    Watch video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-info item" v-if="video3">
                                        <h1>Spotify on Chromecast</h1>
                                        <div class="row">
                                            <div
                                                class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0"
                                            >
                                                <p>
                                                    Spotify on your Chromecast?
                                                    You heard us right! Here's
                                                    how to team them up!
                                                </p>
                                                <div
                                                    class="btn"
                                                    id="btnstyle3"
                                                    @click="
                                                        playingvideo3 = true;
                                                        playingvideo = true;
                                                    "
                                                >
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 39 48"
                                                    >
                                                        <path
                                                            d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z"
                                                            fill="#000"
                                                            fill-rule="evenodd"
                                                        />
                                                    </svg>
                                                    Watch video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="video-info item" v-if="video4">
                                        <h1>Make a Playlist</h1>
                                        <div class="row">
                                            <div
                                                class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0"
                                            >
                                                <p>
                                                    Playlists are your personal
                                                    mixtapes that you can share
                                                    or collaborate on with
                                                    friends. Here's how to get
                                                    started.
                                                </p>
                                                <div
                                                    class="btn"
                                                    id="btnstyle4"
                                                    @click="
                                                        playingvideo4 = true;
                                                        playingvideo = true;
                                                    "
                                                >
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 39 48"
                                                    >
                                                        <path
                                                            d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z"
                                                            fill="#000"
                                                            fill-rule="evenodd"
                                                        />
                                                    </svg>
                                                    Watch video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="video-info item active"
                                        v-if="video5"
                                    >
                                        <h1>Search</h1>
                                        <div class="row">
                                            <div
                                                class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0"
                                            >
                                                <p>
                                                    Search is the key to
                                                    Spotify's vast library of
                                                    music, whether you're
                                                    looking for a particular
                                                    artist, album, or song; or
                                                    if you want Spotify to find
                                                    music to match a mood,
                                                    activity, or time of day.
                                                </p>
                                                <div
                                                    class="btn"
                                                    id="btnstyle5"
                                                    @click="
                                                        playingvideo5 = true;
                                                        playingvideo = true;
                                                    "
                                                >
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        viewBox="0 0 39 48"
                                                    >
                                                        <path
                                                            d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z"
                                                            fill="#000"
                                                            fill-rule="evenodd"
                                                        />
                                                    </svg>
                                                    Watch video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div
                                        class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-12 col-md-offset-0"
                                    >
                                        <ol>
                                            <li
                                                class="inline"
                                                @click="showvideo1"
                                            ></li>
                                            <li
                                                class="inline"
                                                @click="showvideo2"
                                            ></li>
                                            <li
                                                class="inline"
                                                @click="showvideo3"
                                            ></li>
                                            <li
                                                class="inline"
                                                @click="showvideo4"
                                            ></li>
                                            <li
                                                class="inline"
                                                @click="showvideo5"
                                            ></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="video-contaner" v-if="playingvideo">
                <plyrVideo>
                    <div class="plyr__video-embed">
                        <iframe
                            v-if="playingvideo1"
                            src="https://player.vimeo.com/video/122512075"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                        ></iframe>
                        <iframe
                            v-if="playingvideo2"
                            src="https://player.vimeo.com/video/126925524"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                        ></iframe>
                        <iframe
                            v-if="playingvideo3"
                            src="https://player.vimeo.com/video/143256102"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                        ></iframe>
                        <iframe
                            v-if="playingvideo4"
                            src="https://player.vimeo.com/video/122512074"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                        ></iframe>
                        <iframe
                            v-if="playingvideo5"
                            src="https://player.vimeo.com/video/122512076"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                        ></iframe>
                    </div>
                </plyrVideo>
            </div>
        </div>
        <div class="front-box front-using-spotify" id="using-spotify">
            <div class="container">
                <a class="scroll-button pull-left" href="#using-spotify">
                   <i class="fa fa-angle-double-down weight " style="scroll-behavior: smooth; "></i>
                </a>

                <div class="text-center content">
                    <div class="row justify-content-center">
                        <h1 style="font-size:50px;">Still not on Spotify?</h1>
                    </div>
                    <div class="row justify-content-center" id="p-content">
                        <p>
                            Over 30 million tracks; thousands of curated
                            playlists; Discover Weekly; Spotify Running; Radio;
                            Chromecast, sound system, car, TV, and PlayStation
                            integration; sharing and creating playlists with
                            your friends... All of this is ready for you.
                        </p>
                    </div>
                    <div class="row justify-content-center">
                        <Button class="btn btn-primary bot">
                            <router-link to="/SignUp" id="botton-router"
                                >GET SPOTIFY</router-link
                            >
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
/**
 * Spotify help page
 * @displayName Spotify help Page
 * @example [none]
 */
import plyrVideo from "vue-plyr";
export default {
    name: "Help",
    components: { plyrVideo },
    data() {
        return {
            playingvideo: false,
            playingvideo1: false,
            playingvideo2: false,
            playingvideo3: false,
            playingvideo4: false,
            playingvideo5: false,
            search: "",
            apear: false,
            contant1: false,
            contant2: false,
            contant3: false,
            contant4: false,
            contant5: false,
            thereisnoresult: false,
            show1: false,
            show2: false,
            video1: true,
            video2: false,
            video3: false,
            video4: false,
            video5: false,
        };
    },
    methods: {
        /**
       * disable displaied vedio
       * @displayName displaied vedio
       * @public This is a public method
       */
        disable(event) {
            var Id = event.target.id;
            if (
                Id == "allcontent" ||
                Id == "how-to-use" ||
                Id == "community" ||
                Id == "using-spotify"
            ) {
                this.playingvideo = false;
                this.playingvideo1 = false;
                this.playingvideo2 = false;
                this.playingvideo3 = false;
                this.playingvideo4 = false;
                this.playingvideo5 = false;
            }
        },
     /**
       * Display video
       * @displayName Display the 1st vedio
       * @public This is a public method 
       */
        showvideo1() {
            this.video1 = true;
            this.video2 = false;
            this.video3 = false;
            this.video4 = false;
            this.video5 = false;
        },
      /**
       * Display video
       * @displayName Display the 2nd vedio
       * @public This is a public method 
       */
        showvideo2() {
            this.video1 = false;
            this.video2 = true;
            this.video3 = false;
            this.video4 = false;
            this.video5 = false;
        },
        /**
       * Display video
       * @displayName Display the 3rd vedio 
       * @public This is a public method
       */
        showvideo3() {
            this.video1 = false;
            this.video2 = false;
            this.video3 = true;
            this.video4 = false;
            this.video5 = false;
        },
     /**
       * Display video
       * @displayName Display the 4th vedio 
       * @public This is a public method
       */
        showvideo4() {
            this.video1 = false;
            this.video2 = false;
            this.video3 = false;
            this.video4 = true;
            this.video5 = false;
        },
     /**
       * triggers search request
       * @displayName Search
       * @public This is a public method
       */
        showvideo5() {
            this.video1 = false;
            this.video2 = false;
            this.video3 = false;
            this.video4 = false;
            this.video5 = true;
        },
     /**
       * triggers showmore on click
       * @displayName showmore2
       * @public This is a public method
       */
        showmore1() {
            this.show1 = true;
        },
     /**
       * triggers showmore on click
       * @displayName showmore2
       * @public This is a public method
       */
        showmore2() {
            this.show2 = true;
        },
      /**
       * Search In Help Page
       * @displayName Search In Help Page
       * @public This is a public method
       */
        check(search) {
            console.log(search);
            if (search == "") {
                this.apear = false;
            } else {
                this.apear = true;
                if (
                    search.includes("C") ||
                    search.includes("ca") ||
                    search.includes("can") ||
                    search.includes("can'") ||
                    search.includes("can't") ||
                    search.includes("lo") ||
                    search.includes("log") ||
                    search.includes("log in'")
                ) {
                    this.contant1 = true;
                } else {
                    this.contant1 = false;
                }
                if (
                    search.includes("R") ||
                    search.includes("re") ||
                    search.includes("res") ||
                    search.includes("et") ||
                    search.includes("yo") ||
                    search.includes("ur") ||
                    search.includes("pa") ||
                    search.includes("ss") ||
                    search.includes("wo") ||
                    search.includes("rd")
                ) {
                    this.contant2 = true;
                } else {
                    this.contant2 = false;
                }
                if (
                    search.includes("F") ||
                    search.includes("fi") ||
                    search.includes("nd") ||
                    search.includes("ing") ||
                    search.includes("ac") ||
                    search.includes("cc") ||
                    search.includes("ou") ||
                    search.includes("nt") ||
                    search.includes("ts")
                ) {
                    this.contant3 = true;
                } else {
                    this.contant3 = false;
                }
                if (
                    search.includes("M") ||
                    search.includes("ma") ||
                    search.includes("nge") ||
                    search.includes("ing") ||
                    search.includes("pay") ||
                    search.includes("ment") ||
                    search.includes("det") ||
                    search.includes("ta") ||
                    search.includes("ils")
                ) {
                    this.contant4 = true;
                } else {
                    this.contant4 = false;
                }
                if (
                    search.includes("M") ||
                    search.includes("ma") ||
                    search.includes("d") ||
                    search.includes("e") ||
                    search.includes("for") ||
                    search.includes("yo") ||
                    search.includes("you")
                ) {
                    this.contant5 = true;
                } else {
                    this.contant5 = false;
                }
                if (
                    !(
                        this.contant1 ||
                        this.contant2 ||
                        this.contant3 ||
                        this.contant4 ||
                        this.contant5
                    )
                ) {
                    this.thereisnoresult = true;
                } else {
                    this.thereisnoresult = false;
                }
            }
        },
        /**
       * triggers search request
       * @displayName Search
       * @public This is a public method
       */
        reset() {
            this.search = "";
            this.apear = false;
            this.contants = false;
        },
    },
    created: function() {
        window.addEventListener("click", this.disable);
    },
    destroyed: function() {
        window.removeEventListener("click", this.disable);
    },
};
</script>
<style scoped>
/* eslint-disable */
.btn:hover {
    background-color: black;
    color: white;
}
#btnstyle1,
#btnstyle2,
#btnstyle3,
#btnstyle4,
#btnstyle5 {
    width: 80%;
    border: solid 5px black;
    border-radius: 40px;
}
#specialnavg {
    margin-left: 190px;
}
#allcontent {
    padding-top: 80px;
}
#video-contaner {
    width: 70%;
    height: 100%;
    margin-left: 15%;
}
#trans {
    height: 400px;
}
.video-info {
    padding-top: 80px;
}
.inline:hover {
    width: 10px;
    height: 10px;
    background-clip: padding-box;
    background-color: #000;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px #000;
}
.inline {
    width: 10px;
    height: 10px;
    background-color: #d9dadc;
    box-sizing: content-box;
    margin: 9px;
    vertical-align: middle;
    border-radius: 5px;
    display: inline-block;
}
.btn {
    border-radius: 5px;
    border: blue;
}
.iphone-screen {
    padding-left: 10px;
    padding-top: 10px;
    margin-left: 90px;
}
.img {
    height: 500px;
    border-radius: 5px;
}
#headers {
    font-style: 50px;
}
#p-content {
    padding: 10px;
    font-size: 60px;
    margin-bottom: 30px;
    font-weight: 800;
    text-align: center;
    letter-spacing: 0.1em;
}
#botton-router {
    color: white;
}
.content {
    padding: 80px;
}
.front-using-spotify {
    background-color: #efefef;
}
.feature-box {
    padding-bottom: 80px;
}
.front-navigation__header {
    padding-top: 50px;
    padding-bottom: 50px;
}
.big-underline {
    text-decoration: underline;
    color: #fff;
    font-size: 15px;
    letter-spacing: 0.1em;
}
.show-all {
    color: #4053a8;
    cursor: pointer;
    font-size: 20px;
    text-decoration: underline;
}
.show-all:hover {
    color: #3b4988;
    text-decoration: underline;
}
.bottom80 {
    margin-bottom: 200px;
}
.container {
    margin-right: auto;
    margin-left: auto;
}
.padding {
    padding-top: 80px;
    padding-bottom: 50px;
}
.bottomborder {
    margin-top: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid white;
}
.marigntop {
    margin-top: 80px;
}
.margins {
    margin-top: 80px;
    margin-bottom: 80px;
    width: 100%;
}
.front-how-to-use {
    color: white;
    background-image: linear-gradient(90deg, #ed2931 0, #f95a3e);
    background-repeat: repeat-x;
}
.bottom50 {
    margin-bottom: 50px;
}
.bot {
    width: 20%;
    border-radius: 500px;
    background-color: rgb(29, 29, 138);
    padding: 10px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: large;
    letter-spacing: 0.01em;
    font-weight: 400;
}
.marginbottom {
    margin-bottom: 20px;
}
#bigsize {
    font-size: x-large;
}
.top-solutions {
    margin-top: 120px;
    margin-bottom: 0;
    width: 100%;
}
#scroll-down {
    font-size: 12px;
}
.pcolor {
    color: rgba(201, 199, 199, 0.719);
    font-size: large;
    margin-bottom: 5px;
}
.background {
    background-color: #efefef;
}
@media (max-width: 1000px) {
    .iphone-device {
        display: none;
    }
}
@media (min-width: 768px) {
    .front-navigation {
        background-color: #efefef;
        padding-bottom: 40px;
    }
    .front-search .top-solutions .container a {
        line-height: 20px;
        padding: 0;
        font-size: 18px;
        font-weight: 400;
    }
}
.scroll-button {
    scroll-behavior: smooth; 
    background-color: #fff;
    width: 52px;
    height: 52px;
    fill: #2d46b9;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 52px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.13);
    padding: 10px 10px;
    position: relative;
    text-align: center;
    z-index: 2;
}
:not(svg) {
    transform-origin: 0px 0px;
}
.front-search a {
    line-height: 1.5;
    display: block;
    margin-bottom: 15px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
}
a {
    font-weight: 700;
}
a,
a:focus,
a:hover {
    text-decoration: none;
}

@media (min-width: 992px) {
    .front-search .top-solutions {
        text-align: center;
    }
}
.info {
    margin-top: 1%;
    font-size: 14px;
    font-weight: 500;
}
@media (max-width: 1250px) {
    #insmall {
        font-size: large;
    }
    .info {
        display: none;
    }
    .pcolor {
        display: none;
    }
    .bottomborder {
        display: none;
    }
    .bot {
        width: 50%;
    }
}
#highlite:hover {
    background-color: rgba(241, 226, 226, 0.473);
    border-radius: 10px;
}
.noresult {
    margin-top: 5px;
    padding: 5px;
    font-size: large;
    background-color: rgba(241, 226, 226, 0.473);
    border-radius: 10px;
}
.white {
    color: white;
}
li {
    list-style-type: none;
    cursor: pointer;
}
.head_cot {
    margin-top: 100px;
    margin-bottom: 75px;
    font-size: 60px;
    line-height: 80px;
    letter-spacing: 0.03em;
    padding: 0;
}
.link {
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
    float: left;
}

* {
    box-sizing: border-box;
}
*:focus {
    outline: none;
}
#search {
    width: 80%;
    height: 100%;
    cursor: text;
    font-family: sans-serif;
    font-size: x-large;
    color: black;
    font-weight: 500;
    background-color: transparent;
}
.front-search {
    width: 100%;
    height: auto;
    padding: 80px;
    background-image: linear-gradient(#2b39b4, #130435);
    background-size: 100% 100%;
}
.row {
    margin-left: 8px;
    margin-right: 8px;
}
.item__link {
    font-size: x-large;
    margin-top: 30px;
}
.front-search .search-container .search-box {
    position: relative;
    border-radius: 8px;
    border-width: 0;
    background-color: hsla(0, 0%, 100%, 0.8);
    padding: 5px;
    margin-bottom: 25px;
    font-weight: bold;
}
input {
    background-color: #00000000;
    border: 0;
    color: black;
    font-weight: bold;
    height: 100%;
    width: 100%;
}
h1 {
    display: block;
    font-weight: 700;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 250px;
    line-height: 80px;
}
.close {
    font-size: 30px;
}
@media (min-width: 768px) {
    .front-box h1 {
        font-size: 60px;
        line-height: 58px;
        letter-spacing: -0.03em;
        padding: 0;
    }
}
.front-box h1 {
    font-weight: 700;
    font-size: 37px;
    margin: 16px 0 30px;
    line-height: 39px;
    letter-spacing: -0.04em;
    padding: 0 20px;
    font-family: inherit;
}
.icon {
    margin-top: 10px;
    font-size: 20px;
}
.text-center {
    text-align: center;
}
* {
    margin: 0px;
    padding: 0px;
}
body {
    font-family: Circular, Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.5;
    color: #222326;
}
.weight{
font-size: 36px;
}
</style>
