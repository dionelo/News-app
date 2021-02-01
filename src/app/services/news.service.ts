import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NewsService {
	private API_URL = environment.apiUrl;
	private API_KEY = environment.apiKey;

	currentArticle: any;
	private selectedCategory = new Subject<any>();
	private selectedCountry = new Subject<any>();

	constructor(private http: HttpClient) {}

	getData(country, category) {
		return this.http.get(
			`${this.API_URL}/top-headlines?country=${country}&category=${category}&apiKey=${this.API_KEY}`
		);
	}

	setCategory(category: any) {
		this.selectedCategory.next(category);
	}

	setCountry(country: any) {
		this.selectedCountry.next(country);
	}

	getCategory(): Observable<any> {
		return this.selectedCategory.asObservable();
	}

	getCountry(): Observable<any> {
		return this.selectedCountry.asObservable();
	}
}
