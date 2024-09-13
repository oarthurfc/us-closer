import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import Diference from './Diference';
import axios from "axios";

const PriceComparisonForm = () => {
  // Inicializa os estados com null para indicar que estão vazios
  const [valorProduto, setValorProduto] = useState(null);
  const [peso, setPeso] = useState(null); // Peso em libras
  const [valorServicoUsCloser, setValorServicoUsCloser] = useState(null);
  const [valorImposto, setValorImposto] = useState(0); 
  const [percentualICMS, setPercentualICMS] = useState(17); 
  const [valorICMS, setValorICMS] = useState(0); 
  const [valorTotal, setValorTotal] = useState(0);
  const [valorFrete, setValorFrete] = useState(15); 
  const [valorNoBrasil, setValorNoBrasil] = useState(null);
  const [diferenca, setDiferenca] = useState(0);

  const [precoDolar, setPrecoDolar] = useState(null);

  const calcularValorFrete = (peso) => {
    const tabelaFrete = {
      1: 15,
      2: 25,
      3: 35,
      4: 45,
      5: 55,
      6: 70,
      7: 80,
      8: 90,
      9: 100,
      10: 110,
    };
    return tabelaFrete[peso] || 110; 
  };

  useEffect(() => {
    axios.get("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((response) => {
        setPrecoDolar(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar o preço do dólar:", error);
      });
  }, []);

  useEffect(() => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (valorProduto !== null && peso !== null) {
      const freteCalculado = calcularValorFrete(peso);
      setValorFrete(freteCalculado);

      const novoImposto = (valorProduto + freteCalculado) * 0.6; 
      setValorImposto(novoImposto);

      const taxaICMS = percentualICMS / 100; 
      const novoICMS = ((valorProduto + freteCalculado + novoImposto) / (1 - taxaICMS)) * taxaICMS;
      setValorICMS(novoICMS);

      const novoValorTotal = (valorProduto + freteCalculado + valorServicoUsCloser + novoImposto + novoICMS) * Number(precoDolar.USDBRL.high); 
      setValorTotal(novoValorTotal);

      const novaDiferenca = valorNoBrasil - novoValorTotal;
      setDiferenca(novaDiferenca);
    }
  }, [valorProduto, peso, valorServicoUsCloser, percentualICMS, valorNoBrasil]);

  return (
    <div
      id="box"
      className="flex flex-col items-center justify-between w-full shadow-shape p-12 rounded-2xl gap-10"
    >
      <h2 className="text-2xl font-bold text-center">Custo para importar com a UsCloser</h2>
      <div id="inputs" className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <div id="fileira-1" className="grid grid-cols-1 items-end self-end sm:grid-cols-2 gap-5">
          <InputField
            type="text"
            label="Valor do produto"
            placeholder="US$ 0,00"
            id="inputValorDoProduto"
            required
            onValueChange={setValorProduto}
            currency="USD"
          />
          <InputField
            type="number"
            label="Peso"
            placeholder="1"
            id="inputPeso"
            required
            onValueChange={setPeso}
            additionalInfo="Lb"
            currency="libras"
            max="10"
          />
          <InputField
            type="text"
            label="ICMS"
            placeholder="17%"
            id="inputPercentualICMS"
            required
            onValueChange={(value) => setPercentualICMS(parseFloat(value))}
            additionalInfo="Estadual"
            currency="percent"
          />
          <InputField
            type="text"
            label="Imposto"
            disabled
            placeholder="R$ 0,00"
            id="inputImposto"
            additionalInfo="60%"
            value={valorImposto.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}
            currency="USD"
          />
        </div>
        <div id="fileira-2" className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputField
            type="text"
            label="Serviço da UsCloser"
            placeholder="US$ 0,00"
            id="inputServicoUsCloser"
            required
            onValueChange={setValorServicoUsCloser}
            currency="USD"
          />
          <InputField
            type="text"
            label="Valor no Brasil"
            placeholder="R$ 0,00"
            id="inputValorNoBrasil"
            required
            onValueChange={setValorNoBrasil}
            currency="BRL"
          />
          <InputField
            type="text"
            label="ICMS"
            disabled
            placeholder="R$ 0,00"
            id="inputICMS"
            additionalInfo="Estadual"
            value={valorICMS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            currency="BRL"
          />
          <InputField
            type="text"
            label="Valor total"
            disabled
            placeholder="R$ 0,00"
            id="inputValorTotal"
            value={valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            currency="BRL"
          />
        </div>
      </div>
      <Diference
        valorTotal={diferenca}
        percentual={valorNoBrasil !== null ? ((diferenca / valorNoBrasil) * 100).toFixed(2) : '0.00'} 
      />
    </div>
  );
};

export default PriceComparisonForm;
