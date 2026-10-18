import { projects } from "@/data/projects";
import TerminalWindow from "../common/TerminalWindow";

// ls -l 출력 형식의 프로젝트 요약. 카드를 보기 전에 기간·규모·역할을 한눈에 보여줌
export default function ProjectList() {
  return (
    <TerminalWindow title="~/projects">
      <div className="overflow-x-auto font-mono text-sm sm:text-base">
        <p className="text-orange-400">$ ls -l projects/</p>
        <p className="mt-2 text-zinc-500">total {projects.length}</p>

        <table className="mt-1 border-collapse text-left">
          <caption className="sr-only">프로젝트 요약: 기간, 인원, 역할</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">권한</th>
              <th scope="col">기간</th>
              <th scope="col">인원</th>
              <th scope="col">역할</th>
              <th scope="col">프로젝트</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(({ id, ls, title }) => (
              <tr key={id} className="align-baseline">
                <td className="py-1 pr-6 text-zinc-600">drwxr-xr-x</td>
                <td className="py-1 pr-6 whitespace-nowrap text-zinc-400">{ls.period}</td>
                <td className="py-1 pr-6 whitespace-nowrap text-zinc-400">{ls.size}</td>
                <td className="py-1 pr-6 whitespace-nowrap text-zinc-300">{ls.role}</td>
                <td className="py-1">
                  <a href={`#project-${ls.slug}`} className="font-semibold text-sky-400 underline-offset-4 hover:underline" aria-label={`${title} 상세 보기`}>
                    {ls.slug}/
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TerminalWindow>
  );
}
