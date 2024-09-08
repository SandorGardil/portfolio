import { Header } from './components/header.tsx';
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home.tsx';
import  About  from './pages/About.tsx';
import  Resume  from './pages/Resume.tsx';


function App() {
  return (
    <>
      <div className="group/spotlight relative">
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{background: "radial-gradient(600px at 1375px 82px, rgba(29, 78, 216, 0.15), transparent 80%)"}}></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Sandor Gardil</a></h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Software Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">First name Him, last name Othy</p>
              </div>
              <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/sandor-gardil/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
                </li>
              </ul>
            </header>
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci distinctio quae, voluptatibus ab maiores blanditiis eum aspernatur id nostrum, nihil quia? Eius officiis molestiae quisquam maiores libero blanditiis veniam inventore eum voluptatibus delectus. Exercitationem laboriosam dolorum numquam nihil assumenda reprehenderit ipsam ipsum, laudantium incidunt asperiores consequuntur hic vitae cupiditate rerum quia consectetur nemo natus amet. Accusamus laboriosam vel minima magni deserunt excepturi ipsum soluta quaerat culpa? Possimus asperiores nisi excepturi voluptas dignissimos quo doloremque cupiditate ipsum. Libero sequi deserunt quae odit alias dignissimos velit ducimus.
                  </p>
                  <p className="mb-4">
                    Est quidem, ratione hic quia ea ut autem dolorem eum nesciunt pariatur distinctio natus dolor sequi quos! Nihil quisquam nemo voluptates. Eos soluta pariatur possimus neque dolores. Obcaecati veniam eaque architecto quae veritatis, tempora facere doloremque a id eveniet cumque omnis quod voluptatum! Blanditiis ad, cumque eaque, laborum aperiam vitae eos amet aut vel eligendi dicta error veritatis in? Quis voluptatum necessitatibus animi modi ab eaque sunt. Perferendis, vel libero voluptate facilis, praesentium quia aliquid exercitationem tenetur et enim quis accusantium, voluptates corporis non dolores labore. Rerum ipsum ex hic eum, nulla veritatis facere quam nam optio! Soluta perspiciatis voluptatem rem laboriosam quod? Fugit quisquam praesentium at eveniet libero iusto sint saepe?
                  </p>
                   
              </section>
              <section id="expierence" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <div>
                  
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      {/* <Header />
      <div className="flex mx-10 mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div> */}
    </>
  )
}

export default App
