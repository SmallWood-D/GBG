import { Component, OnInit } from '@angular/core';
import { RECENT } from '../mock-recent';

@Component({
  selector: 'app-recent-repos',
  templateUrl: './recent-repos.component.html',
  styleUrls: ['./recent-repos.component.css']
})
export class RecentReposComponent implements OnInit {

  recent = RECENT;

  constructor() { }

  ngOnInit() {
  }

}
