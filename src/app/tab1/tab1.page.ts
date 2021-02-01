import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, ViewWillEnter, OnDestroy {
	data: any;
	selectedCategory: any = 'general';
	selectedCountry: any = 'ar';
	private subscription: Subscription;

	constructor(private newsService: NewsService, private router: Router) {
		this.subscription = this.newsService
			.getCategory()
			.subscribe(selectedCategory => {
				this.selectedCategory = selectedCategory;
			});
		this.subscription = this.newsService
			.getCountry()
			.subscribe(selectedCountry => {
				this.selectedCountry = selectedCountry;
			});
	}

	ngOnInit() {
		this.getNews();
	}

	ionViewWillEnter() {
		this.getNews();
	}

	getNews() {
		this.newsService
			.getData(this.selectedCountry, this.selectedCategory)
			.subscribe(data => {
				console.log(data);
				this.data = data;
			});
	}

	onGoToNewsSinglePage(article) {
		this.newsService.currentArticle = article;
		this.router.navigate(['/news-single']);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
