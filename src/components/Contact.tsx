import { motion } from 'framer-motion';
import { Mail, MessageSquare, CheckCircle, ArrowRight, Clock, Phone, FileText } from 'lucide-react';

const steps = [
  {
    icon: Clock,
    step: '01',
    title: 'Réponse sous 24h',
    description: 'Nous étudions votre demande et vous revenons rapidement avec un premier retour personnalisé.',
  },
  {
    icon: Phone,
    step: '02',
    title: 'Appel de découverte',
    description: 'Un échange de 30 minutes pour cerner vos besoins, vos objectifs et la vision de votre projet.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Proposition sur-mesure',
    description: 'Vous recevez un devis clair, détaillé et sans engagement, adapté à votre budget et vos délais.',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-white dark:bg-slate-800/30" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-badge">Contact</p>
            <h2 id="contact-heading" className="section-title mb-5">
              Démarrons votre<br />
              <span className="gradient-text">projet ensemble</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
              Une idée, un projet, une refonte ? Écrivez-nous. Nous vous répondons sous 24h avec une analyse gratuite et un devis personnalisé.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, title: 'Email', value: 'wixelopro@gmail.com' },
                { icon: MessageSquare, title: 'Réponse garantie', value: 'Sous 24h ouvrées' },
                { icon: CheckCircle, title: 'Premier rendez-vous', value: 'Offert et sans engagement' },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-0.5">{item.title}</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:wixelopro@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 active:scale-[0.97] transition-all duration-200 shadow-xl shadow-slate-900/25 hover:shadow-2xl hover:shadow-slate-900/30 hover:-translate-y-0.5 shimmer-btn group text-base"
            >
              Nous écrire
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Right — Process */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-5 lg:pt-[7rem]"
          >
            {/* Steps */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/50 p-7">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
                Ce qui se passe après votre message
              </p>
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    {/* Step indicator */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                        <step.icon className="w-4 h-4 text-white" aria-hidden="true" />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2 mb-0 min-h-[24px]" aria-hidden="true" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <span className="text-xs font-bold text-blue-500 dark:text-blue-400 tracking-widest">
                        ÉTAPE {step.step}
                      </span>
                      <h3 className="font-semibold text-slate-900 dark:text-white text-sm mt-0.5 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
