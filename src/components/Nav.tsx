import Link from 'next/link'
export default function Nav(){
  return (
    <header className="w-full bg-[#050505]/60 backdrop-blur p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-white font-bold text-lg">RedRecruit</div>
          <nav className="hidden md:flex gap-4">
            <Link href="/jobs"><a className="text-gray-300 hover:text-white">Jobs</a></Link>
            <Link href="/dashboard"><a className="text-gray-300 hover:text-white">My Submissions</a></Link>
            <Link href="/admin"><a className="text-gray-300 hover:text-white">Admin</a></Link>
          </nav>
        </div>
        <div>
          <Link href="/auth/login"><a className="px-4 py-2 border border-primary text-primary rounded-lg">Sign in</a></Link>
        </div>
      </div>
    </header>
  )
}
