type BadgeProps = {
  label: string;
};

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="text-xs font-lato px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900">
      {label}
    </span>
  );
}