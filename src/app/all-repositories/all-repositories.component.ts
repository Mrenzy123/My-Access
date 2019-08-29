import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository';
@Component({
  selector: 'app-all-repositories',
  templateUrl: './all-repositories.component.html',
  styleUrls: ['./all-repositories.component.css']
})
export class AllRepositoriesComponent implements OnInit {
  myrepos: Repository[]
  constructor() { }

  ngOnInit() {
  }

}
