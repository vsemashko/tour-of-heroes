import { Pipe, PipeTransform } from '@angular/core';
import { SortConfig } from '../grid-api.service';
import { Comparator, ComparatorUtils } from './comparator-utils';

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {
	transform(rows: any[], sort: SortConfig) {
		let result: any[] = rows.slice();
		if (!sort.key) {
			return rows;
		}
		return result.sort((first: any, second: any) => {
			let comparator: Comparator = ComparatorUtils.getComparatorFromType(first[sort.key]);
			let compareResult: number = comparator(first, second, sort.key);
			return compareResult * this.getOrder(sort);
		});
	};

	private getOrder(sort: SortConfig): number {
		return (sort.order === 'desc' ? 1 : -1);
	}
}