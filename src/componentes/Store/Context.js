import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: () => { },

  respiracaoSuperficialDoDia: null,
  setRespiracaoSuperficialDoDia: () => { },

  respiracaoProfundaDoDia: null,
  setRespiracaoProfundaDoDia: () => { },

  relaxamentoDoDia: null,
  setRelaxamentoDoDia: () => { },


  numeroTarefasPendentes: null,
  setNumeroTarefasPendentes: () => { },

  idUsuario: null,
  setIdUsuario: () => { },

  idUsuarioReset: null,
  setIdUsuarioReset: () => { },

  nomeUsuario: null,
  setNomeUsuario: () => { },

  cpf: null,
  setCpf: () => { },

});

export default StoreContext;
