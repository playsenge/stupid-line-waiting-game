export const Badge = ({ content }: { content: string }) => (
  <div className="flex bg-purple-900 px-3 py-1 rounded-full text-sm">
    <span className="min-w-0">{content}</span>
  </div>
);
