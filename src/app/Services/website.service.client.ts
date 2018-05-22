import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

websites = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
]
;


// 1. createWebsite(userId, website) - adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
  createWebsite(userId: String, website) {
    website._id = Math.floor(Math.random() * 10000).toString();
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  
// 2. findWebsitesByUser(userId) - retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsiteByUser(userId: String) {
    var result = [];
    for (let i = 0; i <= this.websites.length; i++) {
      if (this.websites[i].developerId) === userId) {
        {result.push(this.websites[i]);
    }
  }

// 3. findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the websiteId parameter
findWebsiteById(websiteId) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {  
        return.this.websites.[i] 
      }
    }
  }


updateWebsite(websiteId, website) { 
    var oldWeb = this.findWebsiteById(websiteId);
    var index = this.users.indexOf(oldWeb);

    this.websites[index].name = website.name;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;



deleteWebsite(websiteId) { 
     var web = this.findWebsiteById(WebId);
     var index = this.users.indexOf(oldUser);
     this.users.splice(index, 1);
   }






  findUserByUsername(username: string) { … }
  findUserByCredentials(username: string, password: string) { … }
  updateUser(userId, user) { … }
  deleteUser(userId) { … }


import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

users = [
  {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
  {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
  {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
  {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
  ];

  createUser(user) {
    user._id = Math.floor(Math.random() * Math.floor(10000)).toString();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  
        return this.users[x]; 
      }
    }
  }

  findUserByUsername(username: string) { 
  // for (let x = 0; x < this.users.length; x++) {
  //     if (this.users[x].username === username) {  
  //       return this.users[x]; 
  //     }
  //   }
    return this.users.find(function(user) {
      return user.username === username;
    })
  }

  findUserByCredentials(username: string, password: string) { 
   for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {  
        return this.users[x]; 
      }
    }
  }

  updateUser(userId: string, user) { 
    var oldUser = this.findUserById(userId);
    var index = this.users.indexOf(oldUser);

    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;

  }

  deleteUser(userId) { 
     var oldUser = this.findUserById(userId);
     var index = this.users.indexOf(oldUser);
     this.users.splice(index, 1);
   }
}