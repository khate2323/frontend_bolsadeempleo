import MenuSuperior from '../components/MenuSuperior';
import PerfilUsuario from '../components/PerfilUsuario';
import OfertaLaboral from '../components/OfertaLaboral';
import Navbar from '../components/Navbar';

export default function MiArea() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <MenuSuperior/>
      <div className="p-4 flex flex-col md:flex-row gap-6">
        <PerfilUsuario/>
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-700">Ofertas que <span className="text-blue-600 underline">encajan con tu perfil</span></h2>
          <OfertaLaboral
            titulo="Analista en ciberseguridad"
            empresa="TALYCAP GLOBAL"
            ubicacion="Bogotá, D.C."
            remoto="Remoto"
            fecha="Ayer"
          />
          <OfertaLaboral
            titulo="Desarrollador Senior FullStack"
            empresa="TECH UNIVERSIDAD"
            ubicacion="Bogotá, D.C."
            remoto="Presencial"
            fecha="Hace 4 días"
          />
        </div>
      </div>
    </div>
  );
}
