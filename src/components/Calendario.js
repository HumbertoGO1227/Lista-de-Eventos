import React, { useState, useEffect } from "react";
import EventoForm from "./EventoForm";
import EventoItem from "./EventoItem";
import "./Calendario.css";

const Calendario = () => {
  const [eventos, setEventos] = useState([]);
  const [novoEvento, setNovoEvento] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const [eventoEditando, setEventoEditando] = useState(null);

  // Carregar eventos salvos em localStorage
  useEffect(() => {
    const eventosSalvos = localStorage.getItem("eventos");
    if (eventosSalvos) {
      setEventos(JSON.parse(eventosSalvos));
    }
  }, []);

  // Atualizar localStorage quando os eventos mudarem
  useEffect(() => {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }, [eventos]);

  // Adicionar novo evento
  const adicionarEvento = () => {
    if (novoEvento && dataAtual) {
      const novoEventoObj = {
        data: dataAtual,
        descricao: novoEvento
      };
      setEventos((prevEventos) => {
        const novosEventos = [...prevEventos, novoEventoObj];
        localStorage.setItem("eventos", JSON.stringify(novosEventos));
        return novosEventos;
      });
      setNovoEvento("");
      setDataAtual("");
    }
  };

  // Editar evento
  const editarEvento = (index) => {
    const eventoSelecionado = eventos[index];
    setEventoEditando(eventoSelecionado);
    setNovoEvento(eventoSelecionado.descricao);
    setDataAtual(eventoSelecionado.data);
  };

  // Atualizar evento
  const atualizarEvento = () => {
    if (eventoEditando && novoEvento && dataAtual) {
      setEventos((prevEventos) => {
        const eventosAtualizados = prevEventos.map((evento, index) => {
          if (index === eventos.indexOf(eventoEditando)) {
            return {
              data: dataAtual,
              descricao: novoEvento
            };
          }
          return evento;
        });
        localStorage.setItem("eventos", JSON.stringify(eventosAtualizados));
        return eventosAtualizados;
      });
      setEventoEditando(null);
      setNovoEvento("");
      setDataAtual("");
    }
  };

  // Remover evento
  const removerEvento = (index) => {
    setEventos((prevEventos) => {
      const eventosAtualizados = [...prevEventos];
      eventosAtualizados.splice(index, 1);
      localStorage.setItem("eventos", JSON.stringify(eventosAtualizados));
      return eventosAtualizados;
    });
  };

  return (
    <div>
      <h2>Lista de Eventos</h2>
      <EventoForm
        novoEvento={novoEvento}
        setNovoEvento={setNovoEvento}
        dataAtual={dataAtual}
        setDataAtual={setDataAtual}
        adicionarEvento={adicionarEvento}
        atualizarEvento={atualizarEvento}
        eventoEditando={eventoEditando}
      />
      <ul>
        {eventos.map((evento, index) => (
          <EventoItem
            key={index}
            evento={evento}
            index={index}
            editarEvento={editarEvento}
            removerEvento={removerEvento}
          />
        ))}
      </ul>
    </div>
  );
};

export default Calendario;
