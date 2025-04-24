import { formatDate } from "../../utils/helpers";

interface TableProps {
  data: any[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full  table-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="px-6 py-3 text-left font-medium">Nombre</th>
          <th className="px-6 py-3 text-left font-medium">Email</th>
          <th className="px-6 py-3 text-left font-medium">Fecha Registro</th>
          <th className="px-6 py-3 text-left font-medium">Invitados</th>
          <th className="px-6 py-3 text-left font-medium">Cena</th>
          <th className="px-6 py-3 text-left font-medium">Comida</th>
          <th className="px-6 py-3 text-left font-medium">País</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <td className="px-6 py-4 text-gray-800">{item.nombre}</td>
            <td className="px-6 py-4 text-gray-600">{item.email}</td>
            <td className="px-6 py-4 text-gray-500">{formatDate(item.fecha_registro)}</td>
            <td className="px-6 py-4 text-gray-700">{item.cantidad_invitados}</td>
            <td className="px-6 py-4 text-gray-800">{item.cena_name}</td>
            <td className="px-6 py-4 text-gray-600">{item.tipo_comida}</td>
            <td className="px-6 py-4 text-gray-700">{item.pais.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
