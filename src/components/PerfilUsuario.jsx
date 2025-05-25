export default function PerfilUsuario() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex gap-4 w-full max-w-md">
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div>
        <h2 className="text-blue-700 font-bold text-sm">DIANA KATERINE IDROBO ORTIZ</h2>
        <p className="text-sm">🧑‍💻 Ingeniera en informática</p>
        <p className="text-sm">📊 Perfil completado <span className="text-green-600 font-semibold">87%</span></p>
        <a href="/#" onClick={(e) => e.preventDefault()} className="text-blue-600 text-sm underline">
  Completar perfil
</a>

      </div>
    </div>
  );
}
