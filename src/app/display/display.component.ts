import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Repository} from '../repository';
import {GetServiceService} from '../get-service.service'
import {  ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  getService:GetServiceService
  myrepos:Repository[]
  myUser1:User

  goToForm(){
    location.reload()
    this.router.navigate(['/'])
  }

  constructor(private router:Router, private location: Location, private route:ActivatedRoute,private getService1:GetServiceService) {
  
    
   }

  ngOnInit() {

 
    let id = this.route.snapshot.paramMap.get('id');
    this.getService1.userRequest(id)
    this.getService1.repoRequest(id)

    
 
    this.myrepos = this.getService1.myrepo2
    this.myUser1 = this.getService1.myuser2
  }

}
