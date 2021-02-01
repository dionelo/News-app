import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'split',
})
export class SplitPipe implements PipeTransform {
	transform(text: string, by: string, index: number = 0): unknown {
		const title = text.split(by);
		return title[index];
	}
}
