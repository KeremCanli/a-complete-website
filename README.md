# A Complete Website
If Node.js and MongoDB are installed, after using the `npm install` and `npm start` commands, the project will stand up in http://localhost:3000.


# Index
| Route | HTTP Verb | Request Body | Description |
| --- | --- | --- | --- |
| / | `GET` | Empty | Get the home page. |


# News
| Route | HTTP Verb | Request Body | Description |
| --- | --- | --- | --- |
| /news | `GET` | Empty | Get the news page. |
| /news/detail/:id | `GET` | Empty | Get the news detail page. |
| /news/api | `POST` | {<br/> &nbsp;&nbsp;&nbsp;"title": "...",<br/> &nbsp;&nbsp;&nbsp;"description": "...",<br/> &nbsp;&nbsp;&nbsp;"content": "...",<br/>	&nbsp;&nbsp;&nbsp;"author": "..."<br/>} | Insert a news. |
| /news/api | `GET` | Empty | Get all news. |
| /news/api/:id | `GET` | Empty | Get a news. |
| /news/api/:id | `PUT` | {<br/> &nbsp;&nbsp;&nbsp;"title": "...",<br/>	&nbsp;&nbsp;&nbsp;"description": "...",<br/> &nbsp;&nbsp;&nbsp;"content": "...",<br/>	&nbsp;&nbsp;&nbsp;"author": "..."<br/>} | Update a news with new informations. |
| /news/api/:id | `DELETE` | Empty | Delete a news. |


# Reference
| Route | HTTP Verb | Request Body | Description |
| --- | --- | --- | --- |
| /reference |`GET` | Empty | Get the reference page. |
| /reference/api | `POST` | {<br/> &nbsp;&nbsp;&nbsp;"title": "...",<br/> &nbsp;&nbsp;&nbsp;"url": "..."<br/>} | Insert a reference. |
| /reference/api | `GET` | Empty | Get all reference. |
| /reference/api/:id | `PUT` | {<br/> &nbsp;&nbsp;&nbsp;"title": "...",<br/> &nbsp;&nbsp;&nbsp;"url": "..."<br/>} | Update a reference with new informations. |
| /reference/api/:id | `DELETE` | Empty | Delete a reference. |


# Contact
| Route | HTTP Verb | Request Body | Description |
| --- | --- | --- | --- |
| /contact | `GET` | Empty | Get the contact page. |
| /contact/api | `POST` | {<br/> &nbsp;&nbsp;&nbsp;"name": "...",<br/> &nbsp;&nbsp;&nbsp;"surname": "...",<br/> &nbsp;&nbsp;&nbsp;"email": "...",<br/> &nbsp;&nbsp;&nbsp;"phone": ...,<br/> &nbsp;&nbsp;&nbsp;"message": "..."<br/>} | Insert a contact. |
| /contact/api | `GET` | Empty | Get all contact. |


# Demo
[Live demo on Heroku](https://a-complete-website.herokuapp.com)
