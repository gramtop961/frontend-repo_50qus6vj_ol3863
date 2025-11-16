import { BadgeCheck, CalendarCheck2, Lock, FileSignature } from 'lucide-react'

const steps = [
  {
    icon: FileSignature,
    title: 'Create',
    desc: 'Design exams with rich question types, randomization and blueprints.'
  },
  {
    icon: CalendarCheck2,
    title: 'Schedule',
    desc: 'Assign rooms, seats and time slots with conflict detection and notifications.'
  },
  {
    icon: Lock,
    title: 'Proctor',
    desc: 'Enable lockdown browser and AI proctoring. Monitor exams live.'
  },
  {
    icon: BadgeCheck,
    title: 'Evaluate',
    desc: 'Auto-grade objective questions and rubric-based grading for subjective.'
  },
]

export default function HowItWorks(){
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">From authoring to analytics in four simple steps</p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map(({icon: Icon, title, desc}, idx) => (
            <div key={title} className="relative rounded-2xl border border-gray-200 bg-white p-6">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <div className="text-sm text-gray-500">Step {idx+1}</div>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
