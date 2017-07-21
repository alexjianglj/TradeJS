import {ConstantsService} from './services/constants.service';
import {Component, ChangeDetectionStrategy, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {SocketService}  from './services/socket.service';
import {SystemService}  from './services/system.service';
import {CacheService} from './services/cache.service';

@Component({
	selector: 'app',
	template: `
		<div modalAnchor></div>
		<router-outlet></router-outlet>
	`,
	styleUrls: [
		'../node_modules/font-awesome/css/font-awesome.css',
		'./style/components/contextmenu'
		],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {

	constructor(private _cacheService: CacheService,
				private _constantsService: ConstantsService,
				private _socketService: SocketService,
				private _systemService: SystemService) {
	}

	ngAfterViewInit() {
		document.body.addEventListener('contextmenu', e => e.preventDefault(), false);

		this._constantsService.init();
		this._socketService.init();
		this._systemService.init();
		this._cacheService.init();


		$(document).on('keydown keyup keypress', function(e) {
			if (e.target.nodeName.toLowerCase() !== 'canvas') {
				// e.preventDefault();
			}
		});
	}
}