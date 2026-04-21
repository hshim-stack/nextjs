import { APP_URL } from "@/app/(home)/page";

async function getMovieInfo(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${APP_URL}/${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovieInfo(id);
    return <div>{JSON.stringify(movie)}</div>;
} 