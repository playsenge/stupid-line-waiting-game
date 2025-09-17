export const Badge = ({ content }: { content: string }) => (
  <div className="flex bg-[#4F4F4F] px-3 py-1 rounded-full text-sm">
    <span className="min-w-0">{content}</span>
  </div>
);
