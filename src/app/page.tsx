import Input from "../components/Input/Input"
import Slider from "../components/Slider/Slider"

export default function Home() {

  return (
    <div className="max-w-[1200] mx-auto my-0">
      <main>
        <section className="mb-6">
          <article>
          <h6 className="text-[64px] text-[#ffffff]">Movie</h6>
          <p className="text-[#8E95A9] text-base">List of movies and TV Shows</p>
          </article>
        </section>
        <section>
        <Input />
        </section>
        <section>
          <div>
            <h2>Movies</h2>
            <Slider />
          </div>
        </section>
      </main>

    </div>
  );
}
