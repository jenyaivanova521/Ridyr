import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'RidyrDriverProfileListComponent',
  templateUrl: './ridyr-driver-profile-list.component.html',
  styleUrls: ['./ridyr-driver-profile-list.component.css'],
})
export class RidyrDriverProfileListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("home-search-tab ngOnInit");
  }

}
