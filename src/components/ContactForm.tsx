import { Send, UploadCloud } from 'lucide-react';
import { useMemo, useState } from 'react';
import { brand } from '../data/content';
import { GlassCard } from './GlassCard';

type ContactFormProps = {
  mode?: 'contact' | 'career';
};

export function ContactForm({ mode = 'contact' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');

  const href = useMemo(() => {
    const subject = mode === 'career' ? `Career application: ${role || 'ValeFarm role'}` : 'ValeFarm Kashmir enquiry';
    const body = `Name: ${name}\n\n${mode === 'career' ? `Role: ${role}\nResume: Please attach resume before sending.\n\n` : ''}Message:\n${message}`;
    return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [mode, name, message, role]);

  return (
    <GlassCard className="mx-auto max-w-3xl">
      <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-ink/70">
            Your name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/20 transition focus:ring-4"
              placeholder="Enter your name"
            />
          </label>
          {mode === 'career' ? (
            <label className="grid gap-2 text-sm font-semibold text-ink/70">
              Role
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/20 transition focus:ring-4"
              >
                <option value="">Select a role</option>
                <option>AI / Data Intern</option>
                <option>Agriculture Field Associate</option>
                <option>Product Engineer</option>
                <option>Partnerships & Growth</option>
                <option>Other</option>
              </select>
            </label>
          ) : (
            <label className="grid gap-2 text-sm font-semibold text-ink/70">
              Email
              <input
                className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/20 transition focus:ring-4"
                placeholder="you@example.com"
              />
            </label>
          )}
        </div>

        {mode === 'career' ? (
          <div className="rounded-2xl border border-dashed border-ink/15 bg-white/55 p-4 text-sm leading-6 text-ink/60">
            <div className="flex items-start gap-3">
              <UploadCloud className="mt-0.5 shrink-0 text-leaf" size={20} />
              <p>
                Click <span className="font-bold text-ink">Send resume</span>, then attach your CV or resume in the email window before sending it to ValeFarm.
              </p>
            </div>
          </div>
        ) : null}

        <label className="grid gap-2 text-sm font-semibold text-ink/70">
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-40 resize-y rounded-2xl border border-ink/10 bg-white/70 px-4 py-3 text-ink outline-none ring-leaf/20 transition focus:ring-4"
            placeholder={mode === 'career' ? 'Tell us about your background, skills and availability.' : 'Tell us how ValeFarm can help.'}
          />
        </label>
        <a href={href} className="magnetic-button inline-flex w-fit items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-bold text-white">
          <Send size={17} /> {mode === 'career' ? 'Send resume' : 'Send enquiry'}
        </a>
      </form>
    </GlassCard>
  );
}
