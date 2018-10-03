import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'HomeSuggestCard',
	templateUrl: './shared/components/home_suggest_card/home_suggest_card.component.html',
	styleUrls: ['./shared/components/home_suggest_card/home_suggest_card.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSuggestComponent implements OnInit, OnChanges {
	@Input() dir;
	@Input() square = false;
	imageSrc: string;
	items = [
		{
			name:'Manhattan Brew',
			type:'COFFEE SHOPS',
			src:'~/resources/images/sm-card-img-1.jpg',
		},
		{
			name:'Top Of The Rock',
			type:'THINGS TO DO',
			src:'~/resources/images/sm-card-img-2.jpg',
		},
		{
			name:'Chelsea Market',
			type:'COFFEE SHOPS',
			src:'~/resources/images/sm-card-img-3.jpg',
		},
		{
			name:'Lady Liberty',
			type:'THINGS TO DO',
			src:'~/resources/images/sm-card-img-4.jpg',
		},		
	];
	content_height = 0;
	constructor() { }

	ngOnInit() {
		this.content_height = 230 * this.items.length/2 + 30;
	}

	ngOnChanges(changes: SimpleChanges) {
		
	}

}
