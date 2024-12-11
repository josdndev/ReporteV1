import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f0f0f0', // Fondo claro
    color: '#000000', // Texto negro
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
  },
});


const getTextColor = (type) => {
  switch (type) {
    case 'correctivo':
      return '#FFA500'; // Orange
    case 'preventivo':
      return '#008000'; // Green
    case 'critico':
      return '#FF0000'; // Red
    default:
      return '#000000'; // Default black color
  }
};

const ReportePDF = ({ tareas }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Reporte de Actividades</Text>
      <Text style={styles.subtitle}>{tareas.name}</Text>
      {tareas.task.map((tareas) => (
        <Text style={{ ...styles.content, color: getTextColor(tareas.type) }}>
        - {tareas.date}: {tareas.descripcion}
        </Text>
      ))}
    </Page>
  </Document>
);

export default ReportePDF;
