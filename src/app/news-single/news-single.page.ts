import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-news-single',
	templateUrl: './news-single.page.html',
	styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
	article: any;

	constructor(private newsService: NewsService, private router: Router) {}

	ngOnInit() {
		console.log(this.newsService.currentArticle);
		this.article = this.newsService.currentArticle;
	}

}
