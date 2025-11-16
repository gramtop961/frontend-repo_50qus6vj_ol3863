import { ShieldCheck, FileCheck2, Workflow, Users, Laptop, Database } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    desc: 'Lockdown browser, question scrambling, IP/device binding, and audit trails. Compliance-ready for high-stakes exams.'
  },
  {
    icon: FileCheck2,
    title: 'Author with ease',
    desc: 'Rich question types, pools, blueprints, tagging, versioning, and collaborative reviews with rubrics.'
  },
  {
    icon: Workflow,
    title: 'Automate operations',
    desc: 'Scheduling, seat allocation, hall tickets, reminders, and proctor staffing in a few clicks.'
  },
  {
    icon: Users,
    title: 'Proctor at scale',
    desc: 'AI-assisted proctoring with identity verification, flags, and live invigilation dashboards.'
  },
  {
    icon: Laptop,
    title: 'Student-first experience',
    desc: 'Accessible UI, offline mode, autosave, and instant results for objective tests.'
  },
  {
    icon: Database,
    title: 'Insights & reports',
    desc: 'Performance analytics, item analysis, outcome mapping, and export to your SIS/LMS.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to run exams</h2>
          <p className="mt-3 text-gray-600">A complete toolkit for controllers, faculty, proctors and students</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
