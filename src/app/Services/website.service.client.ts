import { Injectable } from '@angular/core';
import { Website } from  '../Model/website.model.client'

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor() { }

websites: Website[] = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
  { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];

// 1. createWebsite(userId, website) - adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
  createWebsite(userId: string, website: Website) {
    website._id = Math.floor(Math.random() * 10000).toString();
    website.developerId = userId;
    this.websites.push(website);
    return website;
  }

  
// 2. findWebsitesByUser(userId) - retrieves the websites in local websites array whose developerId matches the parameter userId
  findWebsiteByUser(userId: string) {
    var result = [];
    for (let i = 0; i <= this.websites.length; i++){
      if (this.websites[i].developerId === userId) {
        result.push(this.websites[i]);
    }
  }
 return result;
}

// 3. findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the websiteId parameter
findWebsiteById(websiteId: string) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {  
        return this.websites[x];
      }
    }
  }


updateWebsite(websiteId: string, website: Website) { 
    var oldWeb = this.findWebsiteById(websiteId);
    var index = this.websites.indexOf(oldWeb);
    this.websites[index].name = website.name;
    this.websites[index].description = website.description;
}



deleteWebsite(websiteId: string) { 
     var web = this.findWebsiteById(websiteId);
     var index = this.websites.indexOf(web);
     this.websites.splice(index, 1);
   }

}

