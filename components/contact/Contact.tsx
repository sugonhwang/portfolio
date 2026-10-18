import FadeIn from "../common/FadeIn";
import Section from "../common/Section";
import TerminalWindow from "../common/TerminalWindow";

import { social } from "@/data/social";

const links = [
  { label: "github", text: "github.com/sugonhwang", href: social.github, external: true },
  { label: "email", text: social.email, href: `mailto:${social.email}`, external: false },
  { label: "resume", text: "resume.pdf", href: social.resume, external: true },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact" command="contact --help">
      <FadeIn>
        <TerminalWindow title="contact.sh">
          <div className="font-mono">
            <p className="text-zinc-500">Usage: contact [option]</p>

            <dl className="mt-6 grid grid-cols-[5.5rem_1fr] gap-y-4 sm:grid-cols-[7rem_1fr]">
              {links.map(({ label, text, href, external }) => (
                <div key={label} className="contents">
                  <dt className="text-orange-400">--{label}</dt>
                  <dd className="break-all">
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="underline-offset-4 transition-colors hover:text-orange-400 hover:underline">
                      {text}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </TerminalWindow>
      </FadeIn>
    </Section>
  );
}
