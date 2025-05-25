import PropTypes from 'prop-types';

export default function OfertaLaboral({ titulo, empresa, ubicacion, remoto, fecha }) {
  return (
    <div className="bg-blue-50 rounded-xl shadow p-4 w-full max-w-md">
      <h3 className="font-semibold">{titulo}</h3>
      <p className="text-blue-700 font-semibold">{empresa}</p>
      <p className="text-sm text-gray-700">{ubicacion}</p>
      <p className="text-sm text-gray-700">🏠 {remoto}</p>
      <p className="text-sm text-gray-500">{fecha}</p>
    </div>
  );
}

// ✅ Validación de props
OfertaLaboral.propTypes = {
  titulo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  ubicacion: PropTypes.string.isRequired,
  remoto: PropTypes.string, // o boolean si fuera true/false
  fecha: PropTypes.string.isRequired,
};
