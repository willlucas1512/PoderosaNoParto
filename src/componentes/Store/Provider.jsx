import React from 'react';
import Context from './Context';
import useStorage from './../../utils/useStorage';

const StoreProvider = ({ children }) => {

  const [token, setToken] = useStorage('token');
  const [idUsuario, setIdUsuario] = useStorage('idUsuario');
  const [idUsuarioReset, setIdUsuarioReset] = useStorage('idUsuarioReset');
  const [cpf, setCpf] = useStorage('cpf');
  const [nomeUsuario, setNomeUsuario] = useStorage('nomeUsuario');
  const [respiracaoSuperficialDoDia, setRespiracaoSuperficialDoDia] = useStorage('respiracaoSuperficialDoDia');
  const [respiracaoProfundaDoDia, setRespiracaoProfundaDoDia] = useStorage('respiracaoProfundaDoDia');
  const [relaxamentoDoDia, setRelaxamentoDoDia] = useStorage('relaxamentoDoDia');
  const [numeroTarefasPendentes, setNumeroTarefasPendentes,] = useStorage('numeroTarefasPendentes');

  return (

    <Context.Provider
      value={{
        token,
        setToken,
        cpf,
        setCpf,
        idUsuario,
        setIdUsuario,
        idUsuarioReset,
        setIdUsuarioReset,
        nomeUsuario,
        setNomeUsuario,
        respiracaoSuperficialDoDia,
        setRespiracaoSuperficialDoDia,
        respiracaoProfundaDoDia,
        setRespiracaoProfundaDoDia,
        relaxamentoDoDia,
        setRelaxamentoDoDia,
        numeroTarefasPendentes,
        setNumeroTarefasPendentes
      }}
    >
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;
