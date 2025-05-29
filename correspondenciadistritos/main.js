// main.js
fetch("distritos.json")
  .then(r => r.json())
  .then(data => crearTabla(data));

function crearTabla(data) {
  const columnas = [
    {title: "Sección",             data: "SECCIÓN"},
    {title: "Demarcación",         data: "DEMARCACIÓN TERRITORIAL"},
    {title: "Distrito Federal",    data: "DISTRITO JUDICIAL ELECTORAL FEDERAL"},
    {title: "PDF Federal",         data: "ArchivoJudicial", render: pdfLink},
    {title: "Distrito Local",      data: "DISTRITO JUDICIAL ELECTORAL LOCAL"},
    {title: "PDF Local",           data: "ArchivoLocal",    render: pdfLink}
  ];

  new DataTable("#tablaDistritos", {
    data,
    columns: columnas,
    responsive: true,
    searching: true,      // barra de búsqueda automática
    paging: true,         // paginación
    language: {
      url: "https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-MX.json"
    }
  });
}

function pdfLink(nombre) {
  if (!nombre) return "";
  return `<a class="btn btn-sm btn-primary" href="pdfs/${nombre}" target="_blank" rel="noopener">Ver PDF</a>`;
}
