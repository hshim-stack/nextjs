import Link from "next/link";

export const APP_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
    title: "Home",
};


async function getMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(APP_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() { // async function을 사용하면  await 키워드를 사용할 수 있다.
    const movies = await getMovies();
    return <div>{movies.map((movie: any) => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</div>;
}

