import React from "react";
import { ArrowBigUpDash, ArrowBigDownDash } from 'lucide-react';

const Diference = ({ valorTotal, percentual }) => {
  // Define a cor e o ícone com base no valor total
  const isPositive = valorTotal >= 0;
  const valorFormatado = Math.abs(valorTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div
      id="diferenca"
      className={`text-xl border ${isPositive ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600'} rounded-lg w-80 mx-auto`}
    >
      <p className="border-b text-center p-3 font-bold">
        Diferença
      </p>
      <div className="flex items-center">
        <div className="flex justify-center p-3 border-r w-full font-bold">
          {isPositive ? <ArrowBigUpDash className="mt-[2px]" /> : <ArrowBigDownDash className="mt-[2px]" />}
          <span>{valorFormatado}</span>
        </div>
        <div className="flex justify-center p-3 w-full font-bold">
          {isPositive ? <ArrowBigUpDash className="mt-[2px]" /> : <ArrowBigDownDash className="mt-[2px]" />}
          <span>{percentual}%</span>
        </div>
      </div>
    </div>
  );
};

export default Diference;
