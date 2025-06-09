import { useEffect, useState } from "react";
import axios from "axios";
import LogoutButton from "../../components/LogoutButton";
import { formatDate } from "../../utils/helpers";
import { Filter } from "../../components/admin/Filter";
import { Table } from "../../components/admin/Table";
import { GiBroom } from "react-icons/gi";

const AdminData = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    country: "",
    email: "",
    date: "",
    guests: "",
    cenaName: "",
    foodType: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${API_URL}/cena_por_una_sonrisa`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    let filtered = data;

    if (filters.country) {
      filtered = filtered.filter((item) =>
        item.pais.name.toLowerCase().includes(filters.country.toLowerCase())
      );
    }

    if (filters.email) {
      filtered = filtered.filter((item) =>
        item.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }

    if (filters.date) {
      filtered = filtered.filter((item) =>
        formatDate(item.fecha_registro).includes(filters.date)
      );
    }

    if (filters.guests) {
      filtered = filtered.filter(
        (item) => item.cantidad_invitados.toString() === filters.guests
      );
    }

    if (filters.cenaName) {
      filtered = filtered.filter((item) =>
        item.cena_name.toLowerCase().includes(filters.cenaName.toLowerCase())
      );
    }

    if (filters.foodType) {
      filtered = filtered.filter((item) =>
        item.tipo_comida.toLowerCase().includes(filters.foodType.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [filters, data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleClearFilters = () => {
  setFilters({
    country: "",
    email: "",
    date: "",
    guests: "",
    cenaName: "",
    foodType: "",
  });
  setCurrentPage(1);
};

  return (
    <div className="min-h-screen bg-gray-800 max-w-full mx-auto p-6 flex flex-col justify-between">
      <div>
        <LogoutButton />
        <p className="text-[1.4rem] font-semibold mb-4 text-center text-white">Cena por una Sonrisa</p>

        {/* Filtros */}
        <div className="w-full bg-white rounded-lg">
          <div className="flex flex-col sm:flex-row md:flex-row  md:items-center gap-2 justify-between p-2">
          <Filter filters={filters} onFilterChange={handleFilterChange} />
          <button
  onClick={handleClearFilters}
  className="px-4 py-3 bg-[#1D2938] cursor-pointer text-[#06C8BE] hover:text-[#08dbcd] rounded-md hover:bg-[#0c1219] transition duration-200 flex items-center justify-center shadow-md"
  title="Limpiar filtros"
>
  <GiBroom className="h-6 w-6" />
</button>
        </div>
        </div>

        {/* Tabla o Loader */}
        <div className="bg-white shadow-lg rounded-lg p-2 mb-6 overflow-x-auto grow min-h-[200px] flex items-center justify-center">
          {loading ? (
            <div className="flex justify-center items-center w-full py-10">
              <div className="w-8 h-8 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
              <span className="ml-4 text-gray-600 text-sm">Cargando datos...</span>
            </div>
          ) : (
            <Table data={currentItems} />
          )}
        </div>
      </div>

      {/* Paginación */}
      {!loading && (
        <div className="flex justify-between items-center mt-auto border-t pt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-5 cursor-pointer py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            ← Anterior
          </button>

          <span className="text-base text-white font-medium">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-5 cursor-pointer py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminData;
