export default function Location({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className="flex items-center space-x-2">
        <img src="/location.svg" alt="位置マーク" />
        <span>Soshigaya-okura, Tokyo, JPN</span>
      </div>
    </div>
  );
}
