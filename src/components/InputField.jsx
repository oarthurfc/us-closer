import React, { useState, useEffect } from 'react';

const InputField = ({type, label, placeholder, id, required, additionalInfo, disabled, onValueChange, value, currency = 'USD' }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Atualiza o campo quando o valor externo mudar, útil para campos calculados
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const formatCurrency = (value, currency) => {
    const numericValue = value.replace(/\D/g, ''); // Remove tudo que não é número
    
    if (currency === 'percent') {
      return `${numericValue}%`; // Formata como percentual
    }

    if (currency === 'libras') {
      if(numericValue > 10){
        return 10;
      }
      return `${numericValue}`; // Formata apenas como número
    }
    
    const formattedValue = (numericValue / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: currency === 'BRL' ? 'BRL' : 'USD',
    });
    return formattedValue; // Mantém a formatação padrão para moedas
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;
    
    // Tratamento específico para tipo de dado
    if (currency === 'percent') {
      const numericValue = rawValue.replace(/\D/g, ''); // Remove tudo que não é número
      setInputValue(`${numericValue}%`);
      if (onValueChange) {
        onValueChange(Number(numericValue)); // Envia o valor numérico puro
      }
    } else if (currency === 'libras') {
      const numericValue = rawValue.replace(/\D/g, ''); // Remove tudo que não é número
      if(numericValue > 10 ? setInputValue(10) : setInputValue(`${numericValue}`));
      if (onValueChange) {
        onValueChange(Number(numericValue)); // Envia o valor numérico puro
      }
    } else {
      setInputValue(formatCurrency(rawValue, currency));
      if (onValueChange) {
        // Passa o valor numérico puro para o cálculo
        onValueChange(Number(rawValue.replace(/\D/g, '')) / 100);
      }
    }

  };

  return (
    <div className="flex flex-col justify-end">
      <h5 className="text-lg font-bold">
        {label}{required && <span className="text-red-500 font-bold">*</span>} 
        {additionalInfo && <span className="text-[#9E9E9E] text-sm font-normal"> ({additionalInfo})</span>}
      </h5>
      <input
        type={type}
        id={id}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-azul-input placeholder-azul-cinza p-3 border-b border-[#0843c56b] rounded-t-[4px]"
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
