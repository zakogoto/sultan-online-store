import { IProduct } from "./IProduct";
import { IFilter } from "./Ifilter";

export interface ICatalog {
    page: number;
    limit: number;
    sort: {
        name: string,
        order: string,
    };
    filters: IFilter
}