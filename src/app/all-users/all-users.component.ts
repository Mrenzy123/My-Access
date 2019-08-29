import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  myusers:User[]
  constructor() { }

  ngOnInit() {
  }

}
