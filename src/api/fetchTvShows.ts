export async function fetchTvShows() {
    const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=5`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_KINOPOISK_APIKEY,
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json();
    return data
  }

