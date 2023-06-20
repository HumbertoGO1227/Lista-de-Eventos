import React from "react";

const EventoForm = ({ novoEvento, setNovoEvento, dataAtual, setDataAtual, adicionarEvento, atualizarEvento, eventoEditando }) => {
  return (
    <div>
      <input
        type="date"
        value={dataAtual}
        onChange={(e) => setDataAtual(e.target.value)}
      />
      <input
        type="text"
        value={novoEvento}
        onChange={(e) => setNovoEvento(e.target.value)}
      />
      {eventoEditando ? (
        <button onClick={atualizarEvento}>Atualizar</button>
      ) : (
        <button onClick={adicionarEvento}>Adicionar</button>
      )}
    </div>
  );
};

export default EventoForm;
