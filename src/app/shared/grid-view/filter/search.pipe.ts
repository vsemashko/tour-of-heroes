import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search', pure: false})
export class SearchPipe implements PipeTransform {
	transform(rows: any[], search: string) {
		let result: any[] = rows.slice();
		if (search) {
			result = result.filter((row: any) => {
				return this.has(row, search);
			});
		}
		return result;
	};

	private has(obj: any, value: string): boolean {
		if (typeof obj === 'object') {
			return this.hasInObjectProperties(obj, value);
		} else {
			return this.toLowerCase(obj).indexOf(this.toLowerCase(value)) >= 0;
		}
	}

	private hasInObjectProperties(obj: any, value: string) {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (this.has(obj[key], value)) {
					return true;
				}
			}
		}
		return false;
	}

	private toLowerCase(str: any): string {
		return str ? str.toString().toLowerCase() : '';
	}
}