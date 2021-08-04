import { Movie } from "./movieInterface";

export interface HorizontalSliderProps {
    title?: string;
    movies: Movie[];
}

export interface RenderItem {
    item:  Movie; 
    index: number;
}