
// === Comportamento de novo ERP ===
const AUTO_ADD_DEFAULT_SERVICES = false; // false = não pré-popula serviços no novo ERP

// Dados dos ERPs e serviços
const erpData = {
    IXC: {
        name: 'IXC',
        active: true,
        services: [
            {
                id: 'buscar_cliente',
                label: 'Buscar cliente',
                checked: true,
                config: {
                    descricao: 'Busca informações de clientes no sistema IXC',
                    instrucoes: 'Utilize este serviço para localizar clientes por ID, nome ou documento',
                    endpoint: 'https://demo.ixcsoft.com.br/webservice/v1/cliente',
                    parametros: JSON.stringify({
                        "qtype": "cliente.id",
                        "query": "1",
                        "oper": ">=",
                        "page": "1",
                        "rp": "19",
                        "sortname": "cliente.id",
                        "sortorder": "desc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: false,
                        exigeCpfCnpj: true,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'buscar_contrato',
                label: 'Buscar contrato',
                checked: true,
                config: {
                    descricao: 'Busca contratos de clientes no sistema IXC',
                    instrucoes: 'Utilize para localizar contratos ativos ou inativos',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: true,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Comercial',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'buscar_faturas',
                label: 'Buscar faturas',
                checked: true,
                config: {
                    descricao: 'Consulta faturas em aberto ou pagas',
                    instrucoes: 'Permite visualizar histórico de faturas do cliente',
                    endpoint: 'https://host/webservice/v1/fn_areceber',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Financeiro',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'gerar_fatura',
                label: 'Gerar fatura',
                checked: true,
                config: {
                    descricao: 'Gera nova fatura para o cliente',
                    instrucoes: 'Criar faturas avulsas ou recorrentes',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: true,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Financeiro',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'gerar_pix_fatura',
                label: 'Gerar PIX da fatura',
                checked: true,
                config: {
                    descricao: 'Gera código PIX para pagamento de faturas',
                    instrucoes: 'Facilita o pagamento via PIX para clientes',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: false
                    },
                    responsavelPadrao: 'Financeiro',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'renegociar_fatura',
                label: 'Renegociar fatura',
                checked: true,
                config: {
                    descricao: 'Permite renegociação de débitos em aberto',
                    instrucoes: 'Ferramenta para acordos e parcelamentos',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: true,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Financeiro',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'desbloqueio_confianca',
                label: 'Desbloqueio de confiança',
                checked: true,
                config: {
                    descricao: 'Desbloqueio temporário por confiança',
                    instrucoes: 'Permite acesso temporário mediante compromisso de pagamento',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: true,
                        exigeLoginAtivo: false
                    },
                    responsavelPadrao: 'Suporte',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'verificar_sinal',
                label: 'Verificar sinal',
                checked: true,
                config: {
                    descricao: 'Verifica qualidade do sinal do cliente',
                    instrucoes: 'Diagnóstico técnico da conexão',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'abrir_chamado',
                label: 'Abrir chamado',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'cadastrar_lead',
                label: 'Cadastrar lead',
                checked: true,
                config: {
                    descricao: 'Cadastro de novos leads/prospects',
                    instrucoes: 'Registra potenciais clientes no sistema',
                    endpoint: 'https://demo.ixcsoft.com.br/webservice/v1/contato',
                    parametros: JSON.stringify({
                        "nome": "API Ferreira",
                        "data_cadastro": "24/06/2024",
                        "fone_celular": "49999999999"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: false,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: false
                    },
                    responsavelPadrao: 'Comercial',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'buscar_cobertura',
                label: 'Buscar cobertura',
                checked: true,
                config: {
                    descricao: 'Verifica cobertura de rede na região',
                    instrucoes: 'Consulta disponibilidade de serviços por localização',
                    endpoint: 'https://demo.ixcsoft.com.br/webservice/v1/rad_caixa_ftth',
                    parametros: JSON.stringify({
                        "qtype": "rad_caixa_ftth.id",
                        "query": "1",
                        "oper": ">=",
                        "page": "1",
                        "rp": "1000",
                        "sortname": "rad_caixa_ftth.id",
                        "sortorder": "desc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: false,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: false
                    },
                    responsavelPadrao: 'Comercial',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE',
                label: 'TESTE',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE2',
                label: 'TESTE2',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE3',
                label: 'TESTE3',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE4',
                label: 'TESTE4',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE5',
                label: 'TESTE55',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE6',
                label: 'TESTE6',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE7',
                label: 'TESTE7',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE8',
                label: 'TESTE8',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
            {
                id: 'TESTE9',
                label: 'TESTE9',
                checked: true,
                config: {
                    descricao: 'Abertura de chamados técnicos',
                    instrucoes: 'Registra solicitações de suporte técnico',
                    endpoint: 'https://host/webservice/v1/cliente_contrato',
                    parametros: JSON.stringify({
                        "qtype": "cliente_contrato.id",
                        "query": "3,1",
                        "oper": "NI",
                        "page": "1",
                        "rp": "100",
                        "sortname": "cliente_contrato.id",
                        "sortorder": "asc"
                    }, null, 2),
                    prerequisitos: {
                        exigeContrato: true,
                        exigeCpfCnpj: false,
                        exigeLoginAtivo: true
                    },
                    responsavelPadrao: 'Suporte Técnico',
                    ativo: true,
                    semAPI: false
                }
            },
        ]
    },
    SGP: {
        name: 'SGP',
        active: true,
        services: [
            // Agente Financeiro
            //{ id: 'agente_financeiro', label: 'Agente Financeiro', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'buscar_faturas_sgp', label: 'Buscar faturas', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'gera_fatura_pdf_pix', label: 'Gera fatura em PDF/PIX', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'desbloqueio_confianca_sgp', label: 'Desbloqueio de confiança', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'responde_duvidas_institucionais', label: 'Responde dúvidas institucionais', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'negociacao_faturas', label: 'Negociação de faturas', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'fluxo_ativo_disparo_cobranca', label: 'Fluxo de ativo/disparo de cobrança', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'disparo_pos_cobranca', label: 'Disparo de pós cobrança', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'agente_responsavel_criacao_cobrancas', label: 'Agente responsável pela criação das cobranças', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'faixa_inadimplencia', label: 'Faixa de inadimplência', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'campanhas_personalizadas', label: 'Campanhas personalizadas', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'business_intelligence', label: 'Business Intelligence', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'envio_email_finalizacao_campanha', label: 'Envio no e-mail da finalização da campanha', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'analise_comportamental_cobranca', label: 'Análise comportamental de cobrança', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'alteracao_data_fatura_pro_rata', label: 'Alteração de data com fatura pró-rata', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            
            // Agente Suporte
            

            { id: 'agente_suporte', label: 'Agente Suporte', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'identificar_motivo_bloqueio', label: 'Identificar motivo de bloqueio', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'identificar_dispositivo_incompativel', label: 'Identificar dispositivo incompatível', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'identificar_sinal_loss', label: 'Identificar sinal de loss', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'tratativa_massiva', label: 'Tratativa de massiva', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'identifica_perda_sinal_atenuacao', label: 'Identifica perda de sinal (atenuação)', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'abertura_chamados_sgp', label: 'Abertura de chamados', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'responde_duvidas_institucionais_suporte', label: 'Responde dúvidas institucionais', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'analise_sentimento', label: 'Análise de sentimento', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'encaminhar_especialista', label: 'Encaminhar especialista', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'troca_nome_senha', label: 'Troca de nome e senha', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            
            // Agente Comercial
            { id: 'agente_comercial', label: 'Agente Comercial', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'nova_contratacao', label: 'Nova contratação', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'apresentacao_planos', label: 'Apresentação de planos', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'tratativa_personalizada', label: 'Tratativa personalizada', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'identificacao_pacote_correto', label: 'Identificação do pacote correto', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'segundo_ponto', label: '2º ponto', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'mudanca_endereco_comodo_ponto', label: 'Mudança de endereço/cômodo/ponto', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'identifica_localizacao_fisica', label: 'Identifica localização física', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
            { id: 'downgrade_upgrade', label: 'Downgrade e upgrade', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } }
        ]
    }
};

// Variáveis globais
let currentErp = null;
let currentServiceConfig = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadSavedData();

    const form = document.getElementById('servicesForm');

// 1. nunca submeter esse form (tudo é controlado por JS)
form.addEventListener('submit', (e) => e.preventDefault());

// 2. impedir Enter de submeter (exceto em textarea)
form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') e.preventDefault();
});

// 3. dar type="button" para qualquer botão sem type (defensivo)
document.querySelectorAll('#servicesForm button:not([type])')
  .forEach(btn => btn.type = 'button');
document.querySelectorAll('.modal button:not([type])')   // opcional, por clareza
  .forEach(btn => btn.type = 'button');

// 4. opcional: desliga a validação nativa do HTML5 (você já valida via JS)
form.setAttribute('novalidate', '');

});

// Para deletar os ERPS
document.getElementById('deleteServiceBtn2').addEventListener('click', () => {
    deleteCustomErp();
});

function deleteCustomErp() {
    if (!currentErp) {
        showNotification('Selecione um ERP para excluir', 'error');
        return;
    }

    // Impede exclusão de ERPs fixos
    const fixedErps = ['IXC', 'SGP', //'VOALLE', 'FLUXOS', 'MK', 'HUBSOFT', 'TOPSAPP'
    ];
    if (fixedErps.includes(currentErp)) {
        showNotification('Este ERP não pode ser excluído', 'error');
        return;
    }

    if (!confirm(`Tem certeza que deseja excluir o ERP "${currentErp}"?`)) {
        return;
    }

    // Remove do objeto erpData
    delete erpData[currentErp];

    // Remove do DOM
    const card = document.querySelector(`.erp-card[data-erp="${currentErp}"]`);
    if (card) {
        card.remove();
    }

    // Salva alterações
    saveData();

    // Reseta seleção
    currentErp = null;
    document.getElementById('servicesSection').style.display = 'none';

    showNotification(`ERP excluído com sucesso`, 'success');
}




function initializeApp() {
    // Definir data atual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('contractDate').value = today;
    ensureProtocolFilled();
}

function setupEventListeners() {
    // Event listeners para ERPs
    document.querySelectorAll('.erp-card').forEach(card => {
        card.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                selectErp(this.dataset.erp);
            }
        });
    });
    

    // Event listeners para botões principais
    document.getElementById('addNewErpBtn').addEventListener('click', openNewErpModal);
    document.getElementById('selectAllBtn').addEventListener('click', selectAllServices);
    document.getElementById('deselectAllBtn').addEventListener('click', deselectAllServices);
    document.getElementById('addNewServiceBtn').addEventListener('click', openNewServiceModal);

    // Event listeners para botões de ação
    document.getElementById('previewDevBtn').addEventListener('click', () => showPreview('dev'));
    document.getElementById('previewClientBtn').addEventListener('click', () => showPreview('client'));
    document.getElementById('generatePdfDevBtn').addEventListener('click', () => generatePDF_TEXT('dev'));
document.getElementById('generatePdfClientBtn').addEventListener('click', () => generatePDF_TEXT('client'));

    document.getElementById('closePreviewBtn').addEventListener('click', closePreview);

    // Event listeners para modais
    setupModalEventListeners();
}

function setupModalEventListeners() {
    // Modal Novo ERP
    document.getElementById('closeNewErpModal').addEventListener('click', closeNewErpModal);
    document.getElementById('cancelNewErp').addEventListener('click', closeNewErpModal);
    document.getElementById('saveNewErp').addEventListener('click', saveNewErp);

    // Modal Configuração de Serviço
    document.getElementById('closeConfigModal').addEventListener('click', closeConfigModal);
    document.getElementById('saveConfigBtn').addEventListener('click', saveServiceConfig);
    document.getElementById('resetConfigBtn').addEventListener('click', resetServiceConfig);
    document.getElementById('newConfigSemAPI').addEventListener('change', toggleNewApiFields);

    // document.getElementById('deactivateParamsBtn').addEventListener('click', deactivateParameters);
    document.getElementById('deleteServiceBtn').addEventListener('click', deleteService);
    document.getElementById('configSemAPI').addEventListener('change', toggleApiFields);

    // Modal Novo Serviço
    document.getElementById('closeNewServiceModal').addEventListener('click', closeNewServiceModal);
    document.getElementById('cancelNewService').addEventListener('click', closeNewServiceModal);
    document.getElementById('saveNewService').addEventListener('click', saveNewService);

    // Fechar modais clicando fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
            }
        });
    });
}
function bind(id, event, handler) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`Elemento #${id} não encontrado para adicionar '${event}'`);
    return;
  }
  el.addEventListener(event, handler);
}


function selectErp(erpName) {
  document.querySelectorAll('.erp-card').forEach(card => card.classList.remove('selected'));
  currentErp = erpName;
  document.querySelector(`[data-erp="${erpName}"]`).classList.add('selected');

  // só completa “serviços padrão” quando o modo estiver ligado
  if (AUTO_ADD_DEFAULT_SERVICES && !erpData[erpName].services?.length) {
    addDefaultServicesToErp(erpName);
  }

  document.getElementById('servicesSection').style.display = 'block';
  document.getElementById('servicesTitle').textContent = `Serviços ${erpName}`;
  loadServices(erpName);
  showNotification(`ERP ${erpName} selecionado`, 'success');
}


function loadServices(erpName) {
    const servicesList = document.getElementById('servicesList');
    const erp = erpData[erpName];
    
    if (!erp) return;
    
    servicesList.innerHTML = '';
    
    erp.services.forEach(service => {
        const serviceCard = createServiceCard(service);
        servicesList.appendChild(serviceCard);
    });
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = `service-card ${service.checked ? 'checked' : 'unchecked'}`;
    card.dataset.serviceId = service.id;
    
    card.innerHTML = `
        <div class="service-header">
            <div class="service-info">
                <input type="checkbox" class="service-checkbox" ${service.checked ? 'checked' : ''}>
                <span class="service-title">${service.label}</span>
                ${service.config.semAPI ? '<span class="erp-status no-api">Sem necessidade de API</span>' : ''}
            </div>
            <div class="service-actions">
                <button type="button" class="service-expand-btn" onclick="toggleServiceConfig('${service.id}')">▼</button>
            </div>
        </div>
        <div class="service-config" id="config-${service.id}">
            <div class="service-config-content">
                <p><strong>Descrição:</strong> ${service.config.descricao || 'Nenhuma configuração definida'}</p>
                <button type="button" class="action-btn primary" onclick="openConfigModal('${service.id}')">Configurar</button>
            </div>
        </div>
    `;
    
    // Event listener para checkbox
    const checkbox = card.querySelector('.service-checkbox');
    checkbox.addEventListener('change', function() {
        service.checked = this.checked;
        card.className = `service-card ${this.checked ? 'checked' : 'unchecked'}`;
        saveData();
    });
    
    return card;
}

function toggleServiceConfig(serviceId) {
    const configDiv = document.getElementById(`config-${serviceId}`);
    const button = document.querySelector(`[onclick="toggleServiceConfig('${serviceId}')"]`);
    
    if (configDiv.classList.contains('expanded')) {
        configDiv.classList.remove('expanded');
        button.textContent = '▼';
        button.classList.remove('expanded');
    } else {
        configDiv.classList.add('expanded');
        button.textContent = '▲';
        button.classList.add('expanded');
    }
}

function openConfigModal(serviceId) {
    const erp = erpData[currentErp];
    const service = erp.services.find(s => s.id === serviceId);
    
    if (!service) return;
    
    currentServiceConfig = serviceId;
    
    // Preencher formulário
    document.getElementById('configModalTitle').textContent = `Configuração: ${service.label}`;
    document.getElementById('configDescricao').value = service.config.descricao || '';
    document.getElementById('configInstrucoes').value = service.config.instrucoes || '';
    document.getElementById('configEndpoint').value = service.config.endpoint || '';
    document.getElementById('configParametros').value = service.config.parametros || '{}';
    document.getElementById('configExigeContrato').checked = service.config.prerequisitos?.exigeContrato || false;
    document.getElementById('configExigeCpfCnpj').checked = service.config.prerequisitos?.exigeCpfCnpj || false;
    document.getElementById('configExigeLogin').checked = service.config.prerequisitos?.exigeLoginAtivo || false;
    document.getElementById('configResponsavel').value = service.config.responsavelPadrao || '';
    document.getElementById('configAtivo').checked = service.config.ativo !== false;
    document.getElementById('configSemAPI').checked = service.config.semAPI || false;
    
    toggleApiFields();
    
    // Mostrar modal
    document.getElementById('serviceConfigModal').classList.add('show');
}

function closeConfigModal() {
    document.getElementById('serviceConfigModal').classList.remove('show');
    currentServiceConfig = null;
}

function saveServiceConfig() {
    if (!currentServiceConfig || !currentErp) return;
    
    const erp = erpData[currentErp];
    const service = erp.services.find(s => s.id === currentServiceConfig);
    
    if (!service) return;
    
    // Validar JSON
    const parametros = document.getElementById('configParametros').value;
    try {
        if (parametros.trim()) {
            JSON.parse(parametros);
        }
    } catch (e) {
        showNotification('Parâmetros JSON inválidos', 'error');
        return;
    }
    
    // Salvar configuração
    service.config = {
        descricao: document.getElementById('configDescricao').value,
        instrucoes: document.getElementById('configInstrucoes').value,
        endpoint: document.getElementById('configEndpoint').value,
        parametros: parametros,
        prerequisitos: {
            exigeContrato: document.getElementById('configExigeContrato').checked,
            exigeCpfCnpj: document.getElementById('configExigeCpfCnpj').checked,
            exigeLoginAtivo: document.getElementById('configExigeLogin').checked
        },
        responsavelPadrao: document.getElementById('configResponsavel').value,
        ativo: document.getElementById('configAtivo').checked,
        semAPI: document.getElementById('configSemAPI').checked
    };
    
    // Atualizar card do serviço
    updateServiceCard(service);
    
    saveData();
    closeConfigModal();
    showNotification('Configuração salva com sucesso', 'success');
}

function resetServiceConfig() {
    if (!currentServiceConfig || !currentErp) return;
    
    const erp = erpData[currentErp];
    const service = erp.services.find(s => s.id === currentServiceConfig);
    
    if (!service) return;
    
    // Resetar para valores padrão (vazio para SGP, valores originais para IXC)
    if (currentErp === 'IXC') {
        // Manter valores originais do IXC
        openConfigModal(currentServiceConfig);
    } else {
        // Limpar configurações para outros ERPs
        service.config = {
            descricao: '',
            instrucoes: '',
            endpoint: '',
            parametros: '{}',
            prerequisitos: {
                exigeContrato: false,
                exigeCpfCnpj: false,
                exigeLoginAtivo: false
            },
            responsavelPadrao: '',
            ativo: true,
            semAPI: false
        };
        
        openConfigModal(currentServiceConfig);
    }
    
    showNotification('Configuração resetada', 'success');
}

function deactivateParameters() {
    document.getElementById('configEndpoint').value = '';
    document.getElementById('configParametros').value = '{}';
    showNotification('Parâmetros desativados', 'warning');
}

// Lista dos serviços que já vêm de fábrica em cada ERP
// Vamos guardar para não deixar que eles sejam apagados
const SERVICOS_PADRAO = {};
for (const nomeDoErp in erpData) {
  const idsDosServicos = erpData[nomeDoErp].services.map(servico => servico.id);
  SERVICOS_PADRAO[nomeDoErp] = new Set(idsDosServicos);
}

/**
 * Função para excluir um serviço do ERP selecionado
 */
function deleteService() {
  // Se não tiver serviço ou ERP selecionado, não faz nada
  if (!currentServiceConfig || !currentErp) {
    return;
  }

  // Verifica se o serviço é um dos que já vêm de fábrica
  const esteServicoEhPadrao = SERVICOS_PADRAO[currentErp]?.has(currentServiceConfig);

  // Se for padrão, não deixa excluir
  if (esteServicoEhPadrao) {
    showNotification('Este serviço é padrão e não pode ser excluído.', 'error');
    return;
  }

  // Pede confirmação antes de excluir
  const usuarioConfirmou = confirm('Tem certeza que deseja excluir este serviço?');
  if (!usuarioConfirmou) {
    return; // Se o usuário cancelar, para aqui
  }

  // Procura o serviço dentro do ERP atual
  const listaServicos = erpData[currentErp].services;
  const indiceDoServico = listaServicos.findIndex(servico => servico.id === currentServiceConfig);

  // Se não achar o serviço, avisa e para
  if (indiceDoServico === -1) {
    showNotification('Serviço não encontrado.', 'error');
    return;
  }

  // Remove o serviço da lista
  listaServicos.splice(indiceDoServico, 1);

  // Atualiza a interface e salva as alterações
  loadServices(currentErp); // Recarrega a lista de serviços na tela
  saveData();               // Salva no localStorage
  closeConfigModal();       // Fecha o modal de configuração

  // Mensagem de sucesso
  showNotification('Serviço excluído com sucesso', 'success');
}



function toggleApiFields() {
    const semAPI = document.getElementById('configSemAPI').checked;
    const apiFields = document.getElementById('apiFields');
    
    if (semAPI) {
        apiFields.style.display = 'none';
    } else {
        apiFields.style.display = 'block';
    }
}

function updateServiceCard(service) {
    const card = document.querySelector(`[data-service-id="${service.id}"]`);
    if (!card) return;
    
    // Atualizar status visual
    const statusSpan = card.querySelector('.erp-status.no-api');
    if (service.config.semAPI) {
        if (!statusSpan) {
            const serviceInfo = card.querySelector('.service-info');
            serviceInfo.insertAdjacentHTML('beforeend', '<span class="erp-status no-api">Sem necessidade de API</span>');
        }
    } else {
        if (statusSpan) {
            statusSpan.remove();
        }
    }
    
    // Atualizar descrição
    const configContent = card.querySelector('.service-config-content p');
    if (configContent) {
        configContent.innerHTML = `<strong>Descrição:</strong> ${service.config.descricao || 'Nenhuma configuração definida'}`;
    }
}

function selectAllServices() {
    if (!currentErp) return;
    
    const erp = erpData[currentErp];
    erp.services.forEach(service => {
        service.checked = true;
    });
    
    loadServices(currentErp);
    saveData();
    showNotification('Todos os serviços selecionados', 'success');
}

function deselectAllServices() {
    if (!currentErp) return;
    
    const erp = erpData[currentErp];
    erp.services.forEach(service => {
        service.checked = false;
    });
    
    loadServices(currentErp);
    saveData();
    showNotification('Todos os serviços desmarcados', 'warning');
}


// abre o modal "Novo Serviço" e monta os chips
let newServiceSelectedKeys = new Set();

function openNewServiceModal() {
  if (!currentErp) { showNotification('Selecione um ERP primeiro', 'error'); return; }

  newServiceSelectedKeys.clear();

  const nameInput = document.getElementById('newServiceName');
  nameInput.value = '';
  nameInput.disabled = false;

  // se você também não quiser marcar o serviço recém-criado:
  // document.getElementById('newServiceActive').checked = false;
  document.getElementById('newServiceActive').checked = true; // mantém seu padrão atual

  const wrap = document.getElementById('presetServiceChips');
  wrap.innerHTML = '';

    // ... você já montou os chips em wrap = document.getElementById('presetServiceChips')

  // cria a barra de busca se ainda não existir
  let searchWrap = document.getElementById('chipSearchWrap');
  if (!searchWrap) {
    searchWrap = document.createElement('div');
    searchWrap.id = 'chipSearchWrap';
    searchWrap.className = 'chip-search';
    searchWrap.innerHTML = `
      <input id="chipSearch" type="text" placeholder="Pesquisar serviço..." autocomplete="off">
    `;
    // insere ANTES da lista de chips
    wrap.parentNode.insertBefore(searchWrap, wrap);

    // placeholder "nenhum resultado"
    const tip = document.createElement('div');
    tip.id = 'chipNoResults';
    tip.className = 'chip-empty';
    tip.textContent = 'Nenhum serviço encontrado.';
    tip.style.display = 'none';
    wrap.parentNode.insertBefore(tip, wrap.nextSibling);
  }

  // liga o filtro
  const input = document.getElementById('chipSearch');
  input.value = '';
  input.oninput = debounce(e => filterPresetChips(e.target.value), 60);
  filterPresetChips(''); // reseta ao abrir


  const existingIds = new Set((erpData[currentErp]?.services || []).map(s => s.id));

  // só mostra chips que AINDA NÃO existem nesse ERP
  const availablePresets = Object.values(PRESET_SERVICES).filter(p => !existingIds.has(p.id));

  if (availablePresets.length === 0) {
    wrap.innerHTML = '<small class="muted">Todos os atalhos já foram adicionados para este ERP.</small>';
  } else {
    availablePresets.forEach(preset => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip-btn';
      b.dataset.key = preset.id;
      b.textContent = preset.label;
      b.addEventListener('click', () => togglePresetChip(preset.id, b));
      wrap.appendChild(b);
    });
  }

  // começa com config em branco
  fillNewServiceConfig(BLANK_CONFIG);
  toggleNewApiFields();
  document.getElementById('newServiceModal').classList.add('show');
}


function togglePresetChip(key, btn) {
  if (newServiceSelectedKeys.has(key)) {
    newServiceSelectedKeys.delete(key);
    btn.classList.remove('selected');
  } else {
    newServiceSelectedKeys.add(key);
    btn.classList.add('selected');
  }
  updateNewServiceFormState();
}

function updateNewServiceFormState() {
  const nameInput = document.getElementById('newServiceName');

  if (newServiceSelectedKeys.size > 0) {
    // usa template do PRIMEIRO selecionado (se houver). O restante receberá a MESMA config ao salvar.
    const firstKey = [...newServiceSelectedKeys][0];
    fillNewServiceConfig(getTemplate(currentErp, firstKey));
    nameInput.disabled = true;
    nameInput.value = ''; // usando presets
  } else {
    // sem preset -> usuário digita nome e preenche tudo manualmente
    fillNewServiceConfig(BLANK_CONFIG);
    nameInput.disabled = false;
  }
}




// aplica o preset e faz as regras de bloqueio
function applyPresetToNewService(key) {
  const preset = PRESET_SERVICES[key];
  if (!preset) return;

  // 1) Preenche e TRAVA o nome
  const nameInput = document.getElementById('newServiceName');
  nameInput.value = preset.label;
  nameInput.disabled = true;

  // 2) Aplica config do preset (cópia profunda)
  fillNewServiceConfig(JSON.parse(JSON.stringify(preset.config)));

  // 3) Desabilita TODOS os chips, exceto o clicado
  document.querySelectorAll('#presetServiceChips .chip-btn').forEach(btn => {
    const isSelected = btn.dataset.key === key;
    btn.disabled = !isSelected;
    btn.classList.toggle('selected', isSelected);
    btn.classList.toggle('disabled', !isSelected);
  });

  const blk = document.getElementById('newServiceConfigBlock');
  if (blk) blk.scrollIntoView({ behavior:'smooth', block:'center' });

  showNotification(`Preset aplicado: ${preset.label}`, 'success');
}


// habilita/desabilita visualmente e funcionalmente um chip
function setChipDisabled(key, disabled) {
  const btn = document.querySelector(`#presetServiceChips .chip-btn[data-key="${key}"]`);
  if (!btn) return;
  btn.disabled = disabled;
  btn.classList.toggle('disabled', disabled);
}

// abre o modal "Novo ERP" (faltava no seu arquivo)
function openNewErpModal() {
  const name  = document.getElementById('newErpName');
  if (name) name.value = '';
  //const active = document.getElementById('newErpActive');
  const modal = document.getElementById('newErpModal');

  if (name)   name.value = '';
  //if (active) active.checked = true;  // só marca se existir
  if (modal)  modal.classList.add('show');
  else        console.warn('#newErpModal não encontrado no HTML');
}





function openNewErpModal() {
  const name = document.getElementById('newErpName');
  const active = document.getElementById('newErpActive');
  const modal = document.getElementById('newErpModal');

  if (name)   name.value = '';
  if (active) active.checked = true;

  if (modal)  modal.classList.add('show');
  else        console.warn('#newErpModal não encontrado no HTML');
}


function openNewErpModal() {
  document.getElementById('newErpName').value = '';
  //document.getElementById('newErpActive').checked = true;
  document.getElementById('newErpModal').classList.add('show');
}

function closeNewErpModal() {
    document.getElementById('newErpModal').classList.remove('show');
}

function saveNewErp() {
  const name = document.getElementById('newErpName').value.trim();
  // const active = document.getElementById('newErpActive').checked;  // <- você comentou essa opção
  const active = true; // mantenha sempre ativo por enquanto

  if (!name) { showNotification('Nome do ERP é obrigatório', 'error'); return; }
  const nameUpper = name.toUpperCase();
  if (erpData[nameUpper]) { showNotification('ERP já existe', 'error'); return; }

  erpData[nameUpper] = { name: nameUpper, active, services: [] };

  // só pré-popula se você ligar o switch acima
  if (AUTO_ADD_DEFAULT_SERVICES) addDefaultServicesToErp(nameUpper);

  addErpCard(nameUpper, active);
  saveData();
  closeNewErpModal();
  showNotification(`ERP ${name} adicionado com sucesso`, 'success');
}



function addDefaultServicesToErp(erpName) {
  const erp = erpData[erpName];
  if (!erp) return;
  const existing = new Set(erp.services.map(s => s.id));
  Object.values(PRESET_SERVICES).forEach(svc => {
    if (!existing.has(svc.id)) {
      erp.services.push({
        id: svc.id,
        label: svc.label,
        checked: false,          // <<< NUNCA marcado por padrão
        config: getTemplate(erpName, svc.id) // ou BLANK_CONFIG
      });
    }
  });
}





function addErpCard(erpName, active = true) {
  const erpGrid = document.querySelector('.erp-grid');
  const card = document.createElement('div');
  card.className = 'erp-card active';
  card.dataset.erp = erpName;

  card.innerHTML = `
    <h3>${erpName}</h3>
    <span class="erp-status active">Ativo</span>
  `;

  erpGrid.appendChild(card);
  card.addEventListener('click', function () { selectErp(this.dataset.erp); });
}




function applyPresetToNewService(key) {
  const preset = PRESET_SERVICES[key];
  if (!preset) return;

  const nameInput = document.getElementById('newServiceName');

  // 1) Preenche e BLOQUEIA o nome para QUALQUER preset
  nameInput.value = preset.label;
  nameInput.disabled = true;

  // 2) Carrega a config do preset (cópia profunda)
  fillNewServiceConfig(JSON.parse(JSON.stringify(preset.config)));

  // 3) Seleção visual e conflitos
  enableAllChips(); // limpa estados anteriores
  const selectedBtn = document.querySelector(`#presetServiceChips .chip-btn[data-key="${key}"]`);
  if (selectedBtn) selectedBtn.classList.add('selected');

  // desativa apenas os chips que conflitam com o escolhido
  (CONFLICT_MAP[key] || []).forEach(k => setChipDisabled(k, true));

  // 4) Rola até a área de config
  document.getElementById('newServiceConfigBlock')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });

  showNotification(`Preset aplicado: ${preset.label}`, 'success');
}



function setChipDisabled(key, disabled) {
  const btn = document.querySelector(`#presetServiceChips .chip-btn[data-key="${key}"]`);
  if (!btn) return;
  btn.disabled = disabled;
  btn.classList.toggle('disabled', disabled);
}


function fillNewServiceConfig(cfg) {
  document.getElementById('newConfigDescricao').value = cfg.descricao || '';
  document.getElementById('newConfigInstrucoes').value = cfg.instrucoes || '';
  document.getElementById('newConfigSemAPI').checked = !!cfg.semAPI;
  document.getElementById('newConfigEndpoint').value = cfg.endpoint || '';
  document.getElementById('newConfigParametros').value = cfg.parametros || '{}';

  document.getElementById('newConfigExigeContrato').checked = !!cfg.prerequisitos?.exigeContrato;
  document.getElementById('newConfigExigeCpfCnpj').checked = !!cfg.prerequisitos?.exigeCpfCnpj;
  document.getElementById('newConfigExigeLogin').checked = !!cfg.prerequisitos?.exigeLoginAtivo;

  document.getElementById('newConfigResponsavel').value = cfg.responsavelPadrao || '';

  toggleNewApiFields();
}
function readNewServiceConfigFromModal() {
  const parametros = document.getElementById('newConfigParametros').value || '{}';
  // valida JSON se necessário
  try { if (parametros.trim()) JSON.parse(parametros); }
  catch { showNotification('Parâmetros JSON inválidos', 'error'); return null; }

  return {
    descricao: document.getElementById('newConfigDescricao').value,
    instrucoes: document.getElementById('newConfigInstrucoes').value,
    endpoint: document.getElementById('newConfigEndpoint').value,
    parametros,
    prerequisitos: {
      exigeContrato: document.getElementById('newConfigExigeContrato').checked,
      exigeCpfCnpj: document.getElementById('newConfigExigeCpfCnpj').checked,
      exigeLoginAtivo: document.getElementById('newConfigExigeLogin').checked
    },
    responsavelPadrao: document.getElementById('newConfigResponsavel').value,
    ativo: document.getElementById('newServiceActive').checked,
    semAPI: document.getElementById('newConfigSemAPI').checked
  };
}
function toggleNewApiFields() {
  const semAPI = document.getElementById('newConfigSemAPI').checked;
  document.getElementById('newApiFields').style.display = semAPI ? 'none' : 'block';
}




function closeNewServiceModal() {
    document.getElementById('newServiceModal').classList.remove('show');
}

function saveNewService() {
  const erpName = currentErp;
  if (!erpName) { showNotification('Selecione um ERP primeiro', 'error'); return; }
  const erp = erpData[erpName];

  const cfg = readNewServiceConfigFromModal();
  if (!cfg) return;

  const existing = new Set(erp.services.map(s => s.id));
  let created = 0, duplicated = 0;

  if (newServiceSelectedKeys.size > 0) {
    // múltiplos atalhos
    newServiceSelectedKeys.forEach(key => {
      const preset = PRESET_SERVICES[key];
      if (!preset) return;
      if (existing.has(preset.id)) { duplicated++; return; } // já existe -> ignora
      erp.services.push({
        id: preset.id,
        label: preset.label,
        checked: document.getElementById('newServiceActive').checked,
        config: JSON.parse(JSON.stringify(cfg))
      });
      saveTemplate(erpName, preset.id, cfg);
      created++;
    });
  } else {
    // serviço manual
    const name = (document.getElementById('newServiceName').value || '').trim();
    if (!name) { showNotification('Nome do serviço é obrigatório', 'error'); return; }
    const id = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    if (existing.has(id)) { showNotification('Este serviço já está cadastrado para este ERP', 'error'); return; }

    erp.services.push({
      id,
      label: name,
      checked: document.getElementById('newServiceActive').checked,
      config: JSON.parse(JSON.stringify(cfg))
    });
    saveTemplate(erpName, id, cfg);
    created = 1;
  }

  loadServices(erpName);
  saveData();
  closeNewServiceModal();

  let msg = '';
  if (created) msg += `${created} serviço(s) adicionado(s). `;
  if (duplicated) msg += `${duplicated} já existia(m) e foi/foram ignorado(s).`;
  showNotification(msg || 'Nada foi adicionado', created ? 'success' : 'info');
}




function validateRequiredFields() {
  // Lê valores (se o campo não existir no HTML, trata como vazio)
  
  const contractorNameEl  = document.getElementById('contractorName');
  const documenterEl      = document.getElementById('documenter');
  const contractorNameEEl = document.getElementById('contractorNameE');
  const contractDateEl   = document.getElementById('contractDate');
  const contractNumberEl = document.getElementById('contractNumber');


  const contractorName  = contractorNameEl ? contractorNameEl.value.trim()  : '';
  const documenter      = documenterEl ? documenterEl.value.trim()          : '';
  const contractorNameE = contractorNameEEl ? contractorNameEEl.value.trim(): '';
const contractDate   = contractDateEl ? contractDateEl.value.trim()      : '';
const contractNumber = contractNumberEl ? contractNumberEl.value.trim()  : '';


  const missingFields = [];

  if (!contractorName)  missingFields.push({ id: 'contractorName',  label: 'Nome do Contratante' });
  if (!documenter)      missingFields.push({ id: 'documenter',      label: 'Quem está documentando' });
  if (!contractorNameE) missingFields.push({ id: 'contractorNameE', label: 'Contractor Name E' });
if (!contractDate)   missingFields.push({ id: 'contractDate',   label: 'Data do Contrato' });
  if (!contractNumber) missingFields.push({ id: 'contractNumber', label: 'Número do Contrato' });

  if (missingFields.length > 0) {
    // Foca no primeiro campo ausente
    const first = missingFields[0];
    const el = document.getElementById(first.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.focus();
    }
    showNotification('Campos obrigatórios não foram preenchidos.', 'error');
    return false;
  }

  return true;
}


function showPreview(type) {
    if (!validateRequiredFields()) {
        return;
    }
    
    const content = generatePreviewContent(type);
    document.getElementById('previewTitle').textContent = type === 'dev' ? 'Prévia - Registro de Desenvolvedores' : 'Prévia - Contrato de Serviços';
    document.getElementById('previewContent').innerHTML = content;
    document.getElementById('pdfPreview').style.display = 'block';
    
    // Scroll para o preview
    document.getElementById('pdfPreview').scrollIntoView({ behavior: 'smooth' });
}

function closePreview() {
    document.getElementById('pdfPreview').style.display = 'none';
}

function generatePreviewContent(type) {
    const contractorNameE = document.getElementById('contractorNameE').value;
    const contractorName = document.getElementById('contractorName').value;
    const documenter = document.getElementById('documenter').value;
    const contractDate = document.getElementById('contractDate').value;
    const contractNumber = document.getElementById('contractNumber').value;
    const additionalInfo = document.getElementById('additionalInfo').value;
    const desiredServices = document.getElementById('desiredServices').value;
    
    let content = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h1 style="color: #4a5568; text-align: center; margin-bottom: 2rem;">
                ${type === 'dev' ? 'REGISTRO DE DESENVOLVEDORES' : 'CONTRATO DE SERVIÇOS'}
            </h1>
            
            <div style="margin-bottom: 2rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
                <h2 style="color: #4a5568; margin-bottom: 1rem;">DADOS DO CONTRATO</h2>
                <table style="width: 100%; border-collapse: collapse;">
                <tr>
                        <td style="padding: 0.5rem; font-weight: bold; width: 30%;">Nome da empresa:</td>
                        <td style="padding: 0.5rem;">${contractorNameE}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; font-weight: bold; width: 30%;">Nome do Contratante:</td>
                        <td style="padding: 0.5rem;">${contractorName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; font-weight: bold;">Documentado por:</td>
                        <td style="padding: 0.5rem;">${documenter}</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; font-weight: bold;">Data:</td>
                        <td style="padding: 0.5rem;">${new Date(contractDate).toLocaleDateString('pt-BR')}</td>
                    </tr>
                    ${contractNumber ? `
                    <tr>
                        <td style="padding: 0.5rem; font-weight: bold;">ERP Selecionado:</td>
                        <td style="padding: 0.5rem;">${currentErp || 'Nenhum'}</td>
                    </tr>
                    ` : ''}
                    ${contractNumber ? `
                    <tr>
                        <td style="padding: 0.5rem; font-weight: bold;">Número do Contrato:</td>
                        <td style="padding: 0.5rem;">${contractNumber}</td>
                    </tr>
                    ` : ''}
                </table>
            </div>
    `;
    
    if (currentErp && erpData[currentErp]) {
        const erp = erpData[currentErp];
        const selectedServices = erp.services.filter(s => s.checked);
        const unselectedServices = erp.services.filter(s => !s.checked);
        
        content += `
            <div style="margin-bottom: 2rem;">
                <h2 style="color: #4a5568; margin-bottom: 1rem;">SERVIÇOS SELECIONADOS COM CONFIGURAÇÕES</h2>
        `;
        
        if (selectedServices.length > 0) {
            selectedServices.forEach(service => {
                content += `
                    <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; background: #f0fff4;">
                        <h3 style="color: #48bb78; margin-bottom: 0.5rem;">✓ ${service.label}</h3>
                `;
                
                if (type === 'dev') {
                    content += `
                        <div style="margin-left: 1rem; font-size: 0.9rem;">
                            ${service.config.descricao ? `<p><strong>Descrição:</strong> ${service.config.descricao}</p>` : ''}
                            ${service.config.instrucoes ? `<p><strong>Instruções:</strong> ${service.config.instrucoes}</p>` : ''}
                            ${service.config.semAPI ? '<p><strong>Status:</strong> <span style="background: #f5900c; color: white; padding: 0.2rem 0.5rem; border-radius: 12px; font-size: 0.8rem;">SEM NECESSIDADE DE API</span></p>' : ''}
                            ${!service.config.semAPI && service.config.endpoint ? `<p><strong>Endpoint:</strong> ${service.config.endpoint}</p>` : ''}
                            ${!service.config.semAPI && service.config.parametros && service.config.parametros !== '{}' ? `<p><strong>Parâmetros:</strong><br><pre style="background: #f8fafc; padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; overflow-x: auto;">${service.config.parametros}</pre></p>` : ''}
                            ${service.config.prerequisitos && (service.config.prerequisitos.exigeContrato || service.config.prerequisitos.exigeCpfCnpj || service.config.prerequisitos.exigeLoginAtivo) ? `
                                <p><strong>Pré-requisitos:</strong>
                                    ${service.config.prerequisitos.exigeContrato ? '• Exige contrato ' : ''}
                                    ${service.config.prerequisitos.exigeCpfCnpj ? '• Exige CPF/CNPJ ' : ''}
                                    ${service.config.prerequisitos.exigeLoginAtivo ? '• Exige login ativo' : ''}
                                </p>
                            ` : ''}
                            ${service.config.responsavelPadrao ? `<p><strong>Responsável:</strong> ${service.config.responsavelPadrao}</p>` : ''}
                        </div>
                    `;
                }
                
                content += `</div>`;
            });
        } else {
            content += '<p style="color: #718096; font-style: italic;">Nenhum serviço selecionado.</p>';
        }
        
        // Mostrar serviços não selecionados
        if (unselectedServices.length > 0) {
            content += `
                <h2 style="color: #4a5568; margin-bottom: 1rem; margin-top: 2rem;">SERVIÇOS NÃO SELECIONADOS</h2>
            `;
            
            unselectedServices.forEach(service => {
                content += `
                    <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid #fed7d7; border-radius: 8px; background: #fffafa;">
                        <h3 style="color: #f56565; margin-bottom: 0.5rem;">✗ ${service.label}</h3>
                        <p style="color: #718096; font-size: 0.9rem; margin-left: 1rem;">Serviço disponível mas não selecionado para este contrato.</p>
                    </div>
                `;
            });
        }
        
        content += '</div>';
    }
    
    if (desiredServices) {
        content += `
            <div style="margin-bottom: 2rem;">
                <h2 style="color: #4a5568; margin-bottom: 1rem;">SERVIÇOS DESEJADOS (NÃO OFERECIDOS)</h2>
                <div style="padding: 1rem; background: #fff5f5; border: 1px solid #fed7d7; border-radius: 8px;">
                    <p style="white-space: pre-wrap;">${desiredServices}</p>
                </div>
            </div>
        `;
    }
    
    if (additionalInfo) {
        content += `
            <div style="margin-bottom: 2rem;">
                <h2 style="color: #4a5568; margin-bottom: 1rem;">INFORMAÇÕES ADICIONAIS</h2>
                <div style="padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <p style="white-space: pre-wrap;">${additionalInfo}</p>
                </div>
            </div>
        `;
    }
    
    content += `
            <div style="margin-top: 3rem; padding: 1rem; background: #f8fafc; border-radius: 8px; text-align: center;">
                <p style="color: #718096; font-size: 0.9rem;">
                    Documento gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
                </p>
            </div>
        </div>
    `;
    
    return content;
}


// === [1] Lê os campos do formulário ===
function collectFormData() {
  const get = id => (document.getElementById(id)?.value ?? '').trim();
  return {
    contractorNameE: get('contractorNameE'),
    contractorName:  get('contractorName'),
    documenter:      get('documenter'),
    contractDate:    get('contractDate'),
    contractNumber:  get('contractNumber'),
    additionalInfo:  get('additionalInfo'),
    desiredServices: get('desiredServices'),
    currentErp:      currentErp || 'Nenhum'
  };
}

// === [2] Separa serviços selecionados / não selecionados do ERP atual ===
function servicesBySelection() {
  if (!currentErp || !erpData[currentErp]) return { selected: [], unselected: [] };
  const all = erpData[currentErp].services || [];
  return {
    selected: all.filter(s => s.checked),
    unselected: all.filter(s => !s.checked)
  };
}

// ====== THEME / HELPERS DE LAYOUT ======
const THEME = {
  text:   '#2d3748',
  sub:    '#4a5568',
  mut:    '#718096',
  ok:     '#2f855a',
  warn:   '#c53030',
  brand:  '#4f46e5', // roxinho elegante p/ títulos
  bgCard: '#f8fafc',
  bgOk:   '#f0fff4',
  bgWarn: '#fffafa',
  line:   '#e2e8f0'
};

// divisorzinho elegante
function divider(margin=[0,8,0,8]) {
  return {
    canvas: [{ type:'line', x1:0, y1:0, x2:515, y2:0, lineWidth:1, lineColor:THEME.line }],
    margin
  };
}

// tabela K/V com visual caprichado
function kvTable(rows) {
  return {
    table: {
      widths: ['*','*'],
      body: rows
    },
    layout: {
      paddingLeft: () => 8,
      paddingRight: () => 8,
      paddingTop: () => 6,
      paddingBottom: () => 6,
      hLineWidth: (i) => (i === 0 || i === rows.length ? 0 : 1),
      vLineWidth: () => 0,
      hLineColor: () => THEME.line,
      fillColor: (rowIndex) => (rowIndex % 2 === 0 ? '#ffffff' : '#fbfbfd')
    },
    margin: [0, 6, 0, 0]
  };
}

// chip (pílula) para pequenos destaques
function chip(text, color='#334155', bg='#eef2ff') {
  return {
    text,
    color,
    background: bg,
    margin:[0,0,8,0],
    fontSize:9,
    bold:true,
    lineHeight:1.6,
    alignment:'center',
    border: [false,false,false,false],
    width: 'auto',
    style:'chip'
  };
}

// bloco de código/JSON bonitinho
function codeBox(text) {
  return {
    table: {
      widths: ['*'],
      body: [[{ text, style:'code', preserveLeadingSpaces:true }]]
    },
    layout: {
      paddingLeft: () => 8,
      paddingRight: () => 8,
      paddingTop: () => 6,
      paddingBottom: () => 6,
      hLineWidth: () => 1,
      vLineWidth: () => 1,
      hLineColor: () => THEME.line,
      vLineColor: () => THEME.line
    },
    fillColor: '#f8fafc',
    margin: [0, 4, 0, 6]
  };
}

// estilos globais (usados pelos builders)
const BASE_STYLES = {
  h1:    { fontSize: 18, bold: true, color: THEME.brand },
  h2:    { fontSize: 13, bold: true, color: THEME.sub },
  h3:    { fontSize: 11, bold: true, color: THEME.text },
  h3ok:  { fontSize: 11, bold: true, color: THEME.ok },
  h3warn:{ fontSize: 11, bold: true, color: THEME.warn },
  body:  { fontSize: 10, color: THEME.text },
  mut:   { color: THEME.mut },
  code:  { fontSize: 9, characterSpacing: 0.2, color: '#1f2937' },
  chip:  { margin:[0,0,8,0], bold:true }
};

// rodapé com paginação
const PAGE_FOOTER = function(currentPage, pageCount) {
  return {
    text: `Página ${currentPage} de ${pageCount}`,
    alignment: 'center',
    color: THEME.mut,
    fontSize: 9,
    margin: [0, 8, 0, 0]
  };
};

// --- Card "DADOS DO CONTRATO" (igual à prévia) ---
function contractInfoCard(f) {
  const brDate = f.contractDate
    ? new Date(f.contractDate).toLocaleDateString('pt-BR')
    : '-';

  return {
    table: {
      widths: [160, '*'],
      body: [
        [{ text:'Nome da empresa:',     bold:true }, f.contractorNameE || '-' ],
        [{ text:'Nome do Contratante:', bold:true }, f.contractorName  || '-' ],
        [{ text:'Documentado por:',     bold:true }, f.documenter      || '-' ],
        [{ text:'Data:',                bold:true }, brDate ],
        [{ text:'ERP Selecionado:',     bold:true }, f.currentErp      || '-' ],
        [{ text:'Número do Contrato:',  bold:true }, f.contractNumber  || '-' ]
      ]
    },
    layout: {
      paddingLeft:   () => 12,
      paddingRight:  () => 12,
      paddingTop:    () => 8,
      paddingBottom: () => 8,
      hLineWidth: () => 0,
      vLineWidth: () => 0
    },
    fillColor: THEME.bgCard, // já existe no seu THEME
    margin: [0, 6, 0, 8]
  };
}

// desenha um check independente de fonte
// ✓ desenhado (não depende de fonte)
function checkIcon(size = 11, color = THEME.ok) {
  const t = size;
  return {
    canvas: [{
      type: 'polyline',
      points: [ {x:0, y:t*0.55}, {x:t*0.35, y:t}, {x:t, y:0} ],
      lineWidth: 2, lineColor: color, lineCap: 'round', lineJoin: 'round'
    }],
    width: t + 2, height: t
  };
}

// linha de título do serviço que NÃO quebra entre páginas
function serviceTitleRow(text, color = THEME.ok) {
  return {
    table: {
      widths: [14, '*'],
      body: [[
        checkIcon(11, color),
        { text, style: 'h3', margin: [6,0,0,0], color }
      ]],
      dontBreakRows: true
    },
    layout: 'noBorders'
  };
}



// ====== DEV: documento detalhado (igual à prévia Registro Dev) ======
function buildDocDev(f, selected, unselected) {
  const header = [
    { text:'REGISTRO DE DESENVOLVEDORES', style:'h1', alignment:'center', margin:[0,0,0,6] },
    divider([0,8,0,12])
  ];

  // Card unificado, igual à prévia
  const dadosContrato = contractInfoCard(f);

  const blocosSelecionados = selected.length
    ? selected.map(s => {
        const cfg = s.config || {};
        const pre = cfg.prerequisitos || {};
        const preTxt = [
          pre.exigeContrato && 'Exige contrato',
          pre.exigeCpfCnpj && 'Exige CPF/CNPJ',
          pre.exigeLoginAtivo && 'Exige login ativo'
        ].filter(Boolean).join(' • ');

        const stack = [
  serviceTitleRow(s.label, THEME.ok)  // em vez de { text:`✓ ${s.label}`, ... }
];


        if (cfg.descricao)  stack.push({ text:`Descrição: ${cfg.descricao}` });
        if (cfg.instrucoes) stack.push({ text:`Instruções: ${cfg.instrucoes}` });

        if (cfg.semAPI) {
          stack.push({ text:'Status: SEM NECESSIDADE DE API', color:'#b45309', margin:[0,2,0,0] });
        } else {
          if (cfg.endpoint) stack.push({ text:`Endpoint: ${cfg.endpoint}`, margin:[0,2,0,0] });
          if (cfg.parametros && cfg.parametros !== '{}') {
            stack.push({ text:'Parâmetros:', bold:true, margin:[0,6,0,2] });
            stack.push(codeBox(cfg.parametros));
          }
        }

        if (preTxt)                stack.push({ text:`Pré-requisitos: ${preTxt}`, margin:[0,4,0,0] });
        if (cfg.responsavelPadrao) stack.push({ text:`Responsável: ${cfg.responsavelPadrao}` });

        return {
            unbreakable: true,                    // evita quebra do card
          table: { widths:['*'], body: [[{ stack, border:[false,false,false,false] }]] },
          layout: {
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => THEME.line,
            vLineColor: () => THEME.line,
            paddingLeft: () => 10,
            paddingRight: () => 10,
            paddingTop: () => 10,
            paddingBottom: () => 10
          },
          fillColor: THEME.bgOk,
          margin:[0, 6, 0, 8]
        };
      })
    : [{ text:'Nenhum serviço selecionado.', italics:true, color:THEME.mut }];

  const blocosNaoSel = unselected.length ? [
    { text:'SERVIÇOS NÃO SELECIONADOS', style:'h2', margin:[0,12,0,6] },
    { table: { widths:['*'], body: unselected.map(s => [{ text:`✗ ${s.label}`, style:'h3warn' }]) }, layout: 'noBorders', margin:[0,0,0,6] }
  ] : [];

  const desiredBlock = f.desiredServices ? [
    { text:'SERVIÇOS DESEJADOS (NÃO OFERECIDOS)', style:'h2', margin:[0,12,0,6] },
    codeBox(f.desiredServices)
  ] : [];

  const infoBlock = f.additionalInfo ? [
    { text:'INFORMAÇÕES ADICIONAIS', style:'h2', margin:[0,12,0,6] },
    codeBox(f.additionalInfo)
  ] : [];

  return {
    pageSize: 'A4',
    pageMargins: [28, 32, 28, 40],
    content: [
      ...header,
      { text:'DADOS DO CONTRATO', style:'h2' },
      dadosContrato,
      divider(),
      { text:'SERVIÇOS SELECIONADOS COM CONFIGURAÇÕES', style:'h2', margin:[0,6,0,4] },
      ...blocosSelecionados,
      ...blocosNaoSel,
      ...desiredBlock,
      ...infoBlock,
      divider([0,12,0,8]),
      { text:`Documento gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`, style:'mut', alignment:'center' }
    ],
    styles: BASE_STYLES,
    defaultStyle: BASE_STYLES.body,
    footer: PAGE_FOOTER
  };
}



// ====== CLIENT: documento enxuto (igual à prévia Lista de Serviços) ======
function buildDocClient(f, selected, unselected) {
  const header = [
    { text:'Contrato', style:'h1', alignment:'center', margin:[0,0,0,6] },
    divider([0,8,0,12])
  ];

  // Card unificado, igual à prévia
  const dadosContrato = contractInfoCard(f);

  // Cards verdes por serviço (como sua prévia)
  const listaSelecionados = selected.length
    ? selected.map(s => ({
        unbreakable: true,
        table: {
          widths: ['*'],
          body: [[{
            columns: [
              checkIcon(11, THEME.ok),
{ text: s.label, style: 'h3', margin: [6, 0, 0, 0], color: THEME.ok }

            ],
            border: [false, false, false, false]
          }]]
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => '#C6F6D5',
          vLineColor: () => '#C6F6D5',
          paddingLeft: () => 10,
          paddingRight: () => 10,
          paddingTop: () => 10,
          paddingBottom: () => 10
        },
        fillColor: THEME.bgOk,
        margin: [0, 4, 0, 6]
      }))
    : [{ text:'Nenhum serviço selecionado.', italics:true, color:THEME.mut, margin:[0,4,0,8] }];

  const listaNaoSel = unselected.length ? [
    { text:'SERVIÇOS NÃO SELECIONADOS', style:'h2', margin:[0,12,0,6] },
    {
      table: {
        widths:['*'],
        body: unselected.map(s => [{
          columns: [
            { text: '•', width: 12, alignment:'right', color: THEME.warn },
            { text: s.label, color: THEME.mut, margin:[6,0,0,0] }
          ],
          border:[false,false,false,false]
        }])
      },
      layout:'noBorders',
      margin:[0,0,0,6]
    }
  ] : [];

  return {
    pageSize: 'A4',
    pageMargins: [28, 32, 28, 40],
    content: [
      ...header,
      { text: 'DADOS DO CONTRATO', style:'h2' },
      dadosContrato,
      divider(),
      { text: 'SERVIÇOS SELECIONADOS', style:'h2', margin:[0,6,0,4] },
      ...listaSelecionados,
      ...listaNaoSel,
      divider([0,12,0,8]),
      { text:`Documento gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`, style:'mut', alignment:'center' }
    ],
    styles: BASE_STYLES,
    defaultStyle: BASE_STYLES.body,
    footer: PAGE_FOOTER
  };
}




// === [3] Gera PDF com TEXTO (pdfMake) ===
function generatePDF_TEXT(type) {
  console.log('Gerando PDF tipo:', type);
  if (!validateRequiredFields()) return;
  ensureProtocolFilled();

  const f = collectFormData();
  const { selected, unselected } = servicesBySelection();

  const docDefinition = (type === 'dev')
    ? buildDocDev(f, selected, unselected)      // detalhado
    : buildDocClient(f, selected, unselected);  // só nomes

  pdfMake.createPdf(docDefinition).download(
    type === 'dev' ? 'registro_desenvolvedores.pdf' : 'lista_servicos.pdf'
  );
}





function saveData() {
    try {
        localStorage.setItem('erpServicesConfig', JSON.stringify(erpData));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

// Presets de serviços para o modal "Adicionar Novo Serviço"
// ✅ serviços “de fábrica” (apenas rótulo e id). NENHUM dado de outro ERP!
const PRESET_SERVICES = {
  abrir_chamado:                { id: 'abrir_chamado',                  label: 'Abrir chamado' },
  alteracao_nome_senha:         { id: 'alteracao_nome_senha',           label: 'Alteracao Nome/Senha' },
  alteracao_vencimento:         { id: 'alteracao_vencimento',           label: 'Alteracao vencimento' },
  analise_comportamental:       { id: 'analise_comportamental',         label: 'Analise Comportamental' },
  analise_sentimento:           { id: 'analise_sentimento',             label: 'Analise Sentimento' },
  apresentacao_planos:          { id: 'apresentacao_planos',            label: 'Apresentação planos' },
  buscar_cliente:               { id: 'buscar_cliente',                 label: 'Buscar cliente' },
  buscar_contrato:              { id: 'buscar_contrato',                label: 'Buscar contrato' },
  buscar_faturas:               { id: 'buscar_faturas',                 label: 'Buscar faturas' },
  business_intelligence:        { id: 'business_intelligence',          label: 'Business Intelligence' },
  campanhas_personalizadas:     { id: 'campanhas_personalizadas',       label: 'Campanhas Personalizadas' },
  desbloqueio_confianca:        { id: 'desbloqueio_confianca',          label: 'Desbloqueio confiança' },
  downgrade_upgrade:            { id: 'downgrade_upgrade',              label: 'Downgrade/upgrade' },
  duvidas_institucionais:       { id: 'duvidas_institucionais',         label: 'Dúvidas Institucionais' },
  envio_finalizar_campanha:     { id: 'envio_finalizar_campanha',       label: 'Envio e-mail Finalizar' },
  encaminhar_especialista:      { id: 'encaminhar_especialista',        label: 'Encaminhar Especialista' },
  envio_cobrança:               { id: 'envio_cobrança',                 label: 'Envio cobrança' },
  gerar_fatura:                 { id: 'gerar_fatura',                   label: 'Gerar fatura' },
  gerar_pix_fatura:             { id: 'gerar_pix_fatura',               label: 'Gerar PIX fatura' },
  identifica_pacote:            { id: 'identifica_pacote',              label: 'Identifica Pacote' },
  identifica_bloqueio:          { id: 'identifica_bloqueio',            label: 'Identifica Bloqueio' },
  identifica_incompatibilidade: { id: 'identifica_incompatibilidade',   label: 'Identifica Incompatibilidade' },
  identifica_los:               { id: 'identifica_los',                 label: 'Identifica LOS' },
  identifica_atenuacao:         { id: 'identifica_atenuacao',           label: 'Identifica Atenuação' },
  identifica_localizacao:       { id: 'identifica_localizacao',         label: 'Identifica Localização' },
  mudanca_endereco_comodo_ponto:{ id: 'mudanca_endereco_comodo_ponto',  label: 'Mudança endereço/cômodo/ponto' },
  nova_contratacao:             { id: 'nova_contratacao',               label: 'Nova contratação' },
  pos_cobranca:                 { id: 'pos_cobranca',                   label: 'Pós cobrança' },
  renegociar_fatura:            { id: 'renegociar_fatura',              label: 'Renegociar fatura' },
  segundo_ponto:                { id: 'segundo_ponto',                  label: 'Segundo ponto' },
  tratativa_massiva:            { id: 'tratativa_massiva',              label: 'Tratativa massiva' },
  tratativa_personalizada:      { id: 'tratativa_personalizada',        label: 'Tratativa personalizada' },
  verificar_sinal:              { id: 'verificar_sinal',                label: 'Verificar sinal' },
  // acrescente outros nomes se quiser (TESTE*, etc)
};

const BLANK_CONFIG = {
  descricao: '',
  instrucoes: '',
  endpoint: '',
  parametros: '{}',
  prerequisitos: { exigeContrato:false, exigeCpfCnpj:false, exigeLoginAtivo:false },
  responsavelPadrao: '',
  ativo: true,
  semAPI: false
};



// chips que devem ser desativados quando um preset específico é escolhido


// Helpers para lidar com os chips
function enableAllChips() {
  document.querySelectorAll('#presetServiceChips .chip-btn').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('disabled', 'selected');
  });
}



function setChipDisabled(key, disabled) {
  const btn = document.querySelector(`#presetServiceChips .chip-btn[data-key="${key}"]`);
  if (!btn) return;
  btn.disabled = disabled;
  btn.classList.toggle('disabled', disabled);
}
const LS_KEYS = { ERPS: 'erpServicesConfig', TEMPLATES: 'serviceTemplatesByErp' };
let serviceTemplatesByErp = (() => {
  try { return JSON.parse(localStorage.getItem(LS_KEYS.TEMPLATES) || '{}'); }
  catch { return {}; }
})();

function getTemplate(erpName, serviceId) {
  return JSON.parse(JSON.stringify(
    serviceTemplatesByErp?.[erpName]?.[serviceId] || BLANK_CONFIG
  ));
}

function saveTemplate(erpName, serviceId, cfg) {
  if (!serviceTemplatesByErp[erpName]) serviceTemplatesByErp[erpName] = {};
  serviceTemplatesByErp[erpName][serviceId] = JSON.parse(JSON.stringify(cfg));
  localStorage.setItem(LS_KEYS.TEMPLATES, JSON.stringify(serviceTemplatesByErp));
}


function setChipDisabled(key, disabled) {
  const btn = document.querySelector(`#presetServiceChips .chip-btn[data-key="${key}"]`);
  if (!btn) return;
  btn.disabled = disabled;
  btn.classList.toggle('disabled', disabled);
}


// helper para clonar config sem referência
const cloneConfig = cfg => JSON.parse(JSON.stringify(cfg));

function loadSavedData() {
    try {
        const saved = localStorage.getItem('erpServicesConfig');
        if (saved) {
            const savedData = JSON.parse(saved);
            // Mesclar dados salvos com dados padrão
            Object.keys(savedData).forEach(erpKey => {
                if (erpData[erpKey]) {
                    // Atualizar serviços existentes
                    savedData[erpKey].services.forEach(savedService => {
                        const existingService = erpData[erpKey].services.find(s => s.id === savedService.id);
                        if (existingService) {
                            existingService.checked = savedService.checked;
                            existingService.config = { ...existingService.config, ...savedService.config };
                        } else {
                            // Adicionar novos serviços
                            erpData[erpKey].services.push(savedService);
                        }
                    });
                } else {
                    // Adicionar novos ERPs
                    erpData[erpKey] = savedData[erpKey];
                    addErpCard(erpKey, savedData[erpKey].active);
                }
            });
        }
    } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
    }
}

// Impede qualquer submit automático e envio por Enter
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('servicesForm');

    if (form) {
        // Bloqueia submit automático
        form.addEventListener('submit', (e) => e.preventDefault());

        // Bloqueia Enter enviar o formulário (exceto em textarea)
        form.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        });
    }
});


function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Função para limpar formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('servicesForm');
    if (form) {
        form.addEventListener('reset', function() {
            setTimeout(() => {
                // Resetar seleção de ERP
                document.querySelectorAll('.erp-card').forEach(card => {
                    card.classList.remove('selected');
                });
                
                currentErp = null;
                document.getElementById('servicesSection').style.display = 'none';
                
                // Definir data atual novamente
                const today = new Date().toISOString().split('T')[0];
                document.getElementById('contractDate').value = today;
                
                showNotification('Formulário limpo', 'success');
            }, 100);
        });
    }
});



//gerar protocolo de serviço

function generateProtocol(prefix = 'SIRIUS') {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const y = now.getFullYear(), m = pad(now.getMonth() + 1), d = pad(now.getDate());

  // contador diário no localStorage (reseta a cada dia)
  const key = `protoCounter-${y}${m}${d}`;
  const seq = (parseInt(localStorage.getItem(key) || '0', 10) + 1);
  localStorage.setItem(key, String(seq));

  return `${prefix}-${y}${m}${d}-${String(seq).padStart(4, '0')}`;
}

function ensureProtocolFilled() {
  const el = document.getElementById('contractNumber');
  if (el && !el.value.trim()) el.value = generateProtocol();
}

// normaliza p/ busca sem acentos e case-insensitive
function norm(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// filtra os chips dentro de #presetServiceChips
function filterPresetChips(query) {
  const q = norm(query);
  let visible = 0;
  document.querySelectorAll('#presetServiceChips .chip-btn').forEach(btn => {
    const show = !q || norm(btn.textContent).includes(q);
    btn.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const empty = document.getElementById('chipNoResults');
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

// debounce simples (opcional)
function debounce(fn, delay=80) {
  let t; 
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

