import React from "react";
import "./Home.css";
import frustrated from "../images/angry.png";

function Home() {
    return(
        <div className = "Home">
            <div className = "body mb-3">
                <div className="container">
                <h1>Serenity Now</h1>
                <h4>A Twitter Portal</h4>
            </div>
                
                <div className="container-sm mt-4">
                    <div className="row">
                        <div className="col-4">
                            <img id="frustrated"
                                className="rounded-circle responsive-img"
                                src={frustrated}
                                alt="Frustrated guy">
                            </img>
                        </div>
                        <div className="col-6">
                            <p>If you feel like this guy, head to the Favorites page to see some Tweets that may add some calm 
                                to your life. Otherwise, go to the Search page to look up your favorite users or topics.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;