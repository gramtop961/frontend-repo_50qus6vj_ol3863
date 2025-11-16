import { Quote, Star } from 'lucide-react'

const items = [
  {
    name: 'Dean, School of Engineering',
    org: 'Riverdale University',
    quote: 'We transitioned 30,000+ students to secure online exams in one semester. The reliability and proctoring quality were outstanding.'
  },
  {
    name: 'Controller of Examinations',
    org: 'St. Mary’s College',
    quote: 'Question authoring and approvals are now streamlined. Faculty collaboration improved dramatically.'
  },
  {
    name: 'IT Director',
    org: 'Global Business School',
    quote: 'Seamless SSO and SIS integration. Our audit and compliance process has never been easier.'
  },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Trusted by leading institutions</h2>
          <p className="mt-3 text-gray-600">What academic leaders say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Quote className="text-indigo-500" />
              <p className="mt-4 text-gray-700">{t.quote}</p>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.org}</div>
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-full border border-yellow-200 shadow p-1 flex">
                {Array.from({length:5}).map((_,i)=> (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
