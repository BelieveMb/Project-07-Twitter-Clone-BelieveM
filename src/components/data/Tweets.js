import Cnn from  "../../images/tweet-profile-photo.png";
import BannerCNN from  "../../images/BannerCNN.jpg";

import NYT from  "../../images/NYT.png";
import BannerNYT from  "../../images/BannerNYT.jpg";
import imageNYT from  "../../images/tweet-image.png";
import BannerX from  "../../images/BannerX.jpg";
import twitter from  "../../images/twitter.png";

export const UsersList = 
    [
      {
        "idUser": 1,
        "name": "CNN",
        "hastag" : "@CNN",
        "times" : "7m",
        "avatar" : Cnn,
        "numberPost": "145 k",
        "bannerImg" : BannerCNN,
        "followers" : "250",
        "content": "President Joe Biden toute a lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : 57,
            "share" : 144,
            "like" : 184
        }
      },
      {
        "idUser": 2,
        "name": "The New York Times",
        "hastag" : "@nytimes",
        "times" : "2h",
        "avatar" : NYT,
        "numberPost": "15 k",
        "bannerImg" : BannerNYT,
        "followers" : "350",
        "content": "Gardening  boomed during the pandemic 2er contenu lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum ",
        "images" : imageNYT,
        "haveImage": true,
        "bottomAction" : { 
            "comment" : 19,
            "share" : 48,
            "like" : 482
        }
      },
      {
        "idUser": 3,
        "name": "Twitter",
        "hastag" : "@Twitter",
        "times" : "Oct 29",
        "avatar" : twitter,
        "numberPost": "5 k",
        "bannerImg" : BannerX,
        "followers" : "850",
        "content": "BIG NEWS lol jk still",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : 68,
            "share" : 36.6,
            "like" : 267.1
        }
      },
      {
        "idUser": 4,
        "name": "Twitter",
        "hastag" : "@Twitter",
        "times" : "Oct 4",
        "avatar" : twitter,
        "numberPost": "5 k",
        "bannerImg" : BannerX,
        "content": "Hello literally everyone ",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : 116,
            "share" : 785.4,
            "like" : 3.3
        }
      },
      {
        "idUser": 5,
        "name": "Twitter",
        "hastag" : "@Twitter",
        "times" : "Oct 4",
        "avatar" : twitter,
        "numberPost": "5 k",
        "bannerImg" : BannerX,
        "content": "Hello literally everyone ",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : 116.7,
            "share" : 785.4,
            "like" : 3.3
        }
      }
      
    ];