import React from "react";

const Main = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <div className="flex flex-col w-full max-w-screen-xl mx-auto p-10">
            <div id="content" className="flex flex-col items-center gap-10">
              <div className="max-w-[560px] text-center">
                <h1 className="text-4xl font-bold">Comparador de preços</h1>
                <p className="text-azul-escuro">
                  Preencha todos os campos indicados por <span className="text-red-500 font-bold">*</span> e veja a comparação entre o
                  preço no Brasil e o preço de importação de forma gratuita!
                </p>
              </div>
              <PriceComparisonForm />
            </div>
          </div>
          <Footer />
        </div>
      );
  };
  
  export default Main;