import Input from "../components/Input/Input"
import SliderMovie from "../components/SliderMovie/SliderMovie"
import SliderTvShows from "../components/SliderTvShows/SliderTvShows"

export default function Home() {

  return (
    <div className="max-w-[1200] mx-auto my-0">
      <main>
        <section className="mb-6">
          <article>
            <h6 className="text-[64px] text-[#ffffff]">MovieApp</h6>
            <p className="text-[#8E95A9] text-base">List of movies and TV Shows</p>
          </article>
        </section>
        <section>
          <Input />
        </section>
        <section>
          <div>
            
            <section className="mt-4">
            <h2>Movies</h2>
              <SliderMovie />
              </section>
            <section className="mt-4">
              <h2>TV Shows</h2>
              <SliderTvShows />
            </section>
          </div>
        </section>
      </main>

    </div>
  );
}
