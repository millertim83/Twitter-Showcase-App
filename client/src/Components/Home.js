import React from "react";
import "./Home.css";
import frustrated from "../images/frustrated.jpg";

function Home() {
    return(
        <div className = "Home">
            <div className = "body">
                <div id = "header" className="mb-3 text-center">
                    <div>
                        <h1>Serenity Now</h1>
                        <h4>A Twitter Portal</h4>
                    </div>
                </div>
                <div className="container-sm mt-4">
                    <div className="container">
                        <div>
                            <img id="frustrated w-25"
                                className="rounded-circle"
                                src={frustrated}
                                alt="Frustrated guy">
                            </img>
                        </div>
                        <div className="pt-3 flex-wrap">
                            <p id="intro" className="mt-3 pt-3">If you feel like this guy, head to the Favorites page to see some Tweets that may add some calm 
                                to your life. Otherwise, go to the Search page to look up your favorite users or topics.</p>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;