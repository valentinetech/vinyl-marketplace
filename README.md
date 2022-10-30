# TODO
[x] Create local backup for Spotify API (when loading slow / auth incomplete)
[] Move backend from heroku
[] Create Models for auctions
[] Setup Redux for auction CRUD operations
[] F Admin Dashboard
[] F All Sales page
[] F Cart
[] F Stripe integration 

App is build with create-react-app.

DEMO for Client-side: [Client Demo](https://vinyl-auction.netlify.app/)

API Working, Login / Sign-UP ETC


# API DOCS
# EndPoints

## CREATE

#### Register User
POST
http://localhost:9090/api/users/register

Example JSON Request body:

{
    "username":"text",
    "password":"text"
}

Example JSON Response:


{
  "user": {
    "username": "username",
    "password": "ENCODED_PASSWORD",
    "_id": "_id",
    "createdAt": "2022-07-18T16:30:22.953Z",
    "updatedAt": "2022-07-18T16:30:22.953Z"
  }
}

#### Login User
POST
http://localhost:9090/api/users/login

Example JSON Request body:

{
    "username":"text",
    "password":"text"
}

Example JSON Response:

{
  "message": "Auth successful",
  "token": "token",
  "user": {
    "_id": "_id",
    "username": "username",
    "password": "password",
    "createdAt": "2022-07-18T16:30:22.953Z",
    "updatedAt": "2022-07-18T16:30:22.953Z"
  }
}

#### Create an Auction with UserId
POST
http://localhost:9090/api/auctions/create

Example JSON Request body:

{
    "user": "userId",
    "albumCover": "link to album cover",
    "album": "text",
    "artist": "text",
    "buyNowPrice": number,
    "minBid": number,
    "lastBid": number,
    "timeLeft": number,
}

Example JSON Response:
{
  "auction": {
    "user": "_id", // _id passed from user
    "albumCover": "link to album cover",
    "album": "text",
    "artist": "text",
    "buyNowPrice": number,
    "minBid": number,
    "lastBid": number,
    "timeLeft": number,
    "_id": "_id", // _id generated on creation
    "createdAt": "2022-07-18T19:39:20.131Z", // generated on creation
    "updatedAt": "2022-07-18T19:39:20.131Z" // generated on creation
  }
}

## READ

#### Validate Token
GET
http://localhost:9090/api/users/validate

Header*
Bearer 'token'

#### Get All Users
GET
http://localhost:9090/api/users/get_all

Header*
Bearer 'token'

#### Get Auction by Auction Id
GET
http://localhost:9090/api/auctions/read/${auctionId}

Header*
Bearer 'token'

////////////////////////////////////////////////////

#### Get Auctions by User Id
GET
http://localhost:9090/api/auctions/read_all/${userId}

Header*
Bearer 'token'

## UPDATE

#### Update auction by Auction Id
PATCH
http://localhost:9090/api/auctions/update/${auctionId}

Header*
Bearer 'token'

## DELETE

#### Delete auction by Auction Id
DELETE
http://localhost:9090/api/auctions/delete/${auctionId}

Header*
Bearer 'token'

### HEROKU deploy script 
git add . && git commit -m "commit msg" && git subtree push --prefix server heroku main