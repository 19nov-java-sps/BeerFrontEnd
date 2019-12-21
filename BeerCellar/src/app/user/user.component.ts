import { Component, OnInit } from '@angular/core';
import { User } from '../services/httpclient.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[]; 

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(response => this.handleGoodResponse(response));
  }

  handleGoodResponse(response) {
    this.users = response; 
  }

  deleteUser(user: User): void {
    this.httpClientService.deleteUser(user).subscribe(data => {
      this.users = this.users.filter(person => person !== user); 
    })
  };

}
