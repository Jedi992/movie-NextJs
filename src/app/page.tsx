import Header from "../components/Header/Header"
import Input from "../components/Input/Input"

export default function Home() {

  return (
    <div className="max-w-[1200] mx-auto my-0">
      <main>
        <section className="mb-6">
          <article>
          <h6 className="text-[64px] text-[#ffffff]">MaileHereko</h6>
          <p className="text-[#8E95A9] text-base">List of movies and TV Shows</p>
          </article>
        </section>
        <section>
        <Input />
        </section>
      </main>

    </div>
  );
}
