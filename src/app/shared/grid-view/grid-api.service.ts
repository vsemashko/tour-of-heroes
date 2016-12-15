import { Injectable } from '@angular/core';

export type SORT_ORDER = 'asc' | 'desc';

export interface GridOptions {
	api?: GridApi;
}

export interface SortConfig {
	key?: string,
	order?: SORT_ORDER
}

@Injectable()
export class GridApi {
	public sort: SortConfig = {};
	public filter: Map<string, string> = new Map<string, string>();
	public search: string;
}