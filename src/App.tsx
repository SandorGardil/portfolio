import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../src/components/ui/tooltip"
import ExperienceItem from "./components/ui/experience-item"
import Navigation from "./components/ui/navigation"
import Spotlight from "./components/ui/spotlight"
const experienceData = [
  {
    dateRange: "July 2024 — Present",
    companyName: "Nagios",
    companyUrl: "https://www.nagios.com/",
    jobTitle: "Full Stack Software Developer",
    description:
      "Led the product management of Nagios Network Analyzer, overseeing its growth and development. Played a key role in the UI overhaul of Nagios Log Server, implementing significant frontend improvements to enhance usability and design.",
    technologies: [
      { name: "jQuery" },
      { name: "PHP" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "MySQL" },
      { name: "CodeIgniter" },
    ],
  },
  {
    dateRange: "Jan 2023 — July 2024",
    companyName: "Nagios",
    companyUrl: "https://www.nagios.com/",
    jobTitle: "Jr. Full Stack Software Developer",
    description:
      "Developed and enhanced multiple features across both front-end and back-end, with a primary focus on improving the functionality and user experience of Nagios’s flagship product, Nagios XI, while resolving bugs to improve overall user experience.",
    technologies: [
      { name: "jQuery" },
      { name: "PHP" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "Testcafe" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "MySQL" },
    ],
  },
  {
    dateRange: "Sept 2022 — Jan 2023",
    companyName: "Nagios",
    companyUrl: "https://www.nagios.com/",
    jobTitle: "Intern Software Developer",
    description:
      "Prototyped several features across four different Nagios products (Nagios XI, Log Server, Network Analyzer, Fusion), introducing new ideas to enhance functionality while deepening my familiarity with the software.",
    technologies: [
      { name: "jQuery" },
      { name: "PHP" },
      { name: "CSS" },
      { name: "HTML" },
    ],
  },
];


function App() {
  return (
    <>
      <div className="group/spotlight relative">
        <Spotlight />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-12 sm:text-5xl"><a href="/">Sandor Gardil</a></h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-12 sm:text-xl">Full Stack Software Engineer</h2>
                {/* <p className="mt-4 max-w-xs leading-normal">add subtext here</p> */}
                <Navigation />
              </div>
              <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-4 text-xs shrink-0">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a className="block hover:text-violet-12" href="https://www.linkedin.com/in/sandor-gardil/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
                <li className="mr-4 text-xs shrink-0">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a className="block hover:text-violet-12" href="https://github.com/SandorGardil" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
                <li className="mr-4 text-xs shrink-0">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger>
                        <a className="block hover:text-violet-12" href="mailto:sandorg12@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)"><span className="sr-only">Email me</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/></svg></a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Email me</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              </ul>
            </header>
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                  <p className="mb-4">
                    Back in 2022, I started learning programming with the goal of building a website with a friend. Just a few weeks into my journey, I was hired as an intern at 
                    <a className="font-medium text-gray-12 hover:text-mint focus-visible:text-mint" href="https://www.nagios.com/" target="_blank" rel="noreferrer noopener" aria-label="advertising agency (opens in a new tab)"> Nagios</a>
                    , where I quickly gained hands-on experience.
                  </p>
                  {/* <p className="mb-4">
                    Fast forward to today, I’m a Full Stack Developer at Nagios, where I’ve had the opportunity to take on product ownership roles, lead UI overhauls, and tackle complex technical challenges.
                  </p> */}
                  <p className="mb-4">
                    As a software generalist, I’m passionate about creating user-focused solutions and continuously learning new technologies. When I'm not at my computer, I’m usually staying active—whether that’s working out, training martial arts, or going for walks—or spending time with those I care about.
                  </p>
              </section>
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:h-[0px] lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-violet-12 lg:sr-only">Experience</h2>
                </div>
                <div>
                  <ol className="group/list">
                    {experienceData.map((experience, index) => (
                      <ExperienceItem
                        key={index}
                        dateRange={experience.dateRange}
                        companyName={experience.companyName}
                        companyUrl={experience.companyUrl}
                        jobTitle={experience.jobTitle}
                        description={experience.description}
                        technologies={experience.technologies}
                      />
                    ))}
                  </ol>
                  <div className="mt-12">
                    <a className="inline-flex items-baseline font-medium leading-tight text-violet-12 hover:text-mint focus-visible:text-mint font-semibold text-violet-12 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)">
                      <span>View Full <span className="inline-block">Resume<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                    </a>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
