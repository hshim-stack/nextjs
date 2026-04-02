const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
    title: "Home",
};

async function getMovies() {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() { // async function을 사용하면  await 키워드를 사용할 수 있다.
    const movies = await getMovies();
    return <h1>{JSON.stringify(movies)}</h1>;
}

