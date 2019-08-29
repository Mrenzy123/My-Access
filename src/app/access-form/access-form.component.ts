import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Repository} from '../repository';
import { Router } from '@angular/router';


@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {
 
  // router
  goToUrl(id){
    this.router.navigate(['/display1',id])
  }
  // myusers:User[]
  myrepos: Repository[]
  myUser1:User
  constructor( private router:Router) {
    
   }

  ngOnInit() {
    
  }

}
