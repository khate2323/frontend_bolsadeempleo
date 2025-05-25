import { Bell, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
      <div className="flex items-center gap-2">
        <Menu className="w-5 h-5" />
        <span className="font-semibold text-sm">Campus Unimayor<br />Sistema de egresados</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white px-3 py-1 rounded-full shadow text-sm font-semibold">Notificaciones</button>
        <Bell className="w-5 h-5" />
        <div className="w-8 h-8 rounded-full bg-gray-400" />
      </div>
    </div>
  );
}
    