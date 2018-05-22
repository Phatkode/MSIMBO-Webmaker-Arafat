import { Injectable } from '@angular/core';
import { Page } from  '../models/page.model.client'

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }

pages: Page[] = [
  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
]

;

  createPage(websiteId: string, page: Page) {
    page._id = Math.floor(Math.random() * 10000).toString();
    page.websiteId = websiteId;
   this.pages.push(page);
   return page;
  }

 // 2. findWebsitesByUser(userId) - retrieves the websites in local websites array whose developerId matches the parameter userId
  findPageByWebsite(websiteId: string) {
    let result = [];
    for (let i = 0; i <= this.pages.length; i++){
      if (this.pages[i].websiteId) === userId) {
        result.push(this.websites[i]);
    }
  }

 return result;
}

// 3. findWebsiteById(websiteId) - retrieves the website in local websites array whose _id matches the websiteId parameter
findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {  
        return this.pages[i];
      }
    }
  }


updatePage(pageId: string, page: Page) { 
    let oldPage = this.findPageById(pageId);
    const index = this.pages.indexOf(oldPage);
    this.pages[index].name = page.name;
    this.pages[index].description = page.description;
}



deletePage(pageId: string) { 
     let oldPage = this.findPageById(PageId);
     const index = this.pages.indexOf(oldPage);
     this.pages.splice(index, 1);
   }

}