import React from "react";

const EventoForm = ({
  novoEvento,
  setNovoEvento,
  dataAtual,
  setDataAtual,
  adicionarEvento,
  atualizarEvento,
  eventoEditando
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventoEditando) {
      atualizarEvento();
    } else {
      adicionarEvento();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição do evento"
        value={novoEvento}
        onChange={(e) => setNovoEvento(e.target.value)}
      />
      <input
        type="date"
        value={dataAtual}
        onChange={(e) => setDataAtual(e.target.value)}
      />
      <button type="submit">{eventoEditando ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default EventoForm;
