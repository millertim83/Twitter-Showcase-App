import React, { useEffect, useState } from "react";
import "./Favorites.css";
import UserCard from "./UserCard";
import FavoritesModal from "./FavoritesModal";
import axios from "axios";
import res from "express/lib/response";



function Favorites() {
//Temporary hardcoded data to be removed later
    
const dalaiTimeline = {
        "data": [
            {
                "text": "If the education system fostered inner peace, compassion and non-violence, or the idea of doing no harm, students would learn how to achieve peace of mind. This is what is required if we are to fulfil the goal of a genuinely peaceful and demilitarized world.",
                "id": "1470325310532976643",
                "public_metrics": {
                    "retweet_count": 4535,
                    "reply_count": 424,
                    "like_count": 18475,
                    "quote_count": 214
                },
                "author_id": "20609518",
                "created_at": "2021-12-13T09:30:46.000Z"
            },
            {
                "text": "If we focus too much on ourselves, we’ll not be happy, whereas to concern ourselves with the well-being of others is the gateway to great joy. If we’re really serious about happiness, we need to open our hearts and focus on others as well as ourselves.",
                "id": "1469237993424965632",
                "public_metrics": {
                    "retweet_count": 4832,
                    "reply_count": 404,
                    "like_count": 21228,
                    "quote_count": 266
                },
                "author_id": "20609518",
                "created_at": "2021-12-10T09:30:09.000Z"
            },
            {
                "text": "Cultivating compassion is not a religious practice focused on ensuring we go to heaven or a good future life. It’s about living a good day-to-day life here and now. It’s about being a happy person. Warm-heartedness is a fundamental good human quality.",
                "id": "1467788417337475080",
                "public_metrics": {
                    "retweet_count": 5412,
                    "reply_count": 272,
                    "like_count": 20205,
                    "quote_count": 274
                },
                "author_id": "20609518",
                "created_at": "2021-12-06T09:30:03.000Z"
            },
            {
                "text": "Someone may be very rich and powerful but without any trusted friends they will never be happy. Someone else may be poor but if they are surrounded by trusting friends they’ll be happy. Therefore, taking care of others is the best way to fulfil our own interests.",
                "id": "1466702162805673990",
                "public_metrics": {
                    "retweet_count": 4635,
                    "reply_count": 352,
                    "like_count": 20810,
                    "quote_count": 251
                },
                "author_id": "20609518",
                "created_at": "2021-12-03T09:33:40.000Z"
            },
            {
                "text": "One of my commitments is to promote human values based on common sense and scientific findings. What we need is more self-confidence, which comes from concern for others' well-being. The real source of inner strength and self-confidence is warm-heartedness.",
                "id": "1465251863243091970",
                "public_metrics": {
                    "retweet_count": 3484,
                    "reply_count": 258,
                    "like_count": 15360,
                    "quote_count": 167
                },
                "author_id": "20609518",
                "created_at": "2021-11-29T09:30:41.000Z"
            },
            {
                "text": "We’re social creatures, we depend on each other, which is why we need a sense of concern for others’ well-being. Compassion is what’s important and you don’t have to be religious to practise it. Practising compassion here and now—living a meaningful life—is what is most important",
                "id": "1464164704184463368",
                "public_metrics": {
                    "retweet_count": 6382,
                    "reply_count": 333,
                    "like_count": 24272,
                    "quote_count": 282
                },
                "author_id": "20609518",
                "created_at": "2021-11-26T09:30:42.000Z"
            },
            {
                "text": "If we make consistent effort, based on proper education, we can change the world. We are selfish, that’s natural, but we need to be wisely selfish, not foolishly selfish. We have to concern ourselves more with others’ well-being, that’s the way to be wisely selfish.",
                "id": "1462715703799156737",
                "public_metrics": {
                    "retweet_count": 4309,
                    "reply_count": 323,
                    "like_count": 18397,
                    "quote_count": 188
                },
                "author_id": "20609518",
                "created_at": "2021-11-22T09:32:54.000Z"
            },
            {
                "text": "The only thing that will bring happiness is affection and warmheartedness. When you have a more compassionate mind and cultivate warmheartedness, the whole atmosphere around you becomes more positive and friendlier. You see friends everywhere.",
                "id": "1461627868279017472",
                "public_metrics": {
                    "retweet_count": 5547,
                    "reply_count": 315,
                    "like_count": 21924,
                    "quote_count": 302
                },
                "author_id": "20609518",
                "created_at": "2021-11-19T09:30:14.000Z"
            },
            {
                "text": "Anger and aggression sometimes seem to be protective because they bring energy to bear on a particular situation, but what needs to be acknowledged is that that energy is blind. It takes a calm mind to be able to consider things from different angles and points of view.",
                "id": "1460178300274282498",
                "public_metrics": {
                    "retweet_count": 4687,
                    "reply_count": 343,
                    "like_count": 19821,
                    "quote_count": 244
                },
                "author_id": "20609518",
                "created_at": "2021-11-15T09:30:10.000Z"
            },
            {
                "text": "Materialistic values cannot give us peace of mind. So we really need to focus on our inner values, our true humanity. Only this way can we have peace of mind—and more peace in our world.",
                "id": "1459091418526273536",
                "public_metrics": {
                    "retweet_count": 5129,
                    "reply_count": 315,
                    "like_count": 21888,
                    "quote_count": 238
                },
                "author_id": "20609518",
                "created_at": "2021-11-12T09:31:17.000Z"
            }
        ],
        "includes": {
            "users": [
                {
                    "verified": true,
                    "id": "20609518",
                    "username": "DalaiLama",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/529214699041067008/fqPBAr5s_normal.jpeg",
                    "name": "Dalai Lama",
                    "public_metrics": {
                        "followers_count": 19231531,
                        "following_count": 0,
                        "tweet_count": 1748,
                        "listed_count": 73595
                    }
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

    const sadhTimeline = {
        "data": [
            {
                "text": "Bharat is the only Culture that continues to celebrate &amp; worship the Feminine. Time to revive this practice all across the world to enable Human Beings to explore Higher Dimensions of Life. Gratitude to #UNESCO for elevating #DurgaPuja to a Global celebration of the Feminine. -Sg https://t.co/lRJ9VdnbIo https://t.co/s1RyoPE2le",
                "author_id": "67611162",
                "attachments": {
                    "media_keys": [
                        "3_1471499026906316804"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 93,
                    "reply_count": 10,
                    "like_count": 281,
                    "quote_count": 5
                },
                "created_at": "2021-12-16T15:14:49.000Z",
                "id": "1471499058883612675"
            },
            {
                "text": "Unless our idea of wellbeing includes every life on the planet, we cannot call ourselves Human. #SadhguruQuotes https://t.co/6hk1D24TNA",
                "author_id": "67611162",
                "attachments": {
                    "media_keys": [
                        "3_1470998024021110787"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 1406,
                    "reply_count": 138,
                    "like_count": 7103,
                    "quote_count": 112
                },
                "created_at": "2021-12-16T02:45:00.000Z",
                "id": "1471310360384872452"
            },
            {
                "text": "To go through life effortlessly, children need an atmosphere that nurtures inner strength. #SadhguruQuotes https://t.co/Nwtvzeew04",
                "author_id": "67611162",
                "attachments": {
                    "media_keys": [
                        "3_1465202480782852100"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 1490,
                    "reply_count": 158,
                    "like_count": 7964,
                    "quote_count": 147
                },
                "created_at": "2021-12-15T02:45:00.000Z",
                "id": "1470947972695298052"
            },
            {
                "text": "The revival of #Kashi is an invitation to the World to embrace the non-divisive, all-inclusiveness of Kashi; a space that offers every human being an opportunity to transcend their limitations &amp; explore the immense possibilities of Being Human. With gratitude.–Sg\n#KashiVishwanath",
                "author_id": "67611162",
                "public_metrics": {
                    "retweet_count": 1104,
                    "reply_count": 65,
                    "like_count": 3148,
                    "quote_count": 88
                },
                "created_at": "2021-12-14T15:48:06.000Z",
                "id": "1470782658938650628"
            },
            {
                "text": "The revival of Kashi is important not just for India but for the World; for, Kashi is the most ancient living city on the planet. A doorway that has enabled thousands of seekers, to find expression to human longing. My gratitude to all who made it happen. –Sg\n#KashiVishwanathDham https://t.co/n2KSt63x5Y",
                "author_id": "67611162",
                "attachments": {
                    "media_keys": [
                        "13_1470779616780595212"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 4012,
                    "reply_count": 260,
                    "like_count": 14083,
                    "quote_count": 227
                },
                "created_at": "2021-12-14T15:44:29.000Z",
                "id": "1470781750666305543"
            },
            {
                "text": "#காவேரிகூக்குரல் இயக்கம்\n#பசுமைதமிழ்நாடு திட்டத்திற்கு  தனது மனமார்ந்த ஆதரவை தெரிவித்து கொள்கிறது. இத்திட்டம் மண் வளத்தை மீட்டெடுப்பதற்கும், மாநிலத்தில் செழிப்பையும், நல்வாழ்வையும் அதிகரிப்பதற்கும் மிகவும் அவசியம். #தமிழ்நாடு அரசுக்கு பாராட்டுக்கள் -Sg\n @mkstalin @supriyasahuias https://t.co/SzQawY3v73",
                "author_id": "67611162",
                "public_metrics": {
                    "retweet_count": 443,
                    "reply_count": 31,
                    "like_count": 801,
                    "quote_count": 8
                },
                "created_at": "2021-12-14T05:26:30.000Z",
                "id": "1470626227136331779"
            },
            {
                "text": "Congratulations and Blessings to you #HarnaazSandhu.  Beautiful Bharat. -Sg https://t.co/prpk87FFXo",
                "author_id": "67611162",
                "public_metrics": {
                    "retweet_count": 786,
                    "reply_count": 86,
                    "like_count": 3772,
                    "quote_count": 23
                },
                "created_at": "2021-12-14T05:13:53.000Z",
                "id": "1470623052769595397"
            },
            {
                "text": "#CauveryCalling extends its wholehearted support to the #GreenTNMission, a much needed initiative that will revive Soil health &amp; bring prosperity &amp; wellbeing to the State. Congratulations to Govt. of TN.–Sg @mkstalin @CMOTamilnadu @supriyasahuias https://t.co/SoA2PcFwmv",
                "author_id": "67611162",
                "public_metrics": {
                    "retweet_count": 983,
                    "reply_count": 80,
                    "like_count": 1805,
                    "quote_count": 81
                },
                "created_at": "2021-12-14T03:15:24.000Z",
                "id": "1470593234476826629"
            },
            {
                "text": "Lethargy comes from overconsumption of either food or thought. #SadhguruQuotes https://t.co/bxaRr9vxWT",
                "author_id": "67611162",
                "attachments": {
                    "media_keys": [
                        "3_1465202319432192002"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 1808,
                    "reply_count": 143,
                    "like_count": 8133,
                    "quote_count": 154
                },
                "created_at": "2021-12-14T02:45:00.000Z",
                "id": "1470585585022734340"
            },
            {
                "text": "Your life and how you experience it is entirely your making. Only if this absolutely sinks in, will you become a genuine seeker. #SadhguruQuotes https://t.co/a5JBUhrwxt",
                "author_id": "67611162",
                "attachments": {
                    "media_keys": [
                        "3_1465202158119186435"
                    ]
                },
                "public_metrics": {
                    "retweet_count": 1526,
                    "reply_count": 142,
                    "like_count": 6513,
                    "quote_count": 142
                },
                "created_at": "2021-12-13T02:45:00.000Z",
                "id": "1470223196809011208"
            }
        ],
        "includes": {
            "users": [
                {
                    "id": "67611162",
                    "name": "Sadhguru",
                    "username": "SadhguruJV",
                    "verified": true,
                    "public_metrics": {
                        "followers_count": 3770829,
                        "following_count": 3,
                        "tweet_count": 11542,
                        "listed_count": 1764
                    },
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1132191777195085824/KbxIQUxJ_normal.png"
                }
            ]
        },
        "meta": {
            "oldest_id": "1470223196809011208",
            "newest_id": "1471499058883612675",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3pqp1j6i453xcxienxnumfl4c8"
        }
    }
            
    const eckhartTimeline = {
        "data": [
            {
                "author_id": "402025521",
                "text": "From pioneering German dance culture to DJing major festivals, @MonikaKruse knows how to bring the energy. Now, she’s helping you stay focused and get in the zone. Check out the latest Focus music playlist. 🎧 https://t.co/d0Zhjvr7OE",
                "public_metrics": {
                    "retweet_count": 1,
                    "reply_count": 2,
                    "like_count": 24,
                    "quote_count": 0
                },
                "created_at": "2021-12-15T19:59:06.000Z",
                "attachments": {
                    "media_keys": [
                        "13_1471208190364856325"
                    ]
                },
                "id": "1471208214771515394"
            },
            {
                "author_id": "402025521",
                "text": "Empathy has three components: \n1. The cognitive – understanding someone's thoughts or feelings\n2. The emotional – sharing these feelings\n3. The compassionate – going beyond sharing concern and trying to reduce someone’s pain",
                "public_metrics": {
                    "retweet_count": 128,
                    "reply_count": 3,
                    "like_count": 477,
                    "quote_count": 9
                },
                "created_at": "2021-12-15T18:56:00.000Z",
                "id": "1471192334813601794"
            },
            {
                "author_id": "402025521",
                "text": "RT @HeadspaceHelp: Our team has confirmed that the third-party issue has now been resolved. Your run streak should not be affected by this…",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "created_at": "2021-12-15T16:49:12.000Z",
                "id": "1471160422237491200"
            },
            {
                "author_id": "402025521",
                "text": "Having trouble logging or creating an account? You're not alone. We are currently experiencing an outage with one of our 3rd party providers. We thank you for your patience and hope to be up and running again soon. 🧡",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 3,
                    "like_count": 75,
                    "quote_count": 0
                },
                "created_at": "2021-12-15T16:12:04.000Z",
                "id": "1471151077055623169"
            },
            {
                "author_id": "402025521",
                "text": "In stillness,\nis wisdom,\nis contentment,\nis calm.",
                "public_metrics": {
                    "retweet_count": 80,
                    "reply_count": 1,
                    "like_count": 416,
                    "quote_count": 2
                },
                "created_at": "2021-12-15T15:56:00.000Z",
                "id": "1471147036317728774"
            },
            {
                "author_id": "402025521",
                "text": "@Brobi_1Kenobi Thanks so much for your feedback! We'll be sure to share it with our product team! :)",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                },
                "created_at": "2021-12-14T23:22:35.000Z",
                "id": "1470897033863176200"
            },
            {
                "author_id": "402025521",
                "text": "Deep Inhale ...........\nDeep exhale ..........\n❤️ this tweet if you actually did it.",
                "public_metrics": {
                    "retweet_count": 195,
                    "reply_count": 27,
                    "like_count": 1925,
                    "quote_count": 8
                },
                "created_at": "2021-12-14T18:42:00.000Z",
                "id": "1470826423464124416"
            },
            {
                "author_id": "402025521",
                "text": "Stop labeling your thoughts as naughty or nice. They're just that: thoughts.",
                "public_metrics": {
                    "retweet_count": 115,
                    "reply_count": 6,
                    "like_count": 648,
                    "quote_count": 5
                },
                "created_at": "2021-12-14T15:38:01.000Z",
                "id": "1470780119858008078"
            },
            {
                "author_id": "402025521",
                "text": "@damonpayne We're sorry to hear about your run streak resetting. Our team can help get the stat updated if you'd like. You can send us a note at help@headspace.com or DM for assistance whatever works for you.",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 1,
                    "like_count": 0,
                    "quote_count": 0
                },
                "created_at": "2021-12-13T20:04:38.000Z",
                "id": "1470484829795926021"
            },
            {
                "author_id": "402025521",
                "text": "Reasons to be grateful can be found in every moment.",
                "public_metrics": {
                    "retweet_count": 330,
                    "reply_count": 14,
                    "like_count": 1078,
                    "quote_count": 11
                },
                "created_at": "2021-12-13T18:12:01.000Z",
                "id": "1470456488833564673"
            }
        ],
        "includes": {
            "users": [
                {
                    "public_metrics": {
                        "followers_count": 273286,
                        "following_count": 1600,
                        "tweet_count": 52125,
                        "listed_count": 2227
                    },
                    "name": "Headspace",
                    "username": "Headspace",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1157021554280058880/yWiCuBSR_normal.jpg",
                    "verified": true,
                    "id": "402025521"
                }
            ]
        },
        "meta": {
            "oldest_id": "1470456488833564673",
            "newest_id": "1471208214771515394",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3pqpn8lrh2gkhsicpcx4q0l5ir"
        }
    }

    const headspaceTimeline = {
        "data": [
            {
                "text": "From pioneering German dance culture to DJing major festivals, @MonikaKruse knows how to bring the energy. Now, she’s helping you stay focused and get in the zone. Check out the latest Focus music playlist. 🎧 https://t.co/d0Zhjvr7OE",
                "created_at": "2021-12-15T19:59:06.000Z",
                "id": "1471208214771515394",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 1,
                    "reply_count": 2,
                    "like_count": 24,
                    "quote_count": 0
                },
                "attachments": {
                    "media_keys": [
                        "13_1471208190364856325"
                    ]
                }
            },
            {
                "text": "Empathy has three components: \n1. The cognitive – understanding someone's thoughts or feelings\n2. The emotional – sharing these feelings\n3. The compassionate – going beyond sharing concern and trying to reduce someone’s pain",
                "created_at": "2021-12-15T18:56:00.000Z",
                "id": "1471192334813601794",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 128,
                    "reply_count": 3,
                    "like_count": 477,
                    "quote_count": 9
                }
            },
            {
                "text": "RT @HeadspaceHelp: Our team has confirmed that the third-party issue has now been resolved. Your run streak should not be affected by this…",
                "created_at": "2021-12-15T16:49:12.000Z",
                "id": "1471160422237491200",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                }
            },
            {
                "text": "Having trouble logging or creating an account? You're not alone. We are currently experiencing an outage with one of our 3rd party providers. We thank you for your patience and hope to be up and running again soon. 🧡",
                "created_at": "2021-12-15T16:12:04.000Z",
                "id": "1471151077055623169",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 3,
                    "like_count": 75,
                    "quote_count": 0
                }
            },
            {
                "text": "In stillness,\nis wisdom,\nis contentment,\nis calm.",
                "created_at": "2021-12-15T15:56:00.000Z",
                "id": "1471147036317728774",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 80,
                    "reply_count": 1,
                    "like_count": 416,
                    "quote_count": 2
                }
            },
            {
                "text": "@Brobi_1Kenobi Thanks so much for your feedback! We'll be sure to share it with our product team! :)",
                "created_at": "2021-12-14T23:22:35.000Z",
                "id": "1470897033863176200",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 0,
                    "like_count": 0,
                    "quote_count": 0
                }
            },
            {
                "text": "Deep Inhale ...........\nDeep exhale ..........\n❤️ this tweet if you actually did it.",
                "created_at": "2021-12-14T18:42:00.000Z",
                "id": "1470826423464124416",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 195,
                    "reply_count": 27,
                    "like_count": 1925,
                    "quote_count": 8
                }
            },
            {
                "text": "Stop labeling your thoughts as naughty or nice. They're just that: thoughts.",
                "created_at": "2021-12-14T15:38:01.000Z",
                "id": "1470780119858008078",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 115,
                    "reply_count": 6,
                    "like_count": 648,
                    "quote_count": 5
                }
            },
            {
                "text": "@damonpayne We're sorry to hear about your run streak resetting. Our team can help get the stat updated if you'd like. You can send us a note at help@headspace.com or DM for assistance whatever works for you.",
                "created_at": "2021-12-13T20:04:38.000Z",
                "id": "1470484829795926021",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 0,
                    "reply_count": 1,
                    "like_count": 0,
                    "quote_count": 0
                }
            },
            {
                "text": "Reasons to be grateful can be found in every moment.",
                "created_at": "2021-12-13T18:12:01.000Z",
                "id": "1470456488833564673",
                "author_id": "402025521",
                "public_metrics": {
                    "retweet_count": 330,
                    "reply_count": 14,
                    "like_count": 1078,
                    "quote_count": 11
                }
            }
        ],
        "includes": {
            "users": [
                {
                    "id": "402025521",
                    "verified": true,
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1157021554280058880/yWiCuBSR_normal.jpg",
                    "name": "Headspace",
                    "username": "Headspace",
                    "public_metrics": {
                        "followers_count": 273287,
                        "following_count": 1600,
                        "tweet_count": 52125,
                        "listed_count": 2227
                    }
                }
            ]
        },
        "meta": {
            "oldest_id": "1470456488833564673",
            "newest_id": "1471208214771515394",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3pqpn8lrh2gkhsicpcx4q0l5ir"
        }
    }

    const deepakTimeline = {
        "data": [
            {
                "id": "1471495434598158340",
                "text": "Grateful to serve always 🙏 https://t.co/bYj6dTQMG3",
                "author_id": "15588657",
                "created_at": "2021-12-16T15:00:25.000Z",
                "public_metrics": {
                    "retweet_count": 2,
                    "reply_count": 2,
                    "like_count": 10,
                    "quote_count": 0
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1471093536963678212"
                    ]
                },
                "id": "1471299037328396291",
                "text": "https://t.co/EkwNVsKIXd",
                "author_id": "15588657",
                "created_at": "2021-12-16T02:00:00.000Z",
                "public_metrics": {
                    "retweet_count": 37,
                    "reply_count": 5,
                    "like_count": 132,
                    "quote_count": 1
                }
            },
            {
                "id": "1471253744725594114",
                "text": "#AskDeepak \n\"Recently I have had a spiritual epiphany, I have felt the presence of god &amp; had a sense of oneness. I would like to know what caused this. How can I maintain this wonderful feeling as it is starting to wear off?\"\n\nhttps://t.co/Yw07U556WJ",
                "author_id": "15588657",
                "created_at": "2021-12-15T23:00:01.000Z",
                "public_metrics": {
                    "retweet_count": 4,
                    "reply_count": 1,
                    "like_count": 31,
                    "quote_count": 1
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1470733090502938636"
                    ]
                },
                "id": "1470815854208053250",
                "text": "💞 What does true #success mean to you?\n\nYou may find more daily inspiration on @ChopraGlobal. https://t.co/nIq53JrCj2",
                "author_id": "15588657",
                "created_at": "2021-12-14T18:00:00.000Z",
                "public_metrics": {
                    "retweet_count": 21,
                    "reply_count": 1,
                    "like_count": 111,
                    "quote_count": 2
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "3_1470792839470714881"
                    ]
                },
                "id": "1470800766113882112",
                "text": "Pleased to announce that I'll be joining Dr. Ricardo Komotar, Professor of Neurosurgery University of Miami, on Instagram Live for a discussion on the role of Integrative Medicine in Academic Health Care, this Friday, December 17th at 12pm ET.  -  @ricardokomotar on Instagram. https://t.co/2h0mlAyp6p",
                "author_id": "15588657",
                "created_at": "2021-12-14T17:00:03.000Z",
                "public_metrics": {
                    "retweet_count": 6,
                    "reply_count": 1,
                    "like_count": 31,
                    "quote_count": 0
                }
            },
            {
                "id": "1470574263643959296",
                "text": "One of the great failures in science is still haunting us, the failure to discover why living things are alive. One of the most promising theories was known as vitalism.... \nhttps://t.co/qQWwps8T3h",
                "author_id": "15588657",
                "created_at": "2021-12-14T02:00:01.000Z",
                "public_metrics": {
                    "retweet_count": 9,
                    "reply_count": 6,
                    "like_count": 35,
                    "quote_count": 0
                }
            },
            {
                "id": "1470396034463502341",
                "text": "Broadcasting live from Fireside, have a listen: https://t.co/qlwwt4dhsy",
                "author_id": "15588657",
                "created_at": "2021-12-13T14:11:47.000Z",
                "public_metrics": {
                    "retweet_count": 4,
                    "reply_count": 3,
                    "like_count": 20,
                    "quote_count": 0
                }
            },
            {
                "attachments": {
                    "media_keys": [
                        "7_1469857946523914246"
                    ]
                },
                "id": "1469858041940090882",
                "text": "Grateful for your support for Emilia Clarke’s NFT for Good auction - Only 2 DAYS LEFT #NFT \nFind this collaboration with @MetaSeva &amp; \n@SameYouOrg\n @ThePoonacha at https://t.co/8SGAvSLXmE \n#NFTart #nftcollection #NFTsale #braininjury https://t.co/Ey92pS8XUG",
                "author_id": "15588657",
                "created_at": "2021-12-12T02:34:00.000Z",
                "public_metrics": {
                    "retweet_count": 17,
                    "reply_count": 6,
                    "like_count": 54,
                    "quote_count": 1
                }
            },
            {
                "id": "1469441800884527104",
                "text": "#AskDeepak \n\n\"“Fear overcomes a seeker when he tries to accelerate his spiritual growth by taking up practices far beyond his capacity” Do you agree with this quote?\"\n\nhttps://t.co/1qkF5U3Zo7",
                "author_id": "15588657",
                "created_at": "2021-12-10T23:00:00.000Z",
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
                "id": "1469396507392544770",
                "text": "During this Season of Love Deepak Chopra’s extended family is being offered 50% off the award winning film @WayMiracles now through Dec 31st.   @CVircillo\n ❤️\nhttps://t.co/DYm1b6nsiQ https://t.co/kPbedObE1G",
                "author_id": "15588657",
                "created_at": "2021-12-10T20:00:02.000Z",
                "public_metrics": {
                    "retweet_count": 1,
                    "reply_count": 2,
                    "like_count": 20,
                    "quote_count": 0
                }
            }
        ],
        "includes": {
            "users": [
                {
                    "name": "Deepak Chopra",
                    "id": "15588657",
                    "profile_image_url": "https://pbs.twimg.com/profile_images/1244678658951909381/TabEMtZk_normal.jpg",
                    "username": "DeepakChopra",
                    "verified": true,
                    "public_metrics": {
                        "followers_count": 3206207,
                        "following_count": 790,
                        "tweet_count": 81657,
                        "listed_count": 26420
                    }
                }
            ]
        },
        "meta": {
            "oldest_id": "1469396507392544770",
            "newest_id": "1471495434598158340",
            "result_count": 10,
            "next_token": "7140dibdnow9c7btw3z3b49y16j0u8iz58ic6d14y9ru8"
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

    const randomIndex = Math.floor(Math.random() * 10);
    

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
                
                <div id="modal" className="container container-sm">
                    <FavoritesModal
                        randomIndex={randomIndex} 
                        onClose={() => setShow(false)} 
                        show={show} 
                        tweetTimeline={tweetTimeline} />
                </div>
            </div>
                
                 
        </div>
             
        
    );
}

export default Favorites;



  