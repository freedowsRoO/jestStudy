import { somaHorasExtras, calculaDesconto } from '../index';

describe('Testes dos cálculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve retornar o descontodo salário', () => {
    const esperado = 1500;
    const retornado = calculaDesconto(2000, 500);

    expect(retornado).toBe(esperado);
  });
});
