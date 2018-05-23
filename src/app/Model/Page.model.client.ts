export class Page {
	_id: string;
	name: string;
	websiteId: string;
	description: string;

	constructor(id, name, websiteId, description){
		this._id = id;
		this.name = name;
		this.websiteId = websiteId;
		this.description = description;
	}



}