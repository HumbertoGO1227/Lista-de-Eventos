import React, { useState, useEffect } from "react";

const EventoItem = ({ evento, index, editarEvento, removerEvento }) => {
  const [descricao, setDescricao] = useState(evento.descricao);

  useEffect(() => {
    localStorage.setItem(`evento_${index}`, descricao);
  }, [descricao, index]);

  return (
    <li>
      <span>{evento.data}</span>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button onClick={() => editarEvento(index)}>Editar</button>
      <button onClick={() => removerEvento(index)}>Remover</button>
    </li>
  );
};

export default EventoItem;
