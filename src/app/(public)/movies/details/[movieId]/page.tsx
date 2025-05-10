// export async function getFilms(id) {
//   const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
//     method: 'GET',
//     headers: {
//       'X-API-KEY': process.env.NEXT_PUBLIC_KINOPOISK_APIKEY,
//       'Content-Type': 'application/json',
//     },
//   })
//   const data = res.json()
//   return data
// }


export default async function MoviesDetails({params}: {params: Promise<{movieId: string}>}) {
      // const movieId = await getFilms(params.movieId)
      const movieId = (await params).movieId
      // console.log(movieId)
    return (
      <>
      <h1 className=""></h1>
      </>
    );
  }
  