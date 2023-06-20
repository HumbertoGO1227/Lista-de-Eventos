import React from "react";

const EventoItem = ({ evento, index, editarEvento, removerEvento }) => {
  return (
    <li>
      <span>{evento.descricao}</span>
      <span>{evento.data}</span>
      <button onClick={() => editarEvento(index)}>Editar</button>
      <button onClick={() => removerEvento(index)}>Remover</button>
    </li>
  );
};

export default EventoItem;
