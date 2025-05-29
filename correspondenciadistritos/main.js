fetch("distritos.json")
  .then(r => r.json())
  .then(data => {
    $('#tablaDistritos').DataTable({
      data,
      columns: [
        { title: 'Sección',          data: 'SECCIÓN' },
        { title: 'Demarcación',      data: 'DEMARCACIÓN TERRITORIAL' },
        { title: 'Distrito Federal', data: 'DISTRITO JUDICIAL ELECTORAL FEDERAL' },
        { title: 'PDF Federal',      data: 'ArchivoJudicial', render: pdfLink },
        { title: 'Distrito Local',   data: 'DISTRITO JUDICIAL ELECTORAL LOCAL' },
        { title: 'PDF Local',        data: 'ArchivoLocal',    render: pdfLink }
      ],
      responsive: true,
      language: { url: 'https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-MX.json' }
    });
  });

function pdfLink(nombre) {
  return nombre
    ? `<a class="btn btn-sm btn-primary" href="pdfs/${nombre}"
           target="_blank" rel="noopener">Ver PDF</a>`
    : '';
}
