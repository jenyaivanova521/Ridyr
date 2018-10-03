import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'HomeTabOverlap',
	templateUrl: './shared/components/home_tab_overlap/home_tab_overlap.component.html',
	styleUrls: ['./shared/components/home_tab_overlap/home_tab_overlap.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTabOverlapComponent implements OnInit, OnChanges {
	@Input() dir;
	@Input() square = false;
	imageSrc: string;

	constructor() { }

	ngOnInit() {
		
	}

	ngOnChanges(changes: SimpleChanges) {
		
	}

}
