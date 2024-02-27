// Test


const contarHormigasMuertasConTernarios = require('./contarHormigas'); // Asegúrate de exportar tu función en el archivo original

describe('contarHormigasMuertasConTernarios', () => {
  test('debe contar correctamente con secuencias sin "ant"', () => {
    expect(contarHormigasMuertasConTernarios('aannnttt')).toBe(3); // Asumiendo que la función devuelve el número máximo de hormigas muertas
  });

  test('debe contar correctamente con múltiples ocurrencias de "ant"', () => {
    expect(contarHormigasMuertasConTernarios('...ant...ant..nat.ant.t..ant...')).toBe(0); // Ajusta los valores esperados según tu lógica
  });

  test('debe manejar cadenas vacías correctamente', () => {
    expect(contarHormigasMuertasConTernarios('')).toBe(0);
  });

  test('debe manejar casos con solo "ant" correctamente', () => {
    expect(contarHormigasMuertasConTernarios('antantant')).toBe(0);
  });

  // Agrega más tests según sea necesario para cubrir diferentes casos y bordes
});