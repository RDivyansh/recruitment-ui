import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <main className="min-h-screen bg-bg text-gray-100 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <section>
            <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-5xl font-extrabold leading-tight text-white">
              Find your next <span className="text-primary">opportunity</span>
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-6 text-muted max-w-xl">
              A modern recruitment portal — browse curated roles, submit resumes, and track your applications. Designed with a sleek black & red theme and buttery animations.
            </motion.p>
            <div className="mt-8 flex gap-4">
              <Link href="/jobs"><a className="inline-block bg-primary text-black px-6 py-3 rounded-xl font-semibold shadow-lg">Browse Jobs</a></Link>
              <Link href="/auth/login"><a className="inline-block border border-neutral-700 px-6 py-3 rounded-xl text-gray-300">Sign in</a></Link>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted">Featured role</div>
                  <h3 className="text-2xl font-bold">Senior Frontend Engineer</h3>
                  <div className="text-sm text-gray-300 mt-2">RedTech • Remote</div>
                </div>
                <div className="text-primary font-bold">Apply</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#060606] rounded-lg">
                  <div className="text-sm text-muted">Experience</div>
                  <div className="font-semibold mt-1">5+ years</div>
                </div>
                <div className="p-4 bg-[#060606] rounded-lg">
                  <div className="text-sm text-muted">Skills</div>
                  <div className="font-semibold mt-1">React · Next.js · TS</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
