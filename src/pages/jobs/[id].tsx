import { useRouter } from 'next/router'
import { jobs } from '../../data/jobs'
import { useState } from 'react'

export default function JobDetail(){
  const router = useRouter()
  const { id } = router.query
  const job = jobs.find(j=>j.id===id)
  const [fileName,setFileName]=useState('')
  const [msg,setMsg]=useState('')
  if(!job) return <div className="min-h-screen bg-bg p-8">Loading...</div>
  function apply(e:any){
    e.preventDefault()
    if(!fileName) return setMsg('Please choose a resume (demo — not uploaded)')
    setMsg('Application submitted (demo). Check My Submissions.')
  }
  return (
    <main className="min-h-screen bg-bg p-8">
      <div className="max-w-3xl mx-auto bg-surface p-8 rounded-2xl border border-neutral-800">
        <h1 className="text-2xl font-bold text-white">{job.title}</h1>
        <div className="text-muted mt-1">{job.company} • {job.location}</div>
        <p className="text-gray-300 mt-6">{job.description}</p>

        <form onSubmit={apply} className="mt-6">
          <label className="block">
            <div className="text-sm text-gray-300">Resume (demo)</div>
            <input type="file" onChange={(e)=>setFileName(e.target.files?.[0]?.name || '')} className="mt-2"/>
          </label>
          <button className="mt-4 px-4 py-2 bg-primary text-black rounded-lg">Apply</button>
          {msg && <div className="mt-3 text-sm text-green-400">{msg}</div>}
        </form>
      </div>
    </main>
  )
}
