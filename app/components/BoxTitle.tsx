import { useTheme } from "~/provider/ThemeProvider";

export default function BoxTitle({ className }: { className: string }) {
  const theme = useTheme();
  const style = theme === "day" ? "bg-white" : "night" ? "bg-night-bg-box-title text-night-text-color" : "";
  return (
    <div className={className}>
      <div className={`${style} p-6 rounded-lg`}>
        <div className="text-xl">Falling boxes</div>
        <p>Three.js</p>
      </div>
    </div>
  );
}
