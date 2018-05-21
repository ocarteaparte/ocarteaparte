import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: String;
  email: String;
  password: String;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      email: this.email,
      username: this.username,
      password: this.password
    }
    this.registrationService.registerUser(user).subscribe( data => {
      console.log(data);
    });
  }
}
