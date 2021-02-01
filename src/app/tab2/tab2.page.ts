import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
	category: any = 'general';
	country: any = 'ar';

	constructor(private newsService: NewsService) {}

	selectCategory(event) {
		if (event) {
			this.category = event.target.value;
			this.newsService.setCategory(this.category);
		}
	}

	selectCountry(event) {
		this.country = event.target.value;
		this.newsService.setCountry(this.country);
	}
}
