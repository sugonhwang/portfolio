import TerminalWindow from "../common/TerminalWindow";

export default function ProfileCard() {
  return (
    <TerminalWindow title="about.md">
      <div className="space-y-5 font-mono">
        <p className="text-orange-400">$ cat about.md</p>

        <p>이름 : 황수곤</p>

        <p>직무 : Frontend Developer</p>

        <p>경력 : Information Security (9 Years)</p>

        <div>
          <p className="text-orange-400">Background :</p>

          <ul className="mt-2 space-y-1 pl-6 text-zinc-300">
            <li>- Security Operations</li>

            <li>- Vulnerability Analysis</li>

            <li>- Security Solutions</li>

            <li>- ISMS / ISO 27001</li>
          </ul>
        </div>

        <div>
          <p className="text-orange-400">Current Focus :</p>

          <ul className="mt-2 space-y-1 pl-6 text-zinc-300">
            <li>- React</li>

            <li>- Next.js</li>

            <li>- TypeScript</li>

            <li>- Tailwind CSS</li>
          </ul>
        </div>

        <p className="pt-2 leading-7 text-zinc-400">보안의 관점에서 서비스를 이해하고, 사용자의 관점에서 웹을 만드는 개발자를 목표로 하고 있습니다.</p>

        <p className="animate-pulse text-orange-400">▋</p>
      </div>
    </TerminalWindow>
  );
}
