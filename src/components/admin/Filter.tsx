import { FiGlobe, FiMail, FiCalendar, FiUsers, FiBookOpen } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";
interface FilterProps {
  filters: any;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="h-full w-full bg-white shadow-lg rounded-lg px-4 w-[90%] py-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-2">
        {/* País */}
        <div className="relative">
          <label className="block text-[0.9rem] text-gray-600 font-medium mb-1">País</label>
          <span className="absolute inset-y-0 left-0 flex items-center top-[35%] pl-2 text-gray-400">
            <FiGlobe />
          </span>
          <input
            type="text"
            name="country"
            value={filters.country}
            onChange={onFilterChange}
            className="w-full flex text-[0.9rem]  pl-8 pr-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-[#CDA434] transition-all"
            placeholder="Filtrar por país"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1">Email</label>
          <span className="absolute inset-y-0 left-0 flex items-center top-[35%] pl-2 text-gray-400">
            <FiMail />
          </span>
          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={onFilterChange}
            className="w-full text-[0.9rem]  pl-8 pr-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-[#CDA434] transition-all"
            placeholder="Filtrar por email"
          />
        </div>

        {/* Fecha */}
        <div className="relative">
          <label className="block  text-sm text-gray-600 font-medium mb-1">Fecha</label>
          <span className="absolute text-[0.9rem]  inset-y-0 left-0 flex items-center top-[35%] pl-2 text-gray-400">
            <FiCalendar />
          </span>
          <input
            type="text"
            name="date"
            value={filters.date}
            onChange={onFilterChange}
            className="w-full text-[0.9rem] pl-8 pr-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-[#CDA434] transition-all"
            placeholder="Filtrar por fecha"
          />
        </div>

        {/* Invitados */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1">Invitados</label>
          <span className="absolute inset-y-0 left-0 flex items-center top-[35%] pl-2 text-gray-400">
            <FiUsers />
          </span>
          <input
            type="number"
            name="guests"
            value={filters.guests}
            onChange={onFilterChange}
            className="w-full pl-8 text-[0.9rem]  pr-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-[#CDA434] transition-all"
            placeholder="Cantidad"
          />
        </div>

        {/* Cena */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1">Cena</label>
          <span className="absolute inset-y-0 left-0 flex items-center top-[35%] pl-2 text-gray-400">
            <FiBookOpen />
          </span>
          <input
            type="text"
            name="cenaName"
            value={filters.cenaName}
            onChange={onFilterChange}
            className="w-full pl-8 text-[0.9rem]  pr-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-[#CDA434] transition-all"
            placeholder="Nombre de la cena"
          />
        </div>

        {/* Comida */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1">Comida</label>
          <span className="absolute inset-y-0 left-0 flex items-center top-[35%] pl-2 text-gray-400">
            <FaUtensils />
          </span>
          <input
            type="text"
            name="foodType"
            value={filters.foodType}
            onChange={onFilterChange}
            className="w-full pl-8 text-[0.9rem]  pr-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CDA434] focus:border-[#CDA434] transition-all"
            placeholder="Tipo de comida"
          />
        </div>
      </div>
    </div>
  );
};
