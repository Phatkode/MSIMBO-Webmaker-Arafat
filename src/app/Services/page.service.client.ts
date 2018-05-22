import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class PageService {

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

  createPage(websiteId, page) {
    page._id = Math.random();
    page.websiteId = websiteId;
   this.pages.push(page);
   return page;
  }

  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === WebsiteID)
        result.push(this.pages[i];

    }
  }

   updateUser(pageId, page) { 
    let oldPage = this.findPageById(pageId);
    const index = this.pages.indexOf(oldPage);

    this.users[index].username = user.username;
    this.users[index].password = user.password;
    this.users[index].firstName = user.firstName;
    this.users[index].lastName = user.lastName;
    this.users[index].email = user.email;


deletePage(pageId) { 
     var oldUser = this.findUserById(userId);
     var index = this.users.indexOf(oldUser);
     this.users.splice(index, 1);




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
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]
;

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