import { resume } from '@/data/resume'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Page() {
  return (
    <>
      <div className="text-right">
        <Link
          href={resume.pdfLink}
          className="text-lg font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Download PDF`}
        >
          點此下載 PDF
        </Link>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2  pt-6 md:space-y-5">
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {resume.employment.label}
          </h2>
        </div>
        <div className="space-y-2 pt-6 md:space-y-5">
          {resume.employment.datas.map((e) => (
            <div key={e.company}>
              <div className="flex flex-col items-center justify-between md:grid-cols-3 md:flex-row">
                <p className="text-base font-bold leading-7 md:text-lg ">{e.position}</p>
                <div className="flex space-x-2">
                  <Link href={e.link}>
                    <span className="text-lg font-extrabold leading-9 tracking-tight text-blue-500 dark:text-blue-300 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
                      {e.company}
                    </span>
                  </Link>
                  <p className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
                    {e.companyZh}
                  </p>
                </div>
                <p className="text-sm font-bold leading-7 text-gray-500 dark:text-gray-400 md:text-lg">
                  {e.date}
                </p>
              </div>

              {e.tasks.map((t) => (
                <div key={t.title}>
                  <p className="text-lg font-bold leading-7 ">{`${t.title}: `}</p>
                  <ul className="list-disc pl-8">
                    {t.descriptions.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2  pt-6 md:space-y-5">
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {resume.education.label}
          </h2>
        </div>

        <div className="space-y-2 pt-6 md:space-y-5">
          <div className="flex flex-col items-center justify-between md:grid-cols-3 md:flex-row">
            <p className="text-base font-bold leading-7 md:text-lg ">
              {resume.education.datas.degree}
            </p>
            <div className="flex space-x-2">
              <p className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
                {resume.education.datas.school}
              </p>
            </div>
            <p className="text-sm font-bold leading-7 text-gray-500 dark:text-gray-400 md:text-lg">
              {resume.education.datas.date}
            </p>
          </div>

          <ul className="list-disc pl-8">
            {resume.education.datas.details.map((d) => (
              <li key={d.content}>
                {d.content} (
                <Link href={d.link}>
                  <span className="text-blue-500 dark:text-blue-300 ">{d.link}</span>
                </Link>
                )
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2  pt-6 md:space-y-5">
          <h2 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {resume.skills.label}
          </h2>
        </div>

        <div className="space-y-2 pt-6 md:space-y-5">
          <div className="flex  flex-col justify-between md:grid-cols-3 md:flex-row">
            {resume.skills.datas.map((s) => (
              <div key={s.type} className="pb-2">
                <p className="text-lg font-bold leading-7 ">{s.type}</p>
                <ul className="list-disc pl-8">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
