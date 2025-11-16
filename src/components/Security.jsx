import { Shield, LockKeyhole, KeyRound, FileText } from 'lucide-react'

export default function Security(){
  return (
    <section id="security" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Enterprise-grade security</h2>
            <p className="mt-4 text-gray-600">Built to meet rigorous academic and regulatory requirements.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold">End-to-end encryption</div>
                  <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest with key rotation policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LockKeyhole className="text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold">Lockdown controls</div>
                  <p className="text-gray-600 text-sm">Restrict shortcuts, external apps, and multiple displays during exams.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <KeyRound className="text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold">SSO & role-based access</div>
                  <p className="text-gray-600 text-sm">SAML, OAuth2 and granular roles for admins, faculty, proctors and students.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold">Compliance</div>
                  <p className="text-gray-600 text-sm">FERPA, GDPR and institutional data retention policies supported.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-1">
              <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-sm grid place-items-center">
                <div className="rounded-xl bg-white px-6 py-4 shadow-lg">
                  <div className="text-sm text-gray-600">Security Score</div>
                  <div className="mt-2 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">A+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
