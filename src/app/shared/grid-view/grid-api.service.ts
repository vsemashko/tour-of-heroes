import { Injectable } from '@angular/core';

export interface GridOptions {
    api?: GridApi;
}

@Injectable()
export class GridApi {
    number = 0;
}