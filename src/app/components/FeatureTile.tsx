export const FeatureTile = ({
  Icon,
  title,
  color,
  children,
}: {
  Icon: React.ElementType;
  title: string;
  color: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
    <div className="flex items-center gap-3 mb-3">
      <Icon className={`w-8 h-8 ${color}`} />
      <h3 className="text-white font-bold text-xl">{title}</h3>
    </div>
    <p className="text-gray-300">{children}</p>
  </div>
);
