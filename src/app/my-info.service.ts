import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import {myOwnRepo} from '../../all-info'

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {
  getmyRepo(){
    return myOwnRepo
  }

  getmyUser(){
    return User
  }

  getmyRepos(id){
    for (let repo of myOwnRepo){
      if (repo.id == id){
        return repo;
      }
    }
  }
  constructor() { }
}
