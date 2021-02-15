import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	InAppBrowser,
	InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-news-single',
	templateUrl: './news-single.page.html',
	styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
	article: any;

	constructor(
		private newsService: NewsService,
		private router: Router,
		private iab: InAppBrowser
	) {}

	ngOnInit() {
		this.article = this.newsService.currentArticle;
	}

	openArticle() {
		const url = this.article.url;
		const target = '_self';
		const options: InAppBrowserOptions = {
			closebuttoncaption: '← BACK TO NEWS PIPER',
			closebuttoncolor: '#222428',
			toolbarcolor: '#ffc409',
			hidenavigationbuttons: 'yes',
			hideurlbar: 'yes'

		};
		this.iab.create(url, target, options);
	}
}
