import FadeIn from "../common/FadeIn";
import Section from "../common/Section";
import TerminalWindow from "../common/TerminalWindow";

import { social } from "@/data/social";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="$ contact --help">
      <FadeIn>
        <TerminalWindow title="contact.sh">
          <div className="space-y-5 break-all font-mono">
            <p className="text-orange-400">$ contact --help</p>

            <a href={social.github} target="_blank" rel="noopener noreferrer" className="block transition hover:text-orange-400">
              💻 GitHub <span className="text-zinc-500">— github.com/sugonhwang</span>
            </a>

            <a href={`mailto:${social.email}`} className="block transition hover:text-orange-400">
              📧 Email <span className="text-zinc-500">— {social.email}</span>
            </a>

            <a href={social.resume} target="_blank" rel="noopener noreferrer" className="block transition hover:text-orange-400">
              📄 Resume
            </a>

            <span className="animate-pulse text-orange-400">▋</span>
          </div>
        </TerminalWindow>
      </FadeIn>
    </Section>
  );
}
