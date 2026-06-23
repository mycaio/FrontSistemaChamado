function DashboardCard({ titulo, valor }) {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-gray-500 text-lg">{titulo}</h2>
      <p className="text-3xl font-bold mt-3">{valor}</p>
    </div>
  );
}

export default DashboardCard;
