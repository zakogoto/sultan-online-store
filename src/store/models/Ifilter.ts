export interface IFilter {
    minPrice: number | null,
    maxPrice: number | null,
    manufacturers: string[],
    brands: string[],
    isClearFilter?: boolean,
}