import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'HomeSearchTabComponent',
  templateUrl: './home-search-tab.component.html',
  styleUrls: ['./home-search-tab.component.css'],
})
export class HomeSearchTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("home-search-tab ngOnInit");
  }

}
