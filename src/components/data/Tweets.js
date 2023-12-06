import Cnn from  "../../images/tweet-profile-photo.png";
import NYT from  "../../images/NYT.png";
import imageNYT from  "../../images/tweet-image.png";
import twitter from  "../../images/twitter.png";

export const UsersList = 
    [
      {
        "idUser": 1,
        "name": "CNN",
        "hastag" : "@CNN",
        "times" : "7m",
        "avatar" : Cnn,
        "content": "President Joe Biden toute a lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : "57",
            "share" : "144",
            "like" : "184"
        }
      },
      {
        "idUser": 2,
        "name": "The New York Times",
        "hastag" : "@nytimes",
        "times" : "2h",
        "avatar" : NYT,
        "content": "Gardening  boomed during the pandemic 2er contenu lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum ",
        "images" : imageNYT,
        "haveImage": true,
        "bottomAction" : { 
            "comment" : "19",
            "share" : "48",
            "like" : "482"
        }
      },
      {
        "idUser": 3,
        "name": "Twitter",
        "hastag" : "@Twitter",
        "times" : "Oct 29",
        "avatar" : twitter,
        "content": "BIG NEWS lol jk still",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : "6.8K",
            "share" : "36.6K",
            "like" : "267.1K"
        }
      },
      {
        "idUser": 4,
        "name": "Twitter",
        "hastag" : "@Twitter",
        "times" : "Oct 4",
        "avatar" : twitter,
        "content": "Hello literally everyone ",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : "116.7K",
            "share" : "785.4K",
            "like" : "3.3M"
        }
      },
      {
        "idUser": 5,
        "name": "Twitter",
        "hastag" : "@Twitter",
        "times" : "Oct 4",
        "avatar" : twitter,
        "content": "Hello literally everyone ",
        "haveImage": false,
        "bottomAction" : { 
            "comment" : "116.7K",
            "share" : "785.4K",
            "like" : "3.3M"
        }
      }
      
    ];