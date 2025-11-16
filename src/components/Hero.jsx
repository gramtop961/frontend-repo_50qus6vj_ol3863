import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"/>
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Run secure, paperless exams at scale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              ExamCloud is the end-to-end exam management platform for schools and universities. Create, schedule, proctor and grade exams — all in one place, with rock-solid security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="#cta" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 text-base font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40">
                Request a demo
              </a>
              <a href="#features" className="inline-flex items-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 text-base font-semibold hover:bg-gray-50">
                Explore features
              </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                'Bank-level encryption & lockdown browser',
                'AI-assisted proctoring and anomaly detection',
                'Auto-grading with rich rubrics and feedback',
                'Integrates with SIS/LMS and SSO',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-1">
                <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-sm p-4">
                  <div className="h-full w-full rounded-xl bg-white p-4 grid grid-cols-3 gap-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="rounded-lg border border-gray-200 p-4">
                        <div className="h-3 w-1/2 rounded bg-gray-200" />
                        <div className="mt-3 h-2 w-2/3 rounded bg-blue-100" />
                        <div className="mt-2 h-8 w-full rounded-md bg-gray-100" />
                        <div className="mt-2 h-2 w-1/3 rounded bg-gray-200" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl border border-blue-200 bg-white p-3 shadow-lg">
                <div className="text-xs text-gray-600">Live proctoring</div>
                <div className="mt-2 h-16 w-36 rounded-lg bg-gray-100"/>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-70">
          {['Oxford','IIT','NYU','Berkeley','IIM','NUS','UCLA','Imperial'].map(n => (
            <div key={n} className="text-center text-gray-600 text-sm">{n}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
