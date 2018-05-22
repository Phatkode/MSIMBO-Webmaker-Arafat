import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() { }

users = [
  { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/"},
  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
]
;

 
  createWidget(pageId, widget) {
    widget._id = Math.random();
    page.websiteId = websiteId;
   this.widgets.push(widget);
   return widget;
  }

  findPageById(pageId) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === WebsiteID)
        result.push(this.pages[i];

    }
  }
  
  return result;
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