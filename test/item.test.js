import Item from '../carrinho/item';

describe('Teste dos itens', () => {
  it('Deve ter os campos: nome, valor e quantidade', () => {
    const item = new Item('Beterraba', 2.5, 10);

    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('Batata', 0.3, 10);

    // expect(item.pegaValorTotalItem()).toBe(3);

    // Essa função trabalha melhor com calculos e pontos flutuantes.
    expect(item.pegaValorTotalItem()).toBeCloseTo(3);
  });
});
