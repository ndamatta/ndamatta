type BadgeProps = {
  label: string;
  size?: "sm" | "xs";
};

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  xs: "text-[10px] px-1.5 py-0",
};

export default function Badge({ label, size = "sm" }: BadgeProps) {
  return (
    <span
      className={`${sizeClasses[size]} font-lato rounded-full bg-indigo-100 text-indigo-900`}
    >
      {label}
    </span>
  );
}
