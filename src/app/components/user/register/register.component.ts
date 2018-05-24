import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../Services/user.service.client'
import { User } from '../../../Model/user.model.client'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@ViewChild('f') registerform: NgForm;

username: string;
password: string;
verifyPassword: string;
passwordError: boolean;
usernameError: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }



register(){
 this.username = this.registerform.value.username;
 this.password = this.registerform.value.password;
 this.verifyPassword = this.registerform.value.verifyPassword;
// console.log(this.password);
// console.log(this.verifyPassword);
 if(this.password !== this.verifyPassword) {
 	this.passwordError = true;
 	this.usernameError = true;
 } else {
 		this.passwordError = false;
 		const user: User = this.userService.findUserByUsername(this.username)
 		if(user){
 			this.usernameError = true;
 		} else {
 			this.usernameError = false;
 			this.passwordError = false; 			
 			const newUser: User = {
 				_id: "";
 				username: this.username,
 				password: this.password,
 				firstName: "",
 				lastName: "",
 				email: "",

 			};
 			this.userService.createUser(newUser);
 			var id = this.userService.findUserByUsername(this.username)
 			this.router.navigate(['/user/' + id]);
 		}

 }
}
}