const somaHorasExtras = (salario, valorHorasExtra) => salario + valorHorasExtra;

const calculaDesconto = (salario, desconto) => salario - desconto;

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou`);
  } catch {
    console.log(`${titulo} não passou`);
  }
};

teste('somaHorasExtras', () => {
  const esperado = 250;
  const retornado = somaHorasExtras(200, 50);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 150;
  const retornado = calculaDesconto(200, 50);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
