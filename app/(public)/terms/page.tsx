import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Terms of Service – OKMOM Parental Control App',
        description: 'OKMOM Terms of Service. Learn about acceptable use, user responsibilities, subscriptions, and legal terms for our parental control app.',
    };
}

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
            {/* Hero Header */}
            <section className="relative py-16 md:py-24 px-4 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-white to-pink-50/40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

                <div className="container mx-auto max-w-4xl relative">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-sm text-purple-700 font-semibold mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Legal Terms
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                Terms of Service
                            </span>
                        </h1>

                        <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-3">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700 font-semibold text-lg">
                                Last Updated: July 23, 2026
                            </span>
                        </div>

                        <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                            Welcome to OKMOM. These Terms of Service govern your access to and use of the OKMOM
                            mobile application, our website at{" "}
                            <a href="https://okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">okmom.co</a>,
                            and all related services. By using the Services, you agree to be bound by these Terms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-8 px-4 pb-24">
                <div className="container mx-auto max-w-4xl space-y-8">
                    {/* Section 1: Introduction */}
                    <SectionCard number={1} title="Introduction">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Welcome to OKMOM ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of
                            the OKMOM mobile application (the "App"), our website at{" "}
                            <a href="https://okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">okmom.co</a>{" "}
                            (the "Site"), and all related services, features, content, and software (collectively, the "Services").
                        </p>
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                            <p className="text-gray-800 font-semibold mb-2">
                                By downloading, installing, accessing, or using the Services, you agree to be bound by these Terms.
                            </p>
                            <p className="text-gray-600 text-sm">
                                If you do not agree to these Terms in their entirety, you must not access or use the Services.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            These Terms incorporate by reference our{" "}
                            <Link href="/privacy" className="text-purple-600 hover:text-purple-800 underline font-medium">Privacy Policy</Link>,
                            which explains how we collect, use, and protect your personal information.
                        </p>
                        <InfoBox variant="highlight">
                            <p className="font-semibold text-gray-800 mb-1">For Parents and Legal Guardians:</p>
                            <p className="text-gray-700">
                                By creating an account and adding a child to the Services, you confirm that you are the legal parent or
                                guardian of that child and that you accept these Terms on behalf of both yourself and the child.
                            </p>
                        </InfoBox>
                    </SectionCard>

                    {/* Section 2: Definitions */}
                    <SectionCard number={2} title="Definitions">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { term: "Parent / You", def: "The adult (18+) who creates an OKMOM account and manages Child profiles." },
                                { term: "Child", def: "A minor under 18 whose device is monitored through the Services by a Parent who is their legal guardian." },
                                { term: "Monitored Device", def: "A mobile device on which the OKMOM child companion app or device management profile is installed." },
                                { term: "Parent Device", def: "The mobile device on which the Parent uses the OKMOM parent app." },
                                { term: "Account", def: "A registered user account on the Services." },
                            ].map((item) => (
                                <div key={item.term} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                    <dt className="font-bold text-purple-700 mb-1">{item.term}</dt>
                                    <dd className="text-gray-600 text-sm leading-relaxed">{item.def}</dd>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* Section 3: Eligibility */}
                    <SectionCard number={3} title="Eligibility">
                        <SubHeading>3.1 Parent Accounts</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-3">To create a Parent account, you must:</p>
                        <CheckList items={[
                            "Be at least 18 years old (or the age of majority in your jurisdiction).",
                            "Have the legal capacity to enter into a binding contract.",
                            "Not be barred from using the Services under the laws of your country or the United States.",
                        ]} />

                        <SubHeading>3.2 Child Profiles</SubHeading>
                        <CheckList items={[
                            "A Child profile may only be created by the Child's legal parent or guardian.",
                            "A Child profile is not an independent account — children cannot sign in on their own.",
                            "By creating a Child profile, you represent that you are the legal parent or legal guardian.",
                            "If you are a guardian (not a biological parent), you must have valid court-appointed documentation.",
                        ]} />

                        <SubHeading>3.3 Monitoring Adults is Prohibited</SubHeading>
                        <WarningBox>
                            <p className="text-gray-700 mb-2">
                                The Services are designed exclusively for parents to monitor their own minor children. You may <strong>not</strong> use the Services to monitor:
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>Adults (18 years or older).</li>
                                <li>Children who are not your legal dependents.</li>
                                <li>Employees, spouses, partners, or any other person without a parent-child legal relationship.</li>
                            </ul>
                            <p className="text-gray-700 mt-3 font-medium">
                                Any use to monitor adults or non-dependent individuals is a material breach and may violate applicable surveillance, privacy, and wiretapping laws.
                            </p>
                        </WarningBox>

                        <SubHeading>3.4 Consent of Monitored Children</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            Where required by applicable law, you must inform your child that their device is being monitored and,
                            for children above a certain age, obtain their consent. You are solely responsible for complying with
                            the consent requirements of your jurisdiction.
                        </p>
                    </SectionCard>

                    {/* Section 4: Description of Services */}
                    <SectionCard number={4} title="Description of Services">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            OKMOM is a parental control application that helps parents monitor and manage their children's
                            safety and daily activities. Key features include:
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "GPS Location Tracking", items: ["Real-time location on an interactive map", "Background tracking with adaptive sampling", "On-demand live location refresh", "Battery & connectivity status"] },
                                { title: "Geofence Zones (Safe Places)", items: ["Custom safe zones with 100m minimum radius", "Enter/exit push notifications", "Hysteresis buffer to prevent alert chattering"] },
                                { title: "Task & Chore Management", items: ["Task creation with categories, time ranges, repeat schedules", "Star/point rewards as incentives", "Submission & review flow", "Free tier: 3 task approvals/day"] },
                                { title: "Star Reward System", items: ["Reward templates with names, descriptions, images, point costs", "Redemption flow with parent approval", "Free tier: 5 rewards"] },
                                { title: "Device Pause (Discipline Tool)", items: ["Remote pause with configurable duration (Premium)", "Child acknowledgment option", "Bonus stars for compliance"] },
                                { title: "Device Pairing", items: ["5-digit pairing code generated by parent", "Links child device to child profile"] },
                                { title: "Push Notifications", items: ["Task updates, reward redemptions, geofence alerts", "Device pause & pairing events", "Privacy-related alerts"] },
                            ].map((feature) => (
                                <FeatureCard key={feature.title} title={feature.title} items={feature.items} />
                            ))}
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-5">
                            <div className="flex items-start gap-3">
                                <span className="text-amber-500 text-xl">⭐</span>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">Premium Features</h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Smart Auto-Approve, Task Ideas, Explore Packs, Flexible Star Rewards (Wallet), and Remote Device Pause
                                        require a paid Premium subscription. Pricing is described within the App. We reserve the right to
                                        modify Premium features and pricing with reasonable notice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SectionCard>

                    {/* Section 5: Account Registration & Security */}
                    <SectionCard number={5} title="Account Registration & Security">
                        <SubHeading>5.1 Account Creation</SubHeading>
                        <CheckList items={[
                            "Provide accurate, current, and complete information during registration.",
                            "Maintain and update your information to keep it accurate.",
                            "Use only your own information (not impersonate any other person).",
                        ]} />

                        <SubHeading>5.2 Account Security</SubHeading>
                        <CheckList items={[
                            "Use a strong password and keep it secure.",
                            "Do not share your account credentials with any third party.",
                            "Notify us immediately of any unauthorized use of your account.",
                        ]} />

                        <SubHeading>5.3 Account Verification</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            We may require you to verify your identity or parental status through:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Email verification", "Phone verification", "Payment method verification (COPPA)", "Government-issued ID"].map((method) => (
                                <span key={method} className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {method}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm mt-3">We reserve the right to suspend or terminate accounts that cannot be verified.</p>
                    </SectionCard>

                    {/* Section 6: License Grant */}
                    <SectionCard number={6} title="License Grant">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Subject to your compliance with these Terms, we grant you a{" "}
                            <strong>limited, non-exclusive, non-transferable, non-sublicensable, revocable license</strong> to:
                        </p>
                        <CheckList items={[
                            "Download, install, and use the App on devices that you own or control, solely for personal, non-commercial, family purposes.",
                            "Access and use the Services as intended through the App's standard interface.",
                        ]} />
                        <p className="text-gray-600 text-sm mt-4 italic">
                            This license does not grant you any ownership rights in the Services. All rights not expressly granted are reserved by us.
                        </p>
                    </SectionCard>

                    {/* Section 7: User Obligations & Restrictions */}
                    <SectionCard number={7} title="User Obligations & Restrictions">
                        <SubHeading>7.1 Lawful Use</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree to use the Services only for lawful purposes and in compliance with all applicable laws, including:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Child privacy laws (COPPA, GDPR)", "Surveillance & consent laws", "Data protection & privacy laws"].map((law) => (
                                <span key={law} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100">{law}</span>
                            ))}
                        </div>

                        <SubHeading>7.2 Prohibited Activities</SubHeading>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                            <p className="font-bold text-red-800 mb-3">You agree NOT to:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {[
                                    "Monitor any person without proper legal authority and consent.",
                                    "Use the Services for any commercial, professional, educational, or institutional purpose.",
                                    "Reverse engineer, decompile, disassemble, or attempt to derive source code.",
                                    "Modify, adapt, translate, or create derivative works.",
                                    "Remove, obscure, or alter copyright, trademark, or proprietary notices.",
                                    "Rent, lease, sell, sublicense, or transfer your account or license.",
                                    "Damage, disable, overburden, or impair our systems.",
                                    "Attempt unauthorized access to the Services, accounts, or systems.",
                                    "Use automated means (bots, scrapers, scripts) to access the Services.",
                                    "Upload or transmit viruses, malware, or malicious code.",
                                    "Harass, abuse, stalk, or threaten others.",
                                    "Use the Services in any U.S.-embargoed country or on any restricted-party list.",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-red-800 text-sm">
                                        <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SectionCard>

                    {/* Section 8: Fees, Payment & Subscription */}
                    <SectionCard number={8} title="Fees, Payment & Subscription">
                        <div className="overflow-hidden rounded-xl border border-gray-200">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Topic</th>
                                        <th className="px-5 py-3 font-semibold text-gray-700 text-sm">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ["Free Tier", "Limited features provided \"as-is\"; may be modified or discontinued at any time."],
                                        ["Premium Subscription", "Paid subscription required for Premium features. Plans and pricing described in-app."],
                                        ["Automatic Renewal", "Auto-renews unless canceled 24+ hours before the billing period ends. Charged within 24 hours prior."],
                                        ["Price Changes", "Notified with reasonable notice; take effect at next billing period. Continued use = acceptance."],
                                        ["Payment Processing", "Processed through Apple App Store or Google Play Store, subject to their terms."],
                                        ["Refunds", "Handled per app store policies. Apple: reportaproblem.apple.com. Google: Google Play Support."],
                                        ["Taxes", "All prices exclude applicable taxes, which are your responsibility where required by law."],
                                    ].map(([topic, detail]) => (
                                        <tr key={topic} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-5 py-3.5 font-medium text-gray-800 text-sm">{topic}</td>
                                            <td className="px-5 py-3.5 text-gray-600 text-sm">{detail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </SectionCard>

                    {/* Section 9: Privacy & Data Collection */}
                    <SectionCard number={9} title="Privacy & Data Collection">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our collection, use, and sharing of your personal information is governed by our{" "}
                            <Link href="/privacy" className="text-purple-600 hover:text-purple-800 underline font-medium">Privacy Policy</Link>,
                            incorporated into these Terms by reference.
                        </p>
                        <InfoBox variant="highlight">
                            <h4 className="font-bold text-gray-800 mb-2">Children's Privacy (COPPA & International Laws)</h4>
                            <CheckList items={[
                                "We comply with COPPA and similar international laws.",
                                "We do not knowingly collect personal information from children under 13 without verifiable parental consent.",
                                "We do not sell children's personal information to third parties.",
                                "We do not serve personalized advertisements to children.",
                                "Parents have the right to review, download, and delete their child's data at any time.",
                            ]} />
                        </InfoBox>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We collect only the data reasonably necessary to provide the Services. For children's data,
                            we limit collection to the minimum required for parental monitoring functionality.
                        </p>
                    </SectionCard>

                    {/* Section 10: Parental Responsibilities */}
                    <SectionCard number={10} title="Parental Responsibilities">
                        <WarningBox>
                            <p className="font-semibold text-gray-800 mb-3">As a Parent using the Services, you acknowledge and agree that:</p>
                            <CheckList items={[
                                "You are solely responsible for deciding to monitor your child's device and activity.",
                                "You are solely responsible for complying with all applicable laws regarding monitoring, surveillance, and consent.",
                                "You are solely responsible for informing your child about monitoring and obtaining any required consent.",
                                "You are solely responsible for the content and activity under your child's monitored accounts.",
                                "You accept all liabilities, disclaimers, and limitations in these Terms on behalf of yourself and your child.",
                                "You will not hold us responsible for disputes between you and your child or any other family member.",
                            ]} />
                        </WarningBox>
                    </SectionCard>

                    {/* Section 11: Intellectual Property */}
                    <SectionCard number={11} title="Intellectual Property">
                        <SubHeading>11.1 Our Intellectual Property</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Services, including the App, Site, software, code, design, graphics, logos, trademarks, and content
                            are owned by or licensed to us and protected by copyright, trademark, trade secret, and other IP laws.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            OKMOM, the OKMOM logo, and all related names, logos, product and service names, designs, and slogans
                            are trademarks of OKMOM or its affiliates. You may not use such marks without prior written permission.
                        </p>

                        <SubHeading>11.2 Your Content</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            You retain ownership of data and content you submit ("User Content"). By using the Services, you grant us a
                            worldwide, royalty-free, non-exclusive license to use, reproduce, process, display, and distribute your
                            User Content solely to:
                        </p>
                        <CheckList items={[
                            "Provide the Services to you (e.g., syncing data across devices).",
                            "Improve and develop the Services (in aggregated, de-identified form).",
                            "Comply with legal obligations.",
                            "Enforce these Terms.",
                        ]} />

                        <SubHeading>11.3 Feedback</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            If you provide feedback, suggestions, or ideas, you grant us a perpetual, irrevocable, worldwide,
                            royalty-free license to use such feedback for any purpose without compensation.
                        </p>
                    </SectionCard>

                    {/* Section 12: Third-Party Services */}
                    <SectionCard number={12} title="Third-Party Services & Links">
                        <p className="text-gray-700 leading-relaxed">
                            The Services may contain links to third-party websites, services, or content that we do not own or control.
                            We are not responsible for their content, privacy practices, or terms. Your use of third-party services is
                            at your own risk and subject to their terms.
                        </p>
                    </SectionCard>

                    {/* Section 13: App Store Provisions */}
                    <SectionCard number={13} title="Apple App Store & Google Play Store Provisions">
                        <SubHeading>13.1 App Store Terms</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you downloaded from the Apple App Store or Google Play Store, your use is also subject to the
                            applicable store's terms. In case of conflict, the app store's terms prevail to the extent of the conflict.
                        </p>

                        <SubHeading>13.2 Third-Party Beneficiary</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Apple and Google, and their subsidiaries, are third-party beneficiaries of these Terms and have the
                            right to enforce these Terms against you.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Maintenance & Support", desc: "We, not Apple or Google, are solely responsible for providing maintenance and support." },
                                { title: "Product Claims", desc: "We are responsible for addressing claims relating to the App or your use of it." },
                                { title: "IP Claims", desc: "We are solely responsible for investigating, defending, and settling third-party IP claims." },
                            ].map((item) => (
                                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-semibold text-purple-700 text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* Section 14: Disclaimer of Warranties */}
                    <SectionCard number={14} title="Disclaimer of Warranties" highlight>
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 rounded-xl p-6">
                            <p className="text-gray-800 font-bold text-lg mb-4">
                                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                To the fullest extent permitted by applicable law, we disclaim all warranties, including:
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
                                <li>Warranties that the Services will be uninterrupted, error-free, secure, or available.</li>
                                <li>Warranties that defects or errors will be corrected.</li>
                                <li>Warranties that the Services are free of viruses or harmful components.</li>
                                <li>Warranties regarding accuracy, reliability, or completeness of any information.</li>
                            </ul>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            We do not guarantee the Services will prevent all exposure to inappropriate content, online risks,
                            or dangerous situations. The Services are a tool to assist parental supervision, not a substitute for
                            active parenting. As an early-stage product, the Services may be subject to occasional downtime,
                            bugs, or feature changes as we continue to improve.
                        </p>
                    </SectionCard>

                    {/* Section 15: Limitation of Liability */}
                    <SectionCard number={15} title="Limitation of Liability">
                        <SubHeading>15.1 Exclusion of Indirect Damages</SubHeading>
                        <WarningBox>
                            <p className="text-gray-700 mb-2">To the fullest extent permitted by applicable law, in no event shall OKMOM be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including:</p>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>Loss of profits, revenue, or data.</li>
                                <li>Loss of goodwill or business reputation.</li>
                                <li>Personal injury or property damage.</li>
                                <li>Emotional distress.</li>
                                <li>Damages from use or inability to use the Services.</li>
                                <li>Damages from monitoring or failure to properly monitor a child.</li>
                                <li>Damages from a child circumventing monitoring features.</li>
                            </ul>
                        </WarningBox>

                        <SubHeading>15.2 Cap on Direct Liability</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our total aggregate liability shall not exceed the greater of: (a) the amount you paid us for Premium
                            Services in the 12 months preceding the claim, or (b) <strong>USD $50.00</strong> if you have not paid any fees.
                        </p>
                    </SectionCard>

                    {/* Section 16: Indemnification */}
                    <SectionCard number={16} title="Indemnification">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree to indemnify, defend, and hold harmless OKMOM from any claims, liabilities, damages, losses,
                            costs, and expenses (including reasonable attorneys' fees) arising from:
                        </p>
                        <CheckList items={[
                            "Your use of the Services.",
                            "Your violation of these Terms.",
                            "Your violation of any applicable law or regulation.",
                            "Your violation of any third-party rights, including privacy rights.",
                            "Your monitoring of a child without proper legal authority or consent.",
                            "Any dispute between you and your child, co-parent, or family member.",
                            "Your User Content.",
                        ]} />
                    </SectionCard>

                    {/* Section 17: Termination */}
                    <SectionCard number={17} title="Termination">
                        <SubHeading>17.1 Termination by You</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may terminate your account at any time via the account deletion feature in the App, or by
                            contacting <a href="mailto:support@okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">support@okmom.co</a>.
                        </p>

                        <SubHeading>17.2 Termination by Us</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">We may suspend or terminate your account for:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Violation of Terms", "Illegal/fraudulent activity", "Non-payment", "Extended inactivity", "Harmful conduct"].map((r) => (
                                <span key={r} className="px-3 py-1 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100">{r}</span>
                            ))}
                        </div>

                        <SubHeading>17.3 Effect of Termination</SubHeading>
                        <CheckList items={[
                            "Your right to access and use the Services immediately ceases.",
                            "Your license to the App is revoked.",
                            "Data is deleted per our Privacy Policy, except as required by law.",
                            "You remain liable for outstanding fees.",
                            "Sections 11, 14, 15, 16, 18, and 19 survive termination.",
                        ]} />
                    </SectionCard>

                    {/* Section 18: Governing Law & Dispute Resolution */}
                    <SectionCard number={18} title="Governing Law & Dispute Resolution">
                        <SubHeading>18.1 Governing Law</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These Terms are governed by the laws of the <strong>State of Delaware, United States</strong>,
                            without regard to conflict of law principles.
                        </p>

                        <SubHeading>18.2 Informal Resolution</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Before formal legal action, contact us at{" "}
                            <a href="mailto:support@okmom.co" className="text-purple-600 hover:text-purple-800 underline font-medium">support@okmom.co</a>.
                            We will attempt to resolve the dispute within <strong>30 days</strong>.
                        </p>

                        <SubHeading>18.3 Binding Arbitration</SubHeading>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Any unresolved dispute shall be resolved by <strong>binding arbitration</strong> administered by the
                                American Arbitration Association (AAA) under its Consumer Arbitration Rules:
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                                <li>Conducted in English, via video conference unless otherwise agreed.</li>
                                <li>By a single arbitrator mutually agreed upon.</li>
                                <li>The award is final, binding, and may be entered as judgment in any court.</li>
                                <li>Proceedings on an individual basis only — no class, consolidated, or representative actions.</li>
                            </ul>
                        </div>

                        <SubHeading>18.4 Consumer Rights</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you reside in a jurisdiction with non-waivable consumer protection rights, this section does not limit those rights.
                        </p>

                        <SubHeading>18.5 Claims Limitation</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            Any claim must be filed within <strong>one (1) year</strong> after the cause of action arose, or be permanently barred.
                        </p>
                    </SectionCard>

                    {/* Section 19: Modifications to These Terms */}
                    <SectionCard number={19} title="Modifications to These Terms">
                        <SubHeading>19.1 Updates</SubHeading>
                        <p className="text-gray-700 leading-relaxed mb-4">When we make material changes, we will:</p>
                        <CheckList items={[
                            "Notify you through the App (in-app notice or banner) at least 30 days before changes take effect.",
                            "Send an email notification to the email address associated with your account.",
                            "Update the \"Last Updated\" date at the top of these Terms.",
                        ]} />

                        <SubHeading>19.2 Acceptance of Changes</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            Continued use after the effective date means you accept the changes. If you do not agree,
                            stop using the Services and delete your account before the changes take effect.
                        </p>
                    </SectionCard>

                    {/* Section 20: General Provisions */}
                    <SectionCard number={20} title="General Provisions">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Entire Agreement", desc: "These Terms + Privacy Policy = entire agreement regarding the Services." },
                                { title: "Severability", desc: "Invalid provisions shall be limited/eliminated; remaining provisions stay in full force." },
                                { title: "Waiver", desc: "Failure to enforce ≠ waiver. Any waiver must be in writing and signed." },
                                { title: "Assignment", desc: "You may not assign these Terms without our consent. We may assign freely." },
                                { title: "Force Majeure", desc: "We are not liable for failures caused by circumstances beyond our reasonable control." },
                                { title: "Relationship", desc: "No partnership, joint venture, employment, or agency relationship is created." },
                                { title: "Notices", desc: "Notices to you: email or in-app. Notices to us: support@okmom.co." },
                                { title: "Language", desc: "English version prevails in case of conflict with any translation." },
                            ].map((item) => (
                                <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                                    <h4 className="font-semibold text-purple-700 text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* Section 21: Contact Information */}
                    <SectionCard number={21} title="Contact Information">
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                            <div className="space-y-3">
                                <ContactRow icon="email" label="Email" value="support@okmom.co" href="mailto:support@okmom.co" />
                                <ContactRow icon="web" label="Website" value="okmom.co/support" href="/support" />
                                <ContactRow icon="clock" label="Response Time" value="We aim to respond within 5 business days." />
                            </div>
                        </div>
                    </SectionCard>

                    {/* Section 22: App Store Additional Terms */}
                    <SectionCard number={22} title="App Store Additional Terms">
                        <SubHeading>22.1 Apple App Store</SubHeading>
                        <CheckList items={[
                            "These Terms are between you and OKMOM only, not with Apple.",
                            "Apple is not responsible for the App or its content.",
                            "Apple has no obligation to provide maintenance or support.",
                            "You are not located in a U.S.-embargoed country or on a restricted-party list.",
                            "You must comply with all applicable third-party terms (e.g., wireless data agreement).",
                        ]} />

                        <SubHeading>22.2 Google Play Store</SubHeading>
                        <p className="text-gray-700 leading-relaxed">
                            If downloaded from Google Play, these Terms are also subject to the Google Play Terms of Service.
                            Google is not responsible for the App or its content.
                        </p>
                    </SectionCard>

                    {/* Agreement Footer */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white text-center shadow-xl">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Agreement to Terms</h3>
                        <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
                            By using OKMOM, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                        <p className="text-white/70 text-sm">
                            If you do not agree, please discontinue use of the App immediately.
                        </p>
                    </div>

                    <p className="text-center text-gray-500 text-sm pt-4">
                        These Terms were last updated on July 23, 2026 and are effective as of that date.
                    </p>
                </div>
            </section>
        </div>
    );
}

/* ─── Reusable Sub-Components ─── */

function SectionCard({ number, title, children, highlight }: { number: number; title: string; children: React.ReactNode; highlight?: boolean }) {
    return (
        <div className={`bg-white rounded-2xl shadow-sm border p-6 md:p-8 transition-shadow hover:shadow-md ${highlight ? 'border-amber-300 ring-1 ring-amber-100' : 'border-gray-100'}`}>
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

function InfoBox({ variant, children }: { variant: "highlight" | "warning"; children: React.ReactNode }) {
    const styles = variant === "highlight"
        ? "bg-blue-50 border-blue-200 text-gray-800"
        : "bg-amber-50 border-amber-200 text-gray-800";
    return (
        <div className={`border rounded-xl p-5 ${styles}`}>
            {children}
        </div>
    );
}

function WarningBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            {children}
        </div>
    );
}

function FeatureCard({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-purple-200 transition-colors">
            <h4 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {title}
            </h4>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-purple-400 mt-0.5">•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ContactRow({ icon, label, value, href }: { icon: "email" | "web" | "clock"; label: string; value: string; href?: string }) {
    const icons = {
        email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
        web: <><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
        clock: <><circle cx="12" cy="12" r="10" strokeWidth={2} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></>,
    };

    const content = (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icons[icon]}
                </svg>
            </div>
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                {href ? (
                    <a href={href} className="text-purple-600 hover:text-purple-800 font-medium">{value}</a>
                ) : (
                    <p className="text-gray-800 font-medium">{value}</p>
                )}
            </div>
        </div>
    );

    return content;
}
