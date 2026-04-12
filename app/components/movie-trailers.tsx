import { APP_URL } from "@/app/(home)/page";

async function getMovieTrailers(id: string) {
    const response = await fetch(`${APP_URL}/${id}/videos`);
    return response.json();
}


export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getMovieTrailers(id);
    return <div>{JSON.stringify(videos)}</div>;
}
