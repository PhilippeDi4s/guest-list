import styles from "./animated-background.module.css";

const colors = [
  "bg-pink-600",
  "bg-pink-700",
  "bg-pink-600",
  "bg-pink-700",
  "bg-pink-600",
];

export function InvitationLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="overflow-hidden relative min-h-screen w-full flex items-center justify-center lg:w-50%">
      <div className="absolute inset-0 -z-10 grid grid-cols-5">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`${color} ${styles.stripe}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <div className="w-full flex flex-col items-center justify-center">{children}</div>
    </section>
  );
}
