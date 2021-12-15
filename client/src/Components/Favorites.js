import React, { useEffect, useState } from "react";
import "./Favorites.css";
import UserCard from "./UserCard";
import FavoritesModal from "./FavoritesModal";



function Favorites() {
    //Temporary hardcoded data to be removed later
    
    let dalaiInfo = {
        "data": {
            "verified": true,
            "location": "Dharamsala, India",
            "public_metrics": {
                "followers_count": 19222760,
                "following_count": 0,
                "tweet_count": 1744,
                "listed_count": 73647
            },
            "profile_image_url": "https://pbs.twimg.com/profile_images/529214699041067008/fqPBAr5s_normal.jpeg",
            "name": "Dalai Lama",
            "created_at": "2009-02-11T18:34:22.000Z",
            "id": "20609518",
            "description": "Welcome to the official twitter page of the Office of His Holiness the 14th Dalai Lama.",
            "username": "DalaiLama"
        }
    };

    let sadhInfo = {
        "data": {
            "created_at": "2009-08-21T13:49:35.000Z",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1132191777195085824/KbxIQUxJ_normal.png",
            "username": "SadhguruJV",
            "description": "A Yogi, Mystic & Visionary. This account is managed by volunteers @Ishafoundation. Tweets from Sadhguru himself are signed - Sg",
            "id": "67611162",
            "name": "Sadhguru",
            "public_metrics": {
                "followers_count": 3762975,
                "following_count": 3,
                "tweet_count": 11507,
                "listed_count": 1760
            },
            "location": "India"
        }
    };

    let eckhartInfo = {
        "data": {
            "created_at": "2008-04-29T22:27:32.000Z",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1308563975119032321/rpNxathB_normal.png",
            "username": "EckhartTolle",
            "description": "",
            "id": "14592008",
            "name": "Eckhart Tolle",
            "public_metrics": {
                "followers_count": 719894,
                "following_count": 13,
                "tweet_count": 2071,
                "listed_count": 7786
            }
        }
    };

    let head_spaceInfo = {
        "data": {
            "name": "Headspace",
            "public_metrics": {
                "followers_count": 271624,
                "following_count": 1603,
                "tweet_count": 52056,
                "listed_count": 2220
            },
            "description": "Your guide to health and happiness. \nLearn to meditate and live mindfully.\nNeed help? Send us a message @HeadspaceHelp\nhttps://t.co/xPRbzJPs4A",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1157021554280058880/yWiCuBSR_normal.jpg",
            "username": "Headspace",
            "location": "Los Angeles | London",
            "created_at": "2011-10-31T12:52:24.000Z",
            "id": "402025521"
        }
    };

    let deepakInfo = {
        "data": {
            "description": "Founder of @chopraglobal @ChopraFNDN #Metahuman #DailyBreath #digitaldeepak #Neveralone Get your copy of #TotalMeditation through my website👇",
            "username": "DeepakChopra",
            "location": "Global",
            "name": "Deepak Chopra",
            "public_metrics": {
                "followers_count": 3206078,
                "following_count": 790,
                "tweet_count": 81619,
                "listed_count": 26433
            },
            "created_at": "2008-07-24T20:41:29.000Z",
            "id": "15588657",
            "verified": true,
            "profile_image_url": "https://pbs.twimg.com/profile_images/1244678658951909381/TabEMtZk_normal.jpg"
        }
    };


    const dalaiTimeline = 
    {
        "data": [
            {
                "public_metrics": {
                    "retweet_count": 4285,
                    "reply_count": 286,
                    "like_count": 17615,
                    "quote_count": 205
                },
                "id": "1470325310532976643",
                "text": "If the education system fostered inner peace, compassion and non-violence, or the idea of doing no harm, students would learn how to achieve peace of mind. This is what is required if we are to fulfil the goal of a genuinely peaceful and demilitarized world.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4764,
                    "reply_count": 400,
                    "like_count": 21005,
                    "quote_count": 262
                },
                "id": "1469237993424965632",
                "text": "If we focus too much on ourselves, we’ll not be happy, whereas to concern ourselves with the well-being of others is the gateway to great joy. If we’re really serious about happiness, we need to open our hearts and focus on others as well as ourselves.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 5389,
                    "reply_count": 271,
                    "like_count": 20129,
                    "quote_count": 271
                },
                "id": "1467788417337475080",
                "text": "Cultivating compassion is not a religious practice focused on ensuring we go to heaven or a good future life. It’s about living a good day-to-day life here and now. It’s about being a happy person. Warm-heartedness is a fundamental good human quality.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4616,
                    "reply_count": 352,
                    "like_count": 20780,
                    "quote_count": 251
                },
                "id": "1466702162805673990",
                "text": "Someone may be very rich and powerful but without any trusted friends they will never be happy. Someone else may be poor but if they are surrounded by trusting friends they’ll be happy. Therefore, taking care of others is the best way to fulfil our own interests.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 3481,
                    "reply_count": 258,
                    "like_count": 15351,
                    "quote_count": 165
                },
                "id": "1465251863243091970",
                "text": "One of my commitments is to promote human values based on common sense and scientific findings. What we need is more self-confidence, which comes from concern for others' well-being. The real source of inner strength and self-confidence is warm-heartedness.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 6382,
                    "reply_count": 333,
                    "like_count": 24269,
                    "quote_count": 280
                },
                "id": "1464164704184463368",
                "text": "We’re social creatures, we depend on each other, which is why we need a sense of concern for others’ well-being. Compassion is what’s important and you don’t have to be religious to practise it. Practising compassion here and now—living a meaningful life—is what is most important",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4308,
                    "reply_count": 322,
                    "like_count": 18397,
                    "quote_count": 188
                },
                "id": "1462715703799156737",
                "text": "If we make consistent effort, based on proper education, we can change the world. We are selfish, that’s natural, but we need to be wisely selfish, not foolishly selfish. We have to concern ourselves more with others’ well-being, that’s the way to be wisely selfish.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 5544,
                    "reply_count": 315,
                    "like_count": 21923,
                    "quote_count": 302
                },
                "id": "1461627868279017472",
                "text": "The only thing that will bring happiness is affection and warmheartedness. When you have a more compassionate mind and cultivate warmheartedness, the whole atmosphere around you becomes more positive and friendlier. You see friends everywhere.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 4690,
                    "reply_count": 343,
                    "like_count": 19821,
                    "quote_count": 244
                },
                "id": "1460178300274282498",
                "text": "Anger and aggression sometimes seem to be protective because they bring energy to bear on a particular situation, but what needs to be acknowledged is that that energy is blind. It takes a calm mind to be able to consider things from different angles and points of view.",
                "author_id": "20609518"
            },
            {
                "public_metrics": {
                    "retweet_count": 5130,
                    "reply_count": 315,
                    "like_count": 21892,
                    "quote_count": 238
                },
                "id": "1459091418526273536",
                "text": "Materialistic values cannot give us peace of mind. So we really need to focus on our inner values, our true humanity. Only this way can we have peace of mind—and more peace in our world.",
                "author_id": "20609518"
            }
        ],
        "includes": {
            "users": [
                {
                    "id": "20609518",
                    "name": "Dalai Lama",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/529214699041067008/fqPBAr5s_normal.jpeg",
                    "verified": true,
                    "public_metrics": {
                        "followers_count": 19230385,
                        "following_count": 0,
                        "tweet_count": 1748,
                        "listed_count": 73606
                    },
                    "username": "DalaiLama"
                }
            ]
        },
        "meta": {
            "oldest_id": "1459091418526273536",
            "newest_id": "1470325310532976643",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z2vyn3qtc4kccemzyfl7gcg808m"
        }
    }

    const sadhTimeline =
    {
        "data": [
            {
                "attachments": {
                    "media_keys": [
                        "3_1465202480782852100"
                    ]
                },
                "text": "To go through life effortlessly, children need an atmosphere that nurtures inner strength. #SadhguruQuotes https://t.co/Nwtvzeew04",
                "author_id": "67611162",
                "id": "1470947972695298052",
                "public_metrics": {
                    "retweet_count": 1249,
                    "reply_count": 144,
                    "like_count": 7006,
                    "quote_count": 135
                }
            },
            {
                "text": "The revival of #Kashi is an invitation to the World to embrace the non-divisive, all-inclusiveness of Kashi; a space that offers every human being an opportunity to transcend their limitations &amp; explore the immense possibilities of Being Human. With gratitude.–Sg\n#KashiVishwanath",
                "author_id": "67611162",
                "id": "1470782658938650628",
                "public_metrics": {
                    "retweet_count": 923,
                    "reply_count": 56,
                    "like_count": 2865,
                    "quote_count": 56
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "13_1470779616780595212"
                    ]
                },
                "text": "The revival of Kashi is important not just for India but for the World; for, Kashi is the most ancient living city on the planet. A doorway that has enabled thousands of seekers, to find expression to human longing. My gratitude to all who made it happen. –Sg\n#KashiVishwanathDham https://t.co/n2KSt63x5Y",
                "author_id": "67611162",
                "id": "1470781750666305543",
                "public_metrics": {
                    "retweet_count": 3757,
                    "reply_count": 238,
                    "like_count": 13435,
                    "quote_count": 212
                }
            },
            {
                "text": "#காவேரிகூக்குரல் இயக்கம்\n#பசுமைதமிழ்நாடு திட்டத்திற்கு  தனது மனமார்ந்த ஆதரவை தெரிவித்து கொள்கிறது. இத்திட்டம் மண் வளத்தை மீட்டெடுப்பதற்கும், மாநிலத்தில் செழிப்பையும், நல்வாழ்வையும் அதிகரிப்பதற்கும் மிகவும் அவசியம். #தமிழ்நாடு அரசுக்கு பாராட்டுக்கள் -Sg\n @mkstalin @supriyasahuias https://t.co/SzQawY3v73",
                "author_id": "67611162",
                "id": "1470626227136331779",
                "public_metrics": {
                    "retweet_count": 400,
                    "reply_count": 30,
                    "like_count": 746,
                    "quote_count": 8
                }
            },
            {
                "text": "Congratulations and Blessings to you #HarnaazSandhu.  Beautiful Bharat. -Sg https://t.co/prpk87FFXo",
                "author_id": "67611162",
                "id": "1470623052769595397",
                "public_metrics": {
                    "retweet_count": 734,
                    "reply_count": 81,
                    "like_count": 3641,
                    "quote_count": 23
                }
            },
            {
                "text": "#CauveryCalling extends its wholehearted support to the #GreenTNMission, a much needed initiative that will revive Soil health &amp; bring prosperity &amp; wellbeing to the State. Congratulations to Govt. of TN.–Sg @mkstalin @CMOTamilnadu @supriyasahuias https://t.co/SoA2PcFwmv",
                "author_id": "67611162",
                "id": "1470593234476826629",
                "public_metrics": {
                    "retweet_count": 939,
                    "reply_count": 76,
                    "like_count": 1740,
                    "quote_count": 80
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1465202319432192002"
                    ]
                },
                "text": "Lethargy comes from overconsumption of either food or thought. #SadhguruQuotes https://t.co/bxaRr9vxWT",
                "author_id": "67611162",
                "id": "1470585585022734340",
                "public_metrics": {
                    "retweet_count": 1756,
                    "reply_count": 140,
                    "like_count": 7970,
                    "quote_count": 153
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1465202158119186435"
                    ]
                },
                "text": "Your life and how you experience it is entirely your making. Only if this absolutely sinks in, will you become a genuine seeker. #SadhguruQuotes https://t.co/a5JBUhrwxt",
                "author_id": "67611162",
                "id": "1470223196809011208",
                "public_metrics": {
                    "retweet_count": 1506,
                    "reply_count": 142,
                    "like_count": 6452,
                    "quote_count": 142
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1465201946344583170"
                    ]
                },
                "text": "People who logically examine their relationships cannot sustain them. Two bodies, two minds, two emotions can never fit perfectly. Magic of being together can never be contained in logic. #SadhguruQuotes https://t.co/J3RmswVWKF",
                "author_id": "67611162",
                "id": "1469860809278988289",
                "public_metrics": {
                    "retweet_count": 2048,
                    "reply_count": 162,
                    "like_count": 8860,
                    "quote_count": 182
                }
            },
            {
                "text": "Reading your book, it unfolds the humanness of Tyson, the phenomenon called Muhammad Ali, super athlete Tom Brady &amp; the very epitome of greatness, Mandela; both moving &amp; inspiring. Thanks for bringing out aspects of their lives not seen on television. -Sg https://t.co/P3MkcObqTS https://t.co/HaCsPTzkdN",
                "author_id": "67611162",
                "id": "1469725967664881665",
                "public_metrics": {
                    "retweet_count": 942,
                    "reply_count": 69,
                    "like_count": 2429,
                    "quote_count": 71
                }
            }
        ],
        "includes": {
            "users": [
                {
                    "username": "SadhguruJV",
                    "public_metrics": {
                        "followers_count": 3770174,
                        "following_count": 3,
                        "tweet_count": 11540,
                        "listed_count": 1764
                    },
                    "id": "67611162",
                    "verified": true,
                    "name": "Sadhguru",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1132191777195085824/KbxIQUxJ_normal.png"
                }
            ]
        },
        "meta": {
            "oldest_id": "1469725967664881665",
            "newest_id": "1470947972695298052",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3b4b4w9gk0sk77j05osmk8jnlh"
        }
    }

    const eckhartTimeline = 
    {
        "data": [
            {
                "id": "1470876421941776391",
                "public_metrics": {
                    "retweet_count": 36,
                    "reply_count": 5,
                    "like_count": 145,
                    "quote_count": 3
                },
                "text": "Eckhart emphasizes the importance of being disciplined with our use of devices because they are an extension of the human mind and are highly addictive. He suggests noticing if you are addicted to your device; and if you are, bring awareness to it. https://t.co/aMLn0SBkof",
                "author_id": "14592008"
            },
            {
                "id": "1470804779236483072",
                "attachments": {
                    "media_keys": [
                        "13_1470410992240709644"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 134,
                    "reply_count": 10,
                    "like_count": 552,
                    "quote_count": 6
                },
                "text": "\"Wherever you are, be there totally. If you find your here and now intolerable and it makes you unhappy, you have three options: remove yourself from the situation, change it, or accept it totally.\" - Eckhart Tolle https://t.co/pL7dFGKFAq",
                "author_id": "14592008"
            },
            {
                "id": "1470433338221543425",
                "public_metrics": {
                    "retweet_count": 30,
                    "reply_count": 5,
                    "like_count": 177,
                    "quote_count": 1
                },
                "text": "According to Eckhart, most businesses operate under stresses that create a toxic work environment. What he suggests instead is to set goals, then be as joyful as possible in the present moment. https://t.co/y2kezQWR6Z",
                "author_id": "14592008"
            },
            {
                "id": "1469416639997353987",
                "public_metrics": {
                    "retweet_count": 20,
                    "reply_count": 5,
                    "like_count": 96,
                    "quote_count": 2
                },
                "text": "An empowering talk on balanced attention to both the actions we take and awareness itself as the pathway to becoming what Eckhart Tolle calls “a full human being.” https://t.co/7mvcnI52fb",
                "author_id": "14592008"
            },
            {
                "id": "1469328586662371337",
                "attachments": {
                    "media_keys": [
                        "7_1469327316748836867"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 23,
                    "reply_count": 5,
                    "like_count": 115,
                    "quote_count": 0
                },
                "text": "We're excited to announce that Eckhart Tolle's album Fear of Failure is now streaming on Spotify! Click here to listen now: https://t.co/wri8W92Lbv https://t.co/rJTds74O5I",
                "author_id": "14592008"
            },
            {
                "id": "1469136033270800384",
                "attachments": {
                    "media_keys": [
                        "13_1467877866784231429"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 105,
                    "reply_count": 5,
                    "like_count": 429,
                    "quote_count": 3
                },
                "text": "“Give your fullest attention to whatever the moment presents.” - Eckhart Tolle https://t.co/97abmH84FG",
                "author_id": "14592008"
            },
            {
                "id": "1469008958920790022",
                "public_metrics": {
                    "retweet_count": 37,
                    "reply_count": 4,
                    "like_count": 166,
                    "quote_count": 4
                },
                "text": "Eckhart recommends practicing Presence in small moments throughout the day. He suggests a few simple practices, including starting meetings with 30 seconds of stillness and cultivating awareness of background alertness during conversations. https://t.co/T1cz4E4blF",
                "author_id": "14592008"
            },
            {
                "id": "1468732307582459912",
                "public_metrics": {
                    "retweet_count": 21,
                    "reply_count": 3,
                    "like_count": 86,
                    "quote_count": 1
                },
                "text": "Omega Retreat Part Four: A guided meditation to help you relinquish any and all activity—either external or internal—in order to realize “the Being state,” or your essential self. https://t.co/Z1A7RDnlp8",
                "author_id": "14592008"
            },
            {
                "id": "1468615100756070404",
                "attachments": {
                    "media_keys": [
                        "13_1467877826917715968"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 91,
                    "reply_count": 3,
                    "like_count": 406,
                    "quote_count": 3
                },
                "text": "\"Break the old pattern of present moment denial and present moment resistance. Make it your practice to withdraw attention from past and future whenever they are not needed.\" - Eckhart Tolle https://t.co/omgEqhWe5L",
                "author_id": "14592008"
            },
            {
                "id": "1468362184929341443",
                "attachments": {
                    "media_keys": [
                        "3_1467877853169471488"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 136,
                    "reply_count": 8,
                    "like_count": 656,
                    "quote_count": 7
                },
                "text": "“True listening is another way of bringing stillness into the relationship. When you truly listen to someone, the dimension of stillness arises and becomes an essential part of the relationship.\" - Eckhart Tolle https://t.co/Qz4wYt7ygn",
                "author_id": "14592008"
            }
        ],
        "includes": {
            "users": [
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1308563975119032321/rpNxathB_normal.png",
                    "public_metrics": {
                        "followers_count": 721260,
                        "following_count": 13,
                        "tweet_count": 2088,
                        "listed_count": 0
                    },
                    "username": "EckhartTolle",
                    "id": "14592008",
                    "name": "Eckhart Tolle",
                    "verified": true
                }
            ]
        },
        "meta": {
            "oldest_id": "1468362184929341443",
            "newest_id": "1470876421941776391",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3b257r9uckh9r2mkvwwc7u056b"
        }
    }

    const headspaceTimeline =
    {
        "data": [
            {
                "author_id": "402025521",
                "text": "Having trouble logging or creating an account? You're not alone. We are currently experiencing an outage with one of our 3rd party providers. We thank you for your patience and hope to be up and running again soon. 🧡",
                "id": "1471151077055623169",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 2,
                    "like_count": 24,
                    "quote_count": 0
                }
            },
            {
                "author_id": "402025521",
                "text": "In stillness,\nis wisdom,\nis contentment,\nis calm.",
                "id": "1471147036317728774",
                "public_metrics": {
                    "retweet_count": 30,
                    "reply_count": 1,
                    "like_count": 138,
                    "quote_count": 1
                }
            },
            {
                "author_id": "402025521",
                "text": "@Brobi_1Kenobi Thanks so much for your feedback! We'll be sure to share it with our product team! :)",
                "id": "1470897033863176200",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                }
            },
            {
                "author_id": "402025521",
                "text": "Deep Inhale ...........\nDeep exhale ..........\n❤️ this tweet if you actually did it.",
                "id": "1470826423464124416",
                "public_metrics": {
                    "retweet_count": 176,
                    "reply_count": 24,
                    "like_count": 1773,
                    "quote_count": 8
                }
            },
            {
                "author_id": "402025521",
                "text": "Stop labeling your thoughts as naughty or nice. They're just that: thoughts.",
                "id": "1470780119858008078",
                "public_metrics": {
                    "retweet_count": 111,
                    "reply_count": 6,
                    "like_count": 620,
                    "quote_count": 5
                }
            },
            {
                "author_id": "402025521",
                "text": "@damonpayne We're sorry to hear about your run streak resetting. Our team can help get the stat updated if you'd like. You can send us a note at help@headspace.com or DM for assistance whatever works for you.",
                "id": "1470484829795926021",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 1,
                    "like_count": 0,
                    "quote_count": 0
                }
            },
            {
                "author_id": "402025521",
                "text": "Reasons to be grateful can be found in every moment.",
                "id": "1470456488833564673",
                "public_metrics": {
                    "retweet_count": 297,
                    "reply_count": 14,
                    "like_count": 1029,
                    "quote_count": 11
                }
            },
            {
                "author_id": "402025521",
                "text": "If holiday spending is stressing you out, try suggesting an activity with friends or loved ones in place of that gift exchange. (Reminder: it's ok to politely decline too.)",
                "id": "1470423775036559364",
                "public_metrics": {
                    "retweet_count": 24,
                    "reply_count": 1,
                    "like_count": 182,
                    "quote_count": 1
                }
            },
            {
                "author_id": "402025521",
                "text": "@xkateruns Oh no! So sorry for the trouble with trying to complete the survey. We will look into this. We appreciate you reaching out and letting us know.",
                "id": "1470395642468085767",
                "public_metrics": {
                    "retweet_count": 1,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                }
            },
            {
                "author_id": "402025521",
                "text": "@emzzz_paynee Hi Emily! Please send us a DM and we would be happy to explain further.",
                "id": "1470187758618566668",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                }
            }
        ],
        "includes": {
            "users": [
                {
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1157021554280058880/yWiCuBSR_normal.jpg",
                    "name": "Headspace",
                    "id": "402025521",
                    "verified": true,
                    "username": "Headspace",
                    "public_metrics": {
                        "followers_count": 273190,
                        "following_count": 1600,
                        "tweet_count": 52121,
                        "listed_count": 2224
                    }
                }
            ]
        },
        "meta": {
            "oldest_id": "1470187758618566668",
            "newest_id": "1471151077055623169",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3pqoqzvpzx6jyt9odsj1wji6uw"
        }
    }

    const deepakTimeline =
    {
        "data": [
            {
                "attachments": {
                    "media_keys": [
                        "3_1470733090502938636"
                    ]
                },
                "text": "💞 What does true #success mean to you?\n\nYou may find more daily inspiration on @ChopraGlobal. https://t.co/nIq53JrCj2",
                "author_id": "15588657",
                "id": "1470815854208053250",
                "public_metrics": {
                    "retweet_count": 18,
                    "reply_count": 1,
                    "like_count": 103,
                    "quote_count": 1
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1470792839470714881"
                    ]
                },
                "text": "Pleased to announce that I'll be joining Dr. Ricardo Komotar, Professor of Neurosurgery University of Miami, on Instagram Live for a discussion on the role of Integrative Medicine in Academic Health Care, this Friday, December 17th at 12pm ET.  -  @ricardokomotar on Instagram. https://t.co/2h0mlAyp6p",
                "author_id": "15588657",
                "id": "1470800766113882112",
                "public_metrics": {
                    "retweet_count": 5,
                    "reply_count": 1,
                    "like_count": 24,
                    "quote_count": 0
                }
            },
            {
                "text": "One of the great failures in science is still haunting us, the failure to discover why living things are alive. One of the most promising theories was known as vitalism.... \nhttps://t.co/qQWwps8T3h",
                "author_id": "15588657",
                "id": "1470574263643959296",
                "public_metrics": {
                    "retweet_count": 9,
                    "reply_count": 6,
                    "like_count": 32,
                    "quote_count": 0
                }
            },
            {
                "text": "Broadcasting live from Fireside, have a listen: https://t.co/qlwwt4dhsy",
                "author_id": "15588657",
                "id": "1470396034463502341",
                "public_metrics": {
                    "retweet_count": 4,
                    "reply_count": 3,
                    "like_count": 18,
                    "quote_count": 0
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "7_1469857946523914246"
                    ]
                },
                "text": "Grateful for your support for Emilia Clarke’s NFT for Good auction - Only 2 DAYS LEFT #NFT \nFind this collaboration with @MetaSeva &amp; \n@SameYouOrg\n @ThePoonacha at https://t.co/8SGAvSLXmE \n#NFTart #nftcollection #NFTsale #braininjury https://t.co/Ey92pS8XUG",
                "author_id": "15588657",
                "id": "1469858041940090882",
                "public_metrics": {
                    "retweet_count": 17,
                    "reply_count": 6,
                    "like_count": 54,
                    "quote_count": 1
                }
            },
            {
                "text": "#AskDeepak \n\n\"“Fear overcomes a seeker when he tries to accelerate his spiritual growth by taking up practices far beyond his capacity” Do you agree with this quote?\"\n\nhttps://t.co/1qkF5U3Zo7",
                "author_id": "15588657",
                "id": "1469441800884527104",
                "public_metrics": {
                    "retweet_count": 4,
                    "reply_count": 20,
                    "like_count": 53,
                    "quote_count": 0
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1469096536021868554"
                    ]
                },
                "text": "During this Season of Love Deepak Chopra’s extended family is being offered 50% off the award winning film @WayMiracles now through Dec 31st.   @CVircillo\n ❤️\nhttps://t.co/DYm1b6nsiQ https://t.co/kPbedObE1G",
                "author_id": "15588657",
                "id": "1469396507392544770",
                "public_metrics": {
                    "retweet_count": 1,
                    "reply_count": 2,
                    "like_count": 20,
                    "quote_count": 0
                }
            },
            {
                "text": "The #holidays can be filled with unwanted stress and negative emotions, so we must choose to cultivate peace. 💞 \n\nYou may read this article to learn more about how to radiate peace this holiday season: https://t.co/jnf2I5rlhk",
                "author_id": "15588657",
                "id": "1469366302498295812",
                "public_metrics": {
                    "retweet_count": 17,
                    "reply_count": 5,
                    "like_count": 51,
                    "quote_count": 1
                }
            },
            {
                "text": "#AskDeepak \n\"I believe in performing my duty toward my parents &amp; have tried my best. Now that I am educated &amp; independent it is time to have my own family. Should I follow my heart &amp; keep performing my duty toward my parents or find a way to balance both?\"\nhttps://t.co/vaPAsZSQd5",
                "author_id": "15588657",
                "id": "1469079415992864783",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 3,
                    "like_count": 19,
                    "quote_count": 0
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1468940318397579278"
                    ]
                },
                "text": "Emilia Clarke's @SameYouOrg collection on @MetaSeva auction is live. Art by @pholio_studio and @stevensebring @infinitebysuku @hedera @ThePoonacha  | Proceeds to support #braininjury #mentalhealthsupport  #EmiliaClarke\nhttps://t.co/4qePYbZjdb https://t.co/npEJ6cbqXt",
                "author_id": "15588657",
                "id": "1468940321505611780",
                "public_metrics": {
                    "retweet_count": 16,
                    "reply_count": 4,
                    "like_count": 49,
                    "quote_count": 0
                }
            }
        ],
        "includes": {
            "users": [
                {
                    "username": "DeepakChopra",
                    "public_metrics": {
                        "followers_count": 3206248,
                        "following_count": 790,
                        "tweet_count": 81654,
                        "listed_count": 26421
                    },
                    "id": "15588657",
                    "verified": true,
                    "name": "Deepak Chopra",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1244678658951909381/TabEMtZk_normal.jpg"
                }
            ]
        },
        "meta": {
            "oldest_id": "1468940321505611780",
            "newest_id": "1470815854208053250",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3b270esf6skfvf5q2lg68z80mo"
        }
    }


    //End temporary hardcoded data
    
    const [dalaiLamaInfo, setDalaiLamaInfo] = useState("");
    const [sadhGuruInfo, setSadhGuruInfo] = useState("");
    const [eckhartTolleInfo, setEckhartTolleInfo] = useState("");
    const [headspaceInfo, setHeadspaceInfo] = useState("");
    const [deepakChopraInfo, setDeepakChopraInfo] = useState("");
    
    const [tweetTimeline, setTweetTimeline] = useState();
    const [show, setShow] = useState(false);

    

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

    /*function getRandomTweet(timeline) {
        let randomTimelineIndex = Math.floor(Math.random() * 10);
        let randomTweet = timeline.data[randomTimelineIndex].text;
        setCurrentTweet(randomTweet);    
    };*/

    function getDalaiInfo() {
        setDalaiLamaInfo(dalaiInfo);
    }

    function getSadhInfo() {
        setSadhGuruInfo(sadhInfo);
    }

    function getEckhartInfo() {
        setEckhartTolleInfo(eckhartInfo);
    }

    function getheadspaceInfo() {
        setHeadspaceInfo(head_spaceInfo);
    }

    function getdeepakInfo() {
        setDeepakChopraInfo(deepakInfo);
    }

    /*function getRandomTweet(tweetTimeline) {
        let randomTimelineIndex = Math.floor(Math.random() * 10);
        let randomTweet = tweetTimeline.data[randomTimelineIndex];
        return randomTweet;
    }*/

    function getDalaiTweet() {
        setTweetTimeline (dalaiTimeline);
    }

    function getSadhTweet() {
        setTweetTimeline(sadhTimeline);
    }

    function getEckhartTweet() {
        setTweetTimeline(eckhartTimeline);
    }

    function getHeadspaceTweet() {
        setTweetTimeline(headspaceTimeline);
    }

    function getDeepakTweet() {
        setTweetTimeline(deepakTimeline);
    }

    

    

    return (
        <div className = "body">
            <div className = "row h-100">
                <h3 className = "pt-5">My Faves</h3>
                <h6 className = "pt-3 pl-3">Click on a user to display a random tweet!</h6>

                <div className="d-flex flex-wrap flex-fill">
                    <div className="container col-sm"
                        onClick = {() => { setShow(true); getDalaiTweet() }}>
                        <UserCard userInfo={dalaiLamaInfo} />  
                    </div> 
                    
                    <div className="container col-sm"
                        onClick = {() => {setShow(true); getSadhTweet() }}>
                        <UserCard userInfo={sadhGuruInfo} />
                    </div> 
                    
                    <div className="container col-sm"
                        onClick = {() => { setShow(true); getEckhartTweet() }}>
                        <UserCard userInfo={eckhartTolleInfo} />
                    </div> 
                    
                    <div className="container col-sm"
                        onClick = {() => {setShow(true); getHeadspaceTweet() }}>
                        <UserCard userInfo={headspaceInfo} />
                    </div> 
                    
                    <div className="container"
                        onClick = {() => {setShow(true); getDeepakTweet() }}>
                        <UserCard userInfo={deepakChopraInfo} />
                    </div> 
                </div>   
                
                <div>
                    <FavoritesModal onClose={() => setShow(false)} show={show} 
                        tweetTimeline={tweetTimeline} />
                </div>
            </div>
                
                 
        </div>
             
        
    );
}

export default Favorites;



  