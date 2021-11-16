import React from "react";
import "./Favorites.css";

function Favorites() {
    return (
        <div className = "body">
            <div className = "row h-100">
                <div className =  "col-4">
                    <h3 className = "pt-5">My Faves</h3>
                    <h6 className = "pt-3 pl-3">Click on a user to display a random tweet!</h6>
                    
                    <div className = "container faves rounded-2 border border-light ml-2 mr-2">
                        <div className = "row">
                            <div className = "col-4 img-container">
                                <div className = "container dalailamabackground border rounded-2 border-light">
                                </div>
                            </div>
                            <div className = "col-7">
                                <h6>Dalai Lama</h6>
                                <p className = "twittername">@DalaiLama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                 
        </div>
             
        
    );
}

export default Favorites;



/*

{
    "data": [
        {
            "id": "1459091418526273536",
            "text": "Materialistic values cannot give us peace of mind. So we really need to focus on our inner values, our true humanity. Only this way can we have peace of mind—and more peace in our world."
        },
        {
            "id": "1458004172565991426",
            "text": "Please don’t think that compassion, love and tolerance only belong to religion. They belong to human life. From compassion we develop self-confidence; that brings inner strength, allowing us to act with transparency and candour."
        },
        {
            "id": "1456554447501357062",
            "text": "In order to develop our mind, we must look at a deeper level. Everyone seeks happiness, joyfulness, but from outside—from money, from power, from big car, from big house. Most people never pay much attention to the ultimate source of a happy life, which is inside, not outside."
        },
        {
            "id": "1454622894487523334",
            "text": "His Holiness the Dalai Lama's message to COP26. https://t.co/sRYFUbH2Jr"
        },
        {
            "id": "1454017670748139522",
            "text": "On the occasion of the United Nations Climate Change Conference (COP26) HHDL speaks on the need to tackle climate change as the future of our planet is in our hands. https://t.co/AgEYAEpjJl"
        },
        {
            "id": "1452568034485301248",
            "text": "These days it’s realistic to work for co-existence on global level. It’s no longer appropriate to thinking only of ‘my country’. We must educate the young in the ways to achieve genuine world peace, taking the entire world, the whole of humanity, into account on a global level."
        },
        {
            "id": "1451481635170373634",
            "text": "Everyone wants to live in a peaceful world, but it’s necessary to understand that what destroys peace is anger and hatred. This is why the long term goal is to create inner peace within individuals, so contributing to a more compassionate humanity."
        },
        {
            "id": "1450129558686945280",
            "text": "Compassion in Action - HHDL's message to the 8th Parliament of the World's Religions held virtually on October 17-18, 2021. https://t.co/JAc3iJPGyl"
        },
        {
            "id": "1448944287484309504",
            "text": "What’s past is past, nothing can change that. But the future can be different if we choose to make it so. We have to cultivate a vision of a happier, more peaceful future and make the effort now to bring it about. This is no time for complacency, hope lies in the action we take."
        },
        {
            "id": "1448219596268322825",
            "text": "I don’t like formality. There’s no formality when we’re born and none when we die. In between we should treat each other as brothers and sisters because we all want to live a happy life. This is our common purpose and our right."
        }
    ],
    "meta": {
        "oldest_id": "1448219596268322825",
        "newest_id": "1459091418526273536",
        "result_count": 10,
        "next_token": "7140dibdnow9c7btw3z2gqx0x6uqa9segsxqb4kgqej3p"
    }
}

*/