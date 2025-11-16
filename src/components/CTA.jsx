export default function CTA(){
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">See ExamCloud in action</h3>
              <p className="mt-3 text-white/80">Get a personalized walkthrough tailored to your academic workflows.</p>
            </div>
            <form className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur">
              <div className="grid sm:grid-cols-3 gap-3">
                <input className="w-full rounded-xl border-0 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/70" placeholder="Institution email"/>
                <input className="w-full rounded-xl border-0 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/70" placeholder="Institution name"/>
                <button type="button" className="rounded-xl bg-white text-gray-900 px-4 py-3 font-semibold hover:bg-white/90">Request demo</button>
              </div>
              <p className="mt-3 text-xs text-white/70">By requesting a demo, you agree to our terms and privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
