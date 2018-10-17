import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'HomeSearchTabOverlap',
	templateUrl: './shared/components/home_search_tab_overlap/home_search_tab_overlap.component.html',
	styleUrls: ['./shared/components/home_search_tab_overlap/home_search_tab_overlap.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSearchTabOverlapComponent implements OnInit {
	@Input() dir;
	@Input() square = false;	

	constructor() { }

	ngOnInit() {
		console.log("home-search-tab-overlap");
	}


}
