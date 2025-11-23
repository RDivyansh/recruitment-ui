import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const router=useRouter()
  function submit(e:any){ e.preventDefault(); localStorage.setItem('user','demo'); router.push('/jobs') }
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-md bg-surface p-8 rounded-2xl border border-neutral-800 shadow-xl">
        <h2 className="text-2xl font-bold text-white">Sign in</h2>
        <p className="text-muted mt-2">Use demo account — no backend required.</p>
        <label className="block mt-6">
          <div className="text-sm text-gray-300">Email</div>
          <input value={email} onChange={e=>setEmail(e.target.value)} required className="mt-2 w-full p-3 rounded-lg bg-black border border-neutral-700"/>
        </label>
        <label className="block mt-4">
          <div className="text-sm text-gray-300">Password</div>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="mt-2 w-full p-3 rounded-lg bg-black border border-neutral-700"/>
        </label>
        <button className="w-full mt-6 py-3 bg-primary text-black rounded-xl font-semibold">Sign in</button>
      </form>
    </div>
  )
}
