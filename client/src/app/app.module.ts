// Lib
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocketService} from './services/socket.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRouter} from './app.routing';

import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {ChartOverviewComponent} from './components/chart-overview/chart-overview.component';
import {AuthGuard} from './guards/auth.guard';
import {UserService} from './services/user.service';
import {LoginComponent} from './components/login/login.component';
import {ConstantsService} from './services/constants.service';
import {DialogComponent} from './components/dialog/dialog.component';
import {ModalComponent} from './components/modal/modal.component';
import {DialogAnchorDirective} from './directives/dialoganchor.directive';
import {ModalAnchorDirective} from './directives/modalanchor.directive';
import {ModalService} from './services/modal.service';
import {InstrumentsService} from './services/instruments.service';
import {ResizableDirective} from './directives/resizable.directive';
import {ChartBoxComponent} from './components/chart-box/chart-box.component';
import {BacktestSettingsComponent} from './components/backtest-settings/backtest-settings.component';
import {BacktestReportComponent} from './components/backtest-report/backtest-report.component';
import {CacheService} from './services/cache.service';
import {BacktestComponent, GroupIdsPipe} from './components/backtest/backtest.component';
import {AuthenticationService} from './services/authenticate.service';
import {customHttpProvider} from './services/http.service';
import {AlertService} from './services/alert.service';
import {AlertComponent} from './components/alert/alert.component';
import {RegisterComponent} from './components/register/register.component';
import {HttpModule} from '@angular/http';
import {UserOverviewComponent} from './components/user-overview/user.overview.component';
import {OrderService} from './services/order.service';
import {ChannelOverviewComponent} from './components/channel-overview/channel-overview.component';
import {GroupByPipe, PortfolioComponent} from './components/portfolio/portfolio.component';
import {ProfileComponent} from './components/profile/profile.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ParseCommentContentPipe, SocialFeedComponent} from './components/social-feed/social.feed.component';
import {ChannelRowComponent} from './components/channel-row/channel.row.component';
import {ProfileChannelOverviewComponent} from './components/profile-channel-overview/profile.channel.overview.component';
import {ChannelService} from './services/channel.service';
import {ChannelDetailsModalComponent} from './components/channel-details-modal/channel.details.modal.component';
import {CommentBoxComponent} from './components/comment-box/comment-box.component';
import {CommentService} from "./services/comment.service";
import {PasswordResetComponent} from "./components/password-reset/password-reset.component";
import {RequestPasswordResetComponent} from "./components/request-password-reset/request-password-reset.component";
import {BootstrapService} from "./services/bootstrap.service";
import { EventOverviewComponent } from './components/event-overview/event-overview.component';
import { NewsService } from './services/news.service';

@NgModule({
	declarations: [
		AppComponent,
		BacktestComponent,
		BacktestReportComponent,
		BacktestSettingsComponent,
		ChartBoxComponent,
		ChartOverviewComponent,
		DialogAnchorDirective,
		DialogComponent,
		EventOverviewComponent,
		GroupIdsPipe,
		ParseCommentContentPipe,
		SocialFeedComponent,
		ChannelRowComponent,
		LoginComponent,
		PasswordResetComponent,
		RequestPasswordResetComponent,
		RegisterComponent,
		ModalComponent,
		ModalAnchorDirective,
		ResizableDirective,
		ChannelOverviewComponent,
		AlertComponent,
		UserOverviewComponent,
		PortfolioComponent,
		GroupByPipe,
		ProfileComponent,
		ProfileChannelOverviewComponent,
		SettingsComponent,
		ChannelDetailsModalComponent,
		CommentBoxComponent
	],
	imports: [
		BrowserModule,
		AppRouter,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		MultiselectDropdownModule,
	],
	providers: [
		customHttpProvider,
		AuthGuard,
		AlertService,
		AuthenticationService,
		UserService,
		ChannelService,
		CommentService,
		BootstrapService,
		NewsService,
		
		{provide: OrderService, useClass: OrderService},
		{provide: ConstantsService, useClass: ConstantsService},
		{provide: SocketService, useClass: SocketService},
		{provide: ModalService, useClass: ModalService},
		{provide: InstrumentsService, useClass: InstrumentsService},
		{provide: CacheService, useClass: CacheService}
	],
	bootstrap: [
		AppComponent
	],

	entryComponents: [DialogComponent, ChannelDetailsModalComponent]
})

export class AppModule {
}