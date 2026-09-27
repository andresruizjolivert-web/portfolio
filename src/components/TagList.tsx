type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
