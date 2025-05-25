export default function MenuSuperior() {
  const items = [
    { id: 'mi-area', text: 'Mi área' },
    { id: 'hoja-de-vida', text: 'Hoja de vida' },
    { id: 'postulaciones', text: 'Mis postulaciones' },
    { id: 'vacantes', text: 'Visualizar vacantes' },
  ];

  return (
    <div className="flex justify-around bg-blue-100 py-2">
      {items.map((item) => (
        <button
          key={item.id}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            item.text === 'Mi área' ? 'bg-blue-600 text-white' : 'bg-white'
          }`}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
