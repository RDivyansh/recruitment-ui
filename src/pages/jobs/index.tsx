import { jobs } from '../../data/jobs'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Jobs(){
  return (
    <main className="min-h-screen bg-bg p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Job Listings</h1>
          <div className="text-muted">Showing {jobs.length} roles</div>
        </header>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {jobs.map(j=>(
            <motion.article key={j.id} whileHover={{ y:-6 }} className="p-6 bg-surface border border-neutral-800 rounded-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-white">{j.title}</h2>
                  <div className="text-sm text-muted mt-1">{j.company} • {j.location}</div>
                </div>
                <div className="text-primary font-bold">{j.type}</div>
              </div>
              <p className="text-gray-300 mt-4">{j.summary}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {j.tags.map(t=> <span key={t} className="text-sm px-2 py-1 bg-neutral-900 rounded">{t}</span>)}
                </div>
                <Link href={`/jobs/${j.id}`}><a className="px-4 py-2 bg-primary text-black rounded-lg">View</a></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
