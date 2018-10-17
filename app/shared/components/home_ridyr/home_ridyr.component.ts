import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'HomeRidyr',
	templateUrl: './shared/components/home_ridyr/home_ridyr.component.html',
	styleUrls: ['./shared/components/home_ridyr/home_ridyr.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeRidyrComponent implements OnInit, OnChanges {
	@Input() dir;
	@Input() square = false;
	imageSrc: string;

	list = [
		{
			image: "~/resources/images/rd-img-1.jpg",
			name: "James Harrington"
		},
		{
			image: "~/resources/images/rd-img-2.jpg",
			name: "Lacey-Mae Howe"
		},
		{
			image: "~/resources/images/rd-img-3.jpg",
			name: "Amy Ford"
		},
		{
			image: "~/resources/images/rd-img-4.jpg",
			name: "Susie Wright"
		},

	];
	constructor() { }

	ngOnInit() {
		
	}

	ngOnChanges(changes: SimpleChanges) {
		
	}

}
