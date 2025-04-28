

export default async function MoviesDetails({params}: {params: Promise<{movieId: string}>}) {
      const movieId = (await params).movieId
      console.log(params)
    return (
      <>
      <h1 className="">Описание фильма {movieId}</h1>
      </>
    );
  }
  