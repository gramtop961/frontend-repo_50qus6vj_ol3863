import { useState } from 'react'
import { Menu, X, GraduationCap, Shield, LogIn } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/70 dark:bg-gray-900/60 border border-white/30 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <GraduationCap size={20} />
              </div>
              <span className="text-lg font-semibold tracking-tight">ExamCloud</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#how" className="hover:text-gray-900">How it works</a>
              <a href="#testimonials" className="hover:text-gray-900">Customers</a>
              <a href="#security" className="hover:text-gray-900 flex items-center gap-1"><Shield size={16}/>Security</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-2"><LogIn size={16}/> Sign in</a>
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition">Request demo</a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 border border-gray-200 text-gray-700">
              {open ? <X/> : <Menu/>}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-200 px-4 pb-4 space-y-3">
              <a href="#features" className="block">Features</a>
              <a href="#how" className="block">How it works</a>
              <a href="#testimonials" className="block">Customers</a>
              <a href="#security" className="block">Security</a>
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30">Request demo</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
