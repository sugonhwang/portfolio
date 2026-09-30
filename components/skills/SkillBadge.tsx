interface Props {
  name: string;
}

export default function SkillBadge({ name }: Props) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/10
        bg-[#161B22]
        px-4
        py-2
        text-sm
        transition-all
        duration-300
        hover:border-orange-400
        hover:text-orange-400
      "
    >
      {name}
    </div>
  );
}
