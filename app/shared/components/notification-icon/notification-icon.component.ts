import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'notification-icon',
	templateUrl: 'notification-icon.component.html',
	styleUrls: ['./notification-icon.component.scss']
})
export class NotificationIconComponent implements OnInit {
	@Input() value;
	@Input() size = "50";
	@Output() valueChanged: EventEmitter<any> = new EventEmitter();

	constructor() {
	}

	ngOnInit(): void {

	}
}
