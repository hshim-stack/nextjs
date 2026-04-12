import { APP_URL } from "@/app/(home)/page";
import MovieInfo from "@/app/components/movie-info";
import MovieVideos from "@/app/components/movie-trailers";
import { Suspense } from "react";

async function getMovie(id: string) {
    const response = await fetch(`${APP_URL}/${id}`);
    return response.json();
}

async function getMovieTrailers(id: string) {
    const response = await fetch(`${APP_URL}/${id}/videos`);
    return response.json();
}


export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <div> / they do not need to wait for each other */
        <Suspense fallback={<div>Loading movie info...</div>}>
            <MovieInfo id={id} /> {/* component 단위로 suspense를 걸 수 있다. */}
        </Suspense>
        <Suspense fallback={<div>Loading movie trailers...</div>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>

}