import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterBy', pure: false})
export class FilterByPipe implements PipeTransform {
	transform(rows: any[], filters: Map<string, string>) {
		let result: any[] = rows.slice();
		filters.forEach((value: string, key: string) => {
			result = result.filter((row: any) => {
				return this.toLowerCase(row[key]).indexOf(this.toLowerCase(value)) >= 0
			});
		});
		return result;
	};

	private toLowerCase(str: any): string {
		return str ? str.toString().toLowerCase() : '';
	}
}