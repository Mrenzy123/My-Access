import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import {Repository} from './repository';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  myuser2:User
  myrepo2:Repository[]

  constructor(private http:HttpClient) {
    this.myuser2 = new User("","", "", 0);
    this.myrepo2 = [];
   }

   userRequest(id){
    interface ApiResponse{
      login: string;
      avatar_url:string;
      created_at:string;
      public_repos:number
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+id+'?access_token='+ environment.myApi).toPromise().then(response=>{
        this.myuser2.login = response.login
        this.myuser2.avatar_url = response.avatar_url
        this.myuser2.created_at = response.created_at
        this.myuser2.public_repos += response.public_repos
        // console.log(this.myuser2)
        resolve()
      },
      error=>{
        this.myuser2.avatar_url = "sorry"
        this.myuser2.login = "sorry"
        this.myuser2.created_at = "sorry"

        reject(error)
      })
    })
    return promise
  }

  repoRequest(id1){
    interface ApiResponse{
      full_name: string;
      description:string;
      created_at:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+id1+'/repos?access_token='+ environment.myApi).toPromise().then(response=>{
      for(var i in response){
        this.myrepo2.push(new Repository(response[i].full_name, response[i].description, response[i].created_at))
      } 
        resolve()
      },
      error=>{
        this.myuser2.avatar_url = "sorry"
        this.myuser2.login = "sorry"
        this.myuser2.created_at = "sorry"

        reject(error)
      })
    })
    return promise
  }
}
