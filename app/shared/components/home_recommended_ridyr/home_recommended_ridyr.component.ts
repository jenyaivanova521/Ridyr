import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'HomeRecommendedRidyr',
	templateUrl: './shared/components/home_recommended_ridyr/home_recommended_ridyr.component.html',
	styleUrls: ['./shared/components/home_recommended_ridyr/home_recommended_ridyr.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRecommendedRidyrComponent implements OnInit, OnChanges {
	@Input() dir;
	@Input() square = false;
	imageSrc: string;
	list = [
		{
			image:"~/resources/images/card-img-3.jpg",
			price:"$85.50",
			car:"TOYOTA CAMRY"
		},
		{
			image:"~/resources/images/card-img-2.jpg",
			price:"$99.80",
			car:"LAND ROVER II"
		}

	];

	constructor() { }

	ngOnInit() {
		
	}

	ngOnChanges(changes: SimpleChanges) {
		
	}

}
