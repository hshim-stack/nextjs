import { APP_URL } from "@/app/(home)/page";
import MovieInfo from "@/app/components/movie-info";
import MovieVideos from "@/app/components/movie-trailers";
import { Suspense } from "react";

async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${APP_URL}/${id}`);
    return response.json();
}

async function getMovieTrailers(id: string) {

    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${APP_URL}/${id}/videos`);
    return response.json();
}


export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // they do not need to wait for each other 
    return <div>
        <h3>Movie Info</h3>
        <Suspense fallback={<div>Loading movie info...</div>}>
            <MovieInfo id={id} /> {/* component 단위로 suspense를 걸 수 있다. */}
        </Suspense>
        <h3>Movie Trailers</h3>
        <Suspense fallback={<div>Loading movie trailers...</div>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>

}