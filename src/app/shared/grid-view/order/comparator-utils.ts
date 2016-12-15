export interface Comparator {
	(first: any, second: any, key: string): number;
}

export class ComparatorUtils {
	static getComparatorFromType(type: any): Comparator {
		switch (typeof  type) {
			case 'string':
				return stringComparator;
			case 'number':
			default:
				return numberComparator;
		}
	}
}

export function stringComparator(first: any, second: any, key: string): number {
	return second[key].localeCompare(first[key]);
}

export function numberComparator(first: any, second: any, key: string): number {
	return second[key] - first[key];
}