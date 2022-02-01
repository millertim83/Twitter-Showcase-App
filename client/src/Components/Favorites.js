import React, { useEffect, useState } from "react";
import "./Favorites.css";
import UserCard from "./UserCard";
import FavoritesModal from "./FavoritesModal";
import axios from "axios";

function Favorites() {    
    const [dalaiLamaInfo, setDalaiLamaInfo] = useState("");
    const [sadhGuruInfo, setSadhGuruInfo] = useState("");
    const [eckhartTolleInfo, setEckhartTolleInfo] = useState("");
    const [headspaceInfo, setHeadspaceInfo] = useState("");
    const [deepakChopraInfo, setDeepakChopraInfo] = useState("");
    const [tweetTimeline, setTweetTimeline] = useState("");
    const [show, setShow] = useState(false);
    let randomIndex = Math.floor(Math.random() * 10);
    let userIndex = tweetTimeline.length - 1;

    useEffect(() => {
        console.log(tweetTimeline)
    }, [tweetTimeline]);

    useEffect(() => {
        retrieveData()
    }, []);

    function retrieveData() {
        getDalaiInfo();
        getSadhInfo();
        getEckhartInfo();
        getheadspaceInfo();
        getdeepakInfo();
    }

    async function getDalaiInfo() {
        await axios.get("/api/dalaiInfo")
        .then(response => setDalaiLamaInfo(response.data));
    }

    async function getSadhInfo() {
        await axios.get("/api/sadhInfo")
        .then(response => setSadhGuruInfo(response.data));
    }

    async function getEckhartInfo() {
        await axios.get("/api/eckhartInfo")
        .then(response => setEckhartTolleInfo(response.data));
    }

    async function getheadspaceInfo() {
        await axios.get("/api/headspaceInfo")
        .then(response => setHeadspaceInfo(response.data));
    }

    async function getdeepakInfo() {
        await axios.get("/api/deepakInfo")
        .then(response => setDeepakChopraInfo(response.data));
    }

    async function getDalaiTweet() {
        await axios.get("/api/dalaiTweets")
        .then(response => setTweetTimeline (response.data));
    }

    async function getSadhTweet() {
        await axios.get("/api/sadhTweets")
        .then(response => setTweetTimeline(response.data));
    }

    async function getEckhartTweet() {
        await axios.get("/api/eckhartTweets")
        .then(response => setTweetTimeline(response.data));
    }

    async function getHeadspaceTweet() {
        await axios.get("/api/headspaceTweets")
        .then(response => setTweetTimeline(response.data));
    }

    async function getDeepakTweet() {
        await axios.get("/api/deepakTweets")
        .then(response => setTweetTimeline(response.data));
    }

    return (
        <div className="body">
            <div id="banner" className = "container-sm mx-auto">
                <h2 className = "pt-2">My Faves</h2>
                <h6 className = "pt-1">Click on a user to display a random tweet!</h6>
            </div>
            <div id="user-container" className="container-sm mt-3 border border-dark">
                <div className="user-card text-center"
                    onClick = {() => { setShow(true); getDalaiTweet() }}>
                    <UserCard userInfo={dalaiLamaInfo} />   
                </div>
                <div className="user-card text-center"
                    onClick = {() => {setShow(true); getSadhTweet() }}>
                    <UserCard userInfo={sadhGuruInfo} />
                </div> 
                <div className="user-card text-center"
                    onClick = {() => { setShow(true); getEckhartTweet() }}>
                    <UserCard userInfo={eckhartTolleInfo} />
                </div>
                <div className="user-card"
                    onClick = {() => { setShow(true), getHeadspaceTweet() }}>
                    <UserCard userInfo={headspaceInfo} />
                </div> 
                <div className="user-card"
                    onClick = {() => { setShow(true), getDeepakTweet() }}>
                    <UserCard userInfo={deepakChopraInfo} />
                </div>

            </div>

        </div>
             
        
    );
}

export default Favorites;
/*
<div className = "body">
            <div id="banner" className = "row">
                <h2 className = "pt-2">My Faves</h2>
                <h6 className = "pt-1">Click on a user to display a random tweet!</h6>
            </div>
            <div id="user-container" className="mx-auto">
                <div className="user-card text-center"
                    onClick = {() => { setShow(true); getDalaiTweet() }}>
                    <UserCard userInfo={dalaiLamaInfo} />   
                </div>
                <div className="user-card text-center"
                    onClick = {() => {setShow(true); getSadhTweet() }}>
                    <UserCard userInfo={sadhGuruInfo} />
                </div> 
                <div className="user-card text-center"
                    onClick = {() => { setShow(true); getEckhartTweet() }}>
                    <UserCard userInfo={eckhartTolleInfo} />
                </div>
                <div className="user-card"
                    onClick = {() => { setShow(true), getHeadspaceTweet() }}>
                    <UserCard userInfo={headspaceInfo} />
                </div> 
                <div className="user-card"
                    onClick = {() => { setShow(true), getDeepakTweet() }}>
                    <UserCard userInfo={deepakChopraInfo} />
                </div>
                
            </div>   
            <div id="modal" className="mt-0 ml-auto mr-auto">
                <FavoritesModal
                    randomIndex={randomIndex} 
                    onClose={() => setShow(false)}
                    onClose={() => setTweetTimeline("")} 
                    show={show} 
                    userIndex={userIndex}
                    tweetTimeline={tweetTimeline} />
            </div>  
        </div>

*/