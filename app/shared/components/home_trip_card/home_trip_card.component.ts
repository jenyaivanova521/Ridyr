import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'HomeTripCard',
	templateUrl: './shared/components/home_trip_card/home_trip_card.component.html',
	styleUrls: ['./shared/components/home_trip_card/home_trip_card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTripCardComponent implements OnInit, OnChanges {
	@Input() dir;
	@Input() square = false;
	imageSrc: string;

	constructor() { }

	ngOnInit() {
		
	}

	ngOnChanges(changes: SimpleChanges) {
		
	}

}
