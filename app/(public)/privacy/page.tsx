import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Privacy Policy – OKMOM Parental Control App',
        description: 'OKMOM Privacy Policy. Learn how we protect your family\'s data with secure, privacy-first parental controls. No selling data, no ads, full transparency.',
    };
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
            {/* Hero Header */}
            <section className="relative py-16 md:py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-white to-pink-50/40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

                <div className="container mx-auto max-w-4xl relative">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-sm text-purple-700 font-semibold mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Privacy First
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Privacy Policy
                            </span>
                        </h1>

                        <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-3 mb-6">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700 font-semibold text-lg">
                                Last Updated: July 23, 2026
                            </span>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-3xl mx-auto">
                            <p className="text-gray-700 leading-relaxed">
                                OKMOM is a mobile application that helps parents monitor their children's safety through GPS location tracking.
                                This Privacy Policy applies to the OKMOM mobile application on Android and iOS platforms, as well as the website at{" "}
                                <a href="https://okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">okmom.co</a>{" "}
                                (the "Services").
                            </p>
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Protecting your privacy and your child's privacy is our highest priority.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-8 px-4 pb-24">
                <div className="container mx-auto max-w-4xl space-y-8">
                    {/* Section 1: Introduction */}
                    <SectionCard number={1} title="Introduction">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            OKMOM is developed and operated by <strong>OKMOM</strong> ("we", "us"), which is responsible for
                            controlling and processing your personal data.
                        </p>
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                            <p className="text-gray-800 font-semibold mb-1">Data Controller:</p>
                            <p className="text-gray-700">
                                OKMOM — determines the purposes and means of processing your personal data. For any privacy or
                                data-related inquiries, please contact us at{" "}
                                <a href="mailto:privacy@okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">privacy@okmom.co</a>.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Protecting your privacy and your child's privacy is our highest priority. This policy explains
                            what data we collect, how we use it, and what rights you have.
                        </p>
                    </SectionCard>

                    {/* Section 2: Information We Collect */}
                    <SectionCard number={2} title="Information We Collect">
                        <SubHeading>2.1 Parent Data</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">When you create an OKMOM account, we collect:</p>
                        <DataTable
                            headers={["Data", "Purpose"]}
                            rows={[
                                ["Display name", "Identify your account"],
                                ["Email address", "Login, verification, important notifications"],
                                ["Password (hashed)", "Authentication"],
                                ["Avatar (optional)", "Account personalization"],
                                ["Login method", "Google, Apple, or Email"],
                            ]}
                        />

                        <SubHeading>2.2 Child Data</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">When you create a child profile in OKMOM, we collect:</p>
                        <DataTable
                            headers={["Data", "Purpose"]}
                            rows={[
                                ["Child's name", "Identify the profile within the parent account"],
                                ["Gender (optional)", "Personalize experience"],
                                ["Birth year (optional)", "Determine the child's age"],
                                ["Avatar (optional)", "Profile personalization"],
                                ["Star credits", "Operate the reward system"],
                            ]}
                        />

                        <SubHeading>2.3 Location Data</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">This is the core feature of OKMOM. We collect:</p>
                        <DataTable
                            headers={["Data", "Purpose"]}
                            rows={[
                                ["Precise GPS location", "Real-time location tracking of the child's device"],
                                ["Geofence status", "Alerts when the child enters/leaves designated safe zones"],
                                ["Activity detection", "Detect whether the child is walking or in a vehicle"],
                            ]}
                        />
                        <InfoBox variant="info">
                            <p className="font-semibold text-gray-800 mb-2">Important notes:</p>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Location is only collected from the <strong>child's device</strong>, after the parent has paired the device.</li>
                                <li>• Location works <strong>both when the app is open and when running in the background</strong>.</li>
                                <li>• You can stop location collection at any time by disabling the location permission in your device's system Settings.</li>
                            </ul>
                        </InfoBox>

                        <SubHeading>2.4 Technical Data</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">We automatically collect certain technical information:</p>
                        <DataTable
                            headers={["Data", "Purpose"]}
                            rows={[
                                ["Unique device identifier (UUID)", "Distinguish devices within your account, support pairing"],
                                ["Battery level", "Notify parents when child's device is low on battery"],
                                ["Connection type (WiFi / Mobile)", "Optimize location update frequency"],
                                ["Device name (manufacturer + model)", "Set default device name in your account"],
                                ["FCM token", "Send push notifications to the parent's device"],
                            ]}
                        />

                        <SubHeading>2.5 Payment Data</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            Payments are processed <strong>entirely through Google Play Store or Apple App Store</strong>.
                            OKMOM does not store, view, or process your credit card information. We only receive your
                            subscription status (active / expired) from the app store.
                        </p>
                    </SectionCard>

                    {/* Section 3: How We Use Your Data */}
                    <SectionCard number={3} title="How We Use Your Data">
                        <p className="text-gray-700 leading-relaxed mb-4">All collected data is used solely for the following purposes:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { icon: "📍", title: "Real-time location", desc: "View child's current location on a map" },
                                { icon: "🏠", title: "Geofence alerts", desc: "Notifications when child enters/leaves safe zones" },
                                { icon: "⭐", title: "Star reward system", desc: "Tasks, stars, and reward redemption" },
                                { icon: "🔔", title: "Safety alerts", desc: "Emergency notifications to parents" },
                                { icon: "🔐", title: "Authentication & security", desc: "Protect your account from unauthorized access" },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                We DO NOT use data for:
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    "Advertising in any form",
                                    "Tracking users across other apps/websites",
                                    "Selling or trading data with third parties",
                                    "Building marketing profiles",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-green-800 text-sm">
                                        <span className="text-red-400">✕</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SectionCard>

                    {/* Section 4: Data Sharing */}
                    <SectionCard number={4} title="Data Sharing with Third Parties">
                        <p className="text-gray-700 leading-relaxed mb-4">We only share data with the following essential service providers:</p>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Third Party</th>
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Data Shared</th>
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ["Google Cloud / Firebase (USA)", "All user data", "Storage, authentication, push notifications"],
                                        ["Mapbox (USA)", "Location coordinates", "Map display in the application"],
                                        ["Google Sign-In", "Email, name", "Authentication"],
                                        ["Apple Sign-In", "Email, name", "Authentication"],
                                        ["Google Play Store", "Transaction ID, payment status", "Premium payment processing"],
                                        ["Apple App Store", "Transaction ID, payment status", "Premium payment processing"],
                                        ["RevenueCat", "Subscription status, product ID", "Premium status management"],
                                    ].map(([party, data, purpose]) => (
                                        <tr key={party} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-5 py-3.5 font-medium text-gray-800 text-sm">{party}</td>
                                            <td className="px-5 py-3.5 text-gray-600 text-sm">{data}</td>
                                            <td className="px-5 py-3.5 text-gray-600 text-sm">{purpose}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 space-y-2">
                            {[
                                { icon: "✅", text: "All providers have data protection agreements" },
                                { icon: "✅", text: "We DO NOT sell personal data to anyone" },
                                { icon: "✅", text: "We DO NOT share data with advertising networks" },
                                { icon: "✅", text: "We DO NOT use user analytics services" },
                            ].map((item) => (
                                <div key={item.text} className="flex items-center gap-2 text-gray-700 text-sm">
                                    <span>{item.icon}</span> {item.text}
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* Section 5: Data Security */}
                    <SectionCard number={5} title="Data Security">
                        <p className="text-gray-700 leading-relaxed mb-4">We implement the following security measures:</p>
                        <DataTable
                            headers={["Measure", "Details"]}
                            rows={[
                                ["Encryption at rest", "AES-256 (Firebase Firestore, local SQLite, Android Keystore / iOS Keychain)"],
                                ["Encryption in transit", "TLS 1.3 / HTTPS for all network connections"],
                                ["Device authentication", "Firebase App Check — prevents access from spoofed devices"],
                                ["Access control", "Only the paired parent account can view a child's data"],
                                ["Passwords", "Hashed before storage — even we cannot read your original password"],
                            ]}
                        />
                        <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
                            <p className="text-red-800 text-sm">
                                <strong>Data Breach Notification:</strong> In the event of a data breach, we will notify you via
                                email and in-app notification within <strong>72 hours</strong> of discovery.
                            </p>
                        </div>
                    </SectionCard>

                    {/* Section 6: Data Retention */}
                    <SectionCard number={6} title="Data Retention and Deletion">
                        <SubHeading>6.1 Retention Periods</SubHeading>
                        <DataTable
                            headers={["Data Type", "Retention Period"]}
                            rows={[
                                ["Parent account data", "For the duration of the active account"],
                                ["Child profile data", "For the duration of the parent's active account"],
                                ["Payment data", "Per Google Play / Apple App Store policies"],
                            ]}
                        />

                        <SubHeading>6.2 Account Deletion</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-3">You can delete your account and all associated data at any time:</p>
                        <div className="bg-gray-50 rounded-xl p-5 space-y-2">
                            {[
                                { step: 1, text: "Open the OKMOM app" },
                                { step: 2, text: "Go to Settings → Account & Security → Close my account" },
                                { step: 3, text: "Confirm the deletion request" },
                            ].map((s) => (
                                <div key={s.step} className="flex items-center gap-3">
                                    <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{s.step}</span>
                                    <span className="text-gray-700">{s.text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 space-y-2 text-gray-700 text-sm">
                            <p>• After confirmation, your data will be scheduled for deletion — completed within <strong>30 days</strong>.</p>
                            <p>• During this 30-day period, you can log back in and select "Cancel deletion request" to restore everything.</p>
                            <p>• When you delete your account, all child profile data linked to your account is also permanently deleted.</p>
                        </div>

                        <SubHeading>6.3 Exceptions</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            We may retain data longer if there is a legal obligation, it is necessary for security/fraud prevention,
                            or the data has been fully anonymized.
                        </p>
                    </SectionCard>

                    {/* Section 7: Your Rights */}
                    <SectionCard number={7} title="Your Rights">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Depending on where you live, you have the following rights regarding your personal data:
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm w-2/5">Right</th>
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm w-3/5">How to Exercise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ["Right of access", "View the data we hold about you — in the app or by email request"],
                                        ["Right to rectification", "Correct inaccurate data — directly in App Settings"],
                                        ["Right to erasure", "Request deletion — Settings → Account & Security → Close my account"],
                                        ["Right to data portability", "Receive a copy of your data — email privacy@okmom.co"],
                                        ["Right to restriction", "Request suspension of data processing — email privacy@okmom.co"],
                                        ["Right to withdraw consent", "Stop consenting to data collection — disable location permission"],
                                        ["Right to complain", "File a complaint with a data protection authority in your residence"],
                                    ].map(([right, how]) => (
                                        <tr key={right} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-5 py-3.5 font-semibold text-gray-800 text-sm">{right}</td>
                                            <td className="px-5 py-3.5 text-gray-600 text-sm">{how}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-700 text-sm mt-4">
                            To exercise any of these rights, contact us at:{" "}
                            <a href="mailto:privacy@okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">privacy@okmom.co</a>.
                            We will respond within <strong>30 days</strong> (or sooner if required by applicable law).
                        </p>

                        <InfoBox variant="info">
                            <p className="font-semibold text-gray-800 mb-1">Note for U.S. residents:</p>
                            <p className="text-gray-700 text-sm">
                                OKMOM does not sell or share personal data for targeted advertising. The rights of access, deletion,
                                and correction apply equally to all users, including residents of California (CCPA/CPRA), Virginia (VCDPA),
                                Colorado (CPA), Connecticut (CTDPA), and Utah (UCPA). Contact{" "}
                                <a href="mailto:privacy@okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">privacy@okmom.co</a>.
                            </p>
                        </InfoBox>
                    </SectionCard>

                    {/* Section 8: Business Transfer */}
                    <SectionCard number={8} title="Business Transfer & Service Discontinuation">
                        <SubHeading>8.1 Business Transfer</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In the event OKMOM is involved in a merger, acquisition, or sale of assets, we will:
                        </p>
                        <CheckList items={[
                            "Notify you via email and/or in-app notification before your data is transferred.",
                            "Ensure the recipient commits to complying with this Privacy Policy or equivalent protection.",
                            "Provide you with the option to delete your data before transfer (where required by law).",
                        ]} />

                        <SubHeading>8.2 Service Discontinuation</SubHeading>
                        <CheckList items={[
                            "Notify you at least 30 days before discontinuing the service.",
                            "You may export your data by emailing privacy@okmom.co.",
                            "All personal data will be permanently deleted within 30 days after discontinuation.",
                            "You must cancel Premium subscriptions through the app store yourself.",
                        ]} />
                    </SectionCard>

                    {/* Section 9: Children's Privacy */}
                    <SectionCard number={9} title="Children's Privacy">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                OKMOM is designed for parents to monitor their own children. We are especially strict about children's data:
                            </p>
                            <CheckList items={[
                                "Parental consent: You confirm you are the parent/legal guardian when pairing a child's device.",
                                "Children cannot create accounts: Only adults (≥18) can create parent accounts.",
                                "Data minimization: We only collect child data necessary for monitoring features.",
                                "Device identifiers: UUID is app-generated and stored in Keystore/Keychain — not a system identifier (AAID, IMEI, MAC, Serial Number).",
                                "Platform compliance: OKMOM complies with Google Play Families Policy and Apple App Store Kids Category requirements.",
                            ]} />
                        </div>

                        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
                            We comply with international children's privacy regulations:
                        </p>
                        <DataTable
                            headers={["Region", "Regulation", "Requirement"]}
                            rows={[
                                ["United States", "COPPA", "Parental consent required for children under 13"],
                                ["Europe", "GDPR", "Parental consent required for children under 16"],
                            ]}
                        />
                        <p className="text-gray-700 text-sm mt-4">
                            If you discover that a child's data has been collected without parental consent, please contact{" "}
                            <a href="mailto:privacy@okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">privacy@okmom.co</a>{" "}
                            immediately so we can delete that data.
                        </p>
                    </SectionCard>

                    {/* Section 10: Device Permissions */}
                    <SectionCard number={10} title="Device System Permissions">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To provide location monitoring features, OKMOM requires the following system permissions.
                            Each permission has a specific purpose and is only used for its stated function.
                        </p>

                        <SubHeading>Android</SubHeading>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Permission</th>
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Why Needed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ["Precise location (ACCESS_FINE_LOCATION)", "Accurate GPS location of the child's device"],
                                        ["Approximate location (ACCESS_COARSE_LOCATION)", "WiFi/cellular positioning when GPS is weak"],
                                        ["Background location (ACCESS_BACKGROUND_LOCATION)", "Continue location tracking when app is closed"],
                                        ["Activity recognition (ACTIVITY_RECOGNITION)", "Detect whether child is walking or in a vehicle"],
                                        ["Boot completed (RECEIVE_BOOT_COMPLETED)", "Auto-restart monitoring after device reboot"],
                                        ["Foreground service (FOREGROUND_SERVICE)", "Maintain continuous location monitoring"],
                                        ["Foreground service - location", "Allow foreground service to access location"],
                                        ["Foreground service - data sync", "Allow foreground service to sync data"],
                                        ["Ignore battery optimizations", "Prevent system from killing monitoring"],
                                        ["Wake lock (WAKE_LOCK)", "Maintain connection for timely location updates"],
                                        ["Exact alarm (SCHEDULE_EXACT_ALARM)", "Schedule periodic location checks"],
                                        ["Vibrate (VIBRATE)", "Vibration for alerts"],
                                        ["Internet (INTERNET)", "Network connection for data sync"],
                                    ].map(([perm, why]) => (
                                        <tr key={perm} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-5 py-3 text-gray-800 text-xs font-mono">{perm}</td>
                                            <td className="px-5 py-3 text-gray-600 text-sm">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <SubHeading>iOS</SubHeading>
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Permission</th>
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Why Needed</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ["Location \"Always\"", "Continuous location even when the app is closed"],
                                        ["Location \"When in use\"", "Location when the app is open"],
                                        ["Background modes (location, fetch, processing)", "Location updates and data sync in background"],
                                    ].map(([perm, why]) => (
                                        <tr key={perm} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-5 py-3 text-gray-800 text-xs font-mono">{perm}</td>
                                            <td className="px-5 py-3 text-gray-600 text-sm">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SectionCard>

                    {/* Section 11: Payment & Premium */}
                    <SectionCard number={11} title="Payment & Premium Subscription">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            OKMOM offers a Free plan (limited features) and a Premium plan (full features) on a subscription basis:
                        </p>
                        <DataTable
                            headers={["Topic", "Details"]}
                            rows={[
                                ["Payment processing", "Entirely through Google Play Store or Apple App Store"],
                                ["Card information", "OKMOM does not store — processed directly by Google/Apple"],
                                ["Auto-renewal", "Premium plan auto-renews unless you cancel at least 24 hours before"],
                                ["Cancellation", "Via your Google Play / Apple ID account settings"],
                                ["Refunds", "Request through Google Play Store or Apple App Store"],
                            ]}
                        />
                    </SectionCard>

                    {/* Section 12: International Data Transfers */}
                    <SectionCard number={12} title="International Data Transfers">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            OKMOM uses Google Cloud (Firebase) located in the <strong>United States</strong> (us-central1)
                            for data storage and processing. This means your data may be transferred to and processed in the United States.
                        </p>
                        <InfoBox variant="info">
                            <p className="text-gray-700 text-sm">
                                For users in the <strong>European Economic Area (EEA)</strong>, the <strong>United Kingdom</strong>,
                                and <strong>Switzerland</strong>, we ensure data transfers comply with the Standard Contractual
                                Clauses (SCCs) approved by the European Commission.
                            </p>
                        </InfoBox>
                    </SectionCard>

                    {/* Section 13: Legal Basis */}
                    <SectionCard number={13} title="Legal Basis">
                        <p className="text-gray-700 leading-relaxed mb-4">Our data processing is based on the following legal bases:</p>
                        <DataTable
                            headers={["Legal Basis", "Applies To"]}
                            rows={[
                                ["Consent", "Background location data collection, children's data"],
                                ["Contract performance", "Providing the monitoring service you signed up for"],
                                ["Legitimate interest", "System security, fraud detection and prevention"],
                                ["Legal obligation", "Compliance with competent authority requirements"],
                            ]}
                        />
                    </SectionCard>

                    {/* Section 14: Changes to This Policy */}
                    <SectionCard number={14} title="Changes to This Policy">
                        <p className="text-gray-700 leading-relaxed mb-4">We may update this Privacy Policy from time to time. When changes occur:</p>
                        <CheckList items={[
                            "Minor changes: Update the \"Last Updated\" date.",
                            "Material changes: Notify you via email and/or in-app notification before the changes take effect.",
                            "Your continued use after changes take effect means you accept the new policy.",
                            "Previous versions of this policy are archived for your reference (contact us if needed).",
                        ]} />
                    </SectionCard>

                    {/* Section 15: Contact Us */}
                    <SectionCard number={15} title="Contact Us">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {([
                                { icon: "email" as const, label: "Privacy Email", value: "privacy@okmom.co", href: "mailto:privacy@okmom.co" },
                                { icon: "web" as const, label: "Website", value: "okmom.co", href: "https://okmom.co" },
                                { icon: "clock" as const, label: "Response Time", value: "Within 5 business days" },
                            ]).map((item) => (
                                <ContactCard key={item.label} {...item} />
                            ))}
                        </div>
                        <p className="text-gray-700 text-sm mt-6">
                            <strong>Supervisory authority:</strong> If you are not satisfied with our response, you have the right to
                            file a complaint with the data protection authority in your place of residence.
                        </p>
                    </SectionCard>

                    {/* Section 16: Effective Date */}
                    <SectionCard number={16} title="Effective Date">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white text-center">
                            <p className="text-lg font-semibold">
                                This policy is effective as of July 23, 2026 and supersedes all previous versions.
                            </p>
                        </div>
                    </SectionCard>

                    {/* Footer */}
                    <div className="text-center pt-8">
                        <p className="text-gray-400 text-sm">© 2026 OKMOM. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ─── Reusable Sub-Components ─── */

function SectionCard({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4 mb-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-purple-200">
                    {number}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3 first:mt-0">{children}</h3>;
}

function CheckList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    );
}

function InfoBox({ variant, children }: { variant: "info" | "warning"; children: React.ReactNode }) {
    const styles = variant === "info"
        ? "bg-blue-50 border-blue-200"
        : "bg-amber-50 border-amber-200";
    return (
        <div className={`border rounded-xl p-5 ${styles}`}>
            {children}
        </div>
    );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-50">
                        {headers.map((h) => (
                            <th key={h} className="px-5 py-3 font-semibold text-gray-700 text-sm">{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {rows.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            {row.map((cell, j) => (
                                <td key={j} className={`px-5 py-3.5 text-sm ${j === 0 ? 'font-medium text-gray-800' : 'text-gray-600'}`}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ContactCard({ icon, label, value, href }: { icon: "email" | "web" | "clock"; label: string; value: string; href?: string }) {
    const icons = {
        email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
        web: <><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
        clock: <><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></>,
    };

    const content = (
        <div className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow border border-gray-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icons[icon]}
                </svg>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</p>
            {href ? (
                <a href={href} className="text-purple-600 hover:text-purple-800 font-medium text-sm break-all">{value}</a>
            ) : (
                <p className="text-gray-800 font-medium text-sm">{value}</p>
            )}
        </div>
    );

    return content;
}
