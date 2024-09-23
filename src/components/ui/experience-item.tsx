import React from 'react';

interface Technology {
  name: string;
}

interface Date {
  date: string;
}

interface ExperienceItemProps {
  dateRange: Date[];
  companyName: string;
  companyUrl: string;
  jobTitle: string;
  description: any;
  technologies: Technology[];
}

const DateRangeHeader: React.FC<{ dateRange: Date[] }> = ({ dateRange }) => {
  const startDate = dateRange[0]?.date;
  const endDate = dateRange[1]?.date;

  return (
    <div>
      <p>{startDate} —</p>
      <p>{endDate}</p>
    </div>
  );
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  dateRange,
  companyName,
  companyUrl,
  jobTitle,
  description,
  technologies
}) => {
  const ariaLabel = `${dateRange[0]?.date} – ${dateRange[dateRange.length - 1]?.date}`;
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-violet-3/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-9 sm:col-span-2" aria-label={ariaLabel}>
          <DateRangeHeader dateRange={dateRange} />
        </header>
      <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-violet-12">
            <div>
              <a className="inline-flex items-baseline font-medium leading-tight text-gray-12 hover:text-mint focus-visible:text-mint group/link text-base" href={companyUrl} target="_blank" rel="noreferrer noopener" aria-label={`${jobTitle} at ${companyName} (opens in a new tab)`}>
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>{jobTitle} · 
                  <span className="inline-block ml-1">{companyName}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <div className="mt-2 text-sm leading-normal">{description}</div>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-mint/10 px-3 py-1 text-xs font-medium leading-5 text-mint ">
                  {tech.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;