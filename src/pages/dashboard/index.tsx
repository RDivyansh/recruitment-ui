import { jobs } from '../../data/jobs'
export default function Dashboard(){
  const applications = [
    { id:'a1', job: jobs[0], status: 'Applied', date:'2025-11-20' },
    { id:'a2', job: jobs[1], status: 'Under Review', date:'2025-11-18' }
  ]
  return (
    <main className="min-h-screen bg-bg p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white">My Submissions</h1>
        <div className="mt-6 space-y-4">
          {applications.map(a=>(
            <div key={a.id} className="p-4 bg-surface border border-neutral-800 rounded-lg flex justify-between items-center">
              <div>
                <div className="text-white font-semibold">{a.job.title}</div>
                <div className="text-muted text-sm">{a.job.company} • {a.date}</div>
              </div>
              <div className="text-sm px-3 py-1 rounded-full" style={{background: a.status==='Applied' ? '#111' : '#2b2b2b', color:'#fff'}}>{a.status}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
