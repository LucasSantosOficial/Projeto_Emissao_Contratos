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
            }
        ]
    },
    SGP: {
        name: 'SGP',
        active: true,
        services: [
            // Agente Financeiro
            { id: 'agente_financeiro', label: 'Agente Financeiro', checked: true, config: { descricao: '', instrucoes: '', endpoint: '', parametros: '{}', prerequisitos: { exigeContrato: false, exigeCpfCnpj: false, exigeLoginAtivo: false }, responsavelPadrao: '', ativo: true, semAPI: false } },
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
    const fixedErps = ['IXC', 'SGP', 'VOALLE', 'FLUXOS', 'MK', 'HUBSOFT', 'TOPSAPP'];
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
    console.log('Aplicação inicializada com sucesso');
    // Definir data atual
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('contractDate').value = today;
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
    document.getElementById('generatePdfDevBtn').addEventListener('click', () => generatePDF('dev'));
    document.getElementById('generatePdfClientBtn').addEventListener('click', () => generatePDF('client'));
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
    // Remover seleção anterior
    document.querySelectorAll('.erp-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Selecionar novo ERP
    const selectedCard = document.querySelector(`[data-erp="${erpName}"]`);
    selectedCard.classList.add('selected');
    
    currentErp = erpName;
    
    // Mostrar seção de serviços
    document.getElementById('servicesSection').style.display = 'block';
    document.getElementById('servicesTitle').textContent = `Serviços ${erpName}`;
    
    // Carregar serviços
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

function openNewErpModal() {
    document.getElementById('newErpName').value = '';
    document.getElementById('newErpActive').checked = true;
    document.getElementById('newErpModal').classList.add('show');
}

function closeNewErpModal() {
    document.getElementById('newErpModal').classList.remove('show');
}

function saveNewErp() {
    const name = document.getElementById('newErpName').value.trim();
    const active = document.getElementById('newErpActive').checked;
    
    if (!name) {
        showNotification('Nome do ERP é obrigatório', 'error');
        return;
    }
    
    if (erpData[name.toUpperCase()]) {
        showNotification('ERP já existe', 'error');
        return;
    }
    
    // Criar novo ERP
    erpData[name.toUpperCase()] = {
        name: name.toUpperCase(),
        active: active,
        services: []
    };
    
    // Adicionar card do ERP
    addErpCard(name.toUpperCase(), active);
    
    saveData();
    closeNewErpModal();
    showNotification(`ERP ${name} adicionado com sucesso`, 'success');
}

function addErpCard(erpName, active) {
  const erpGrid = document.querySelector('.erp-grid');
  const card = document.createElement('div');
  card.className = `erp-card ${active ? 'active' : 'disabled'}`;
  card.dataset.erp = erpName;

  card.innerHTML = `
    <h3>${erpName}</h3>
    <span class="erp-status ${active ? 'active' : 'coming-soon'}">
      ${active ? 'Ativo' : 'Em breve'}
    </span>
  `;

  // antes estava tentando: insertBefore(card, document.querySelector('.add-erp-section'))
  // mas .add-erp-section não é filho de .erp-grid.
  erpGrid.appendChild(card); // ✅ adiciona ao final da grid

  if (active) {
    card.addEventListener('click', function () {
      selectErp(this.dataset.erp);
    });
  }
}


function openNewServiceModal() {
    if (!currentErp) {
        showNotification('Selecione um ERP primeiro', 'error');
        return;
    }
    
    document.getElementById('newServiceName').value = '';
    document.getElementById('newServiceActive').checked = true;
    document.getElementById('newServiceModal').classList.add('show');
}

function closeNewServiceModal() {
    document.getElementById('newServiceModal').classList.remove('show');
}

function saveNewService() {
    const name = document.getElementById('newServiceName').value.trim();
    const active = document.getElementById('newServiceActive').checked;
    
    if (!name) {
        showNotification('Nome do serviço é obrigatório', 'error');
        return;
    }
    
    if (!currentErp) {
        showNotification('Selecione um ERP primeiro', 'error');
        return;
    }
    
    const erp = erpData[currentErp];
    const serviceId = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    
    // Verificar se já existe
    if (erp.services.find(s => s.id === serviceId)) {
        showNotification('Serviço já existe', 'error');
        return;
    }
    
    // Criar novo serviço
    const newService = {
        id: serviceId,
        label: name,
        checked: active,
        config: {
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
            ativo: active,
            semAPI: false
        }
    };
    
    erp.services.push(newService);
    loadServices(currentErp);
    saveData();
    closeNewServiceModal();
    showNotification(`Serviço "${name}" adicionado com sucesso`, 'success');
}

function validateRequiredFields() {
  // Lê valores (se o campo não existir no HTML, trata como vazio)
  
  const contractorNameEl  = document.getElementById('contractorName');
  const documenterEl      = document.getElementById('documenter');
  const contractorNameEEl = document.getElementById('contractorNameE');

  const contractorName  = contractorNameEl ? contractorNameEl.value.trim()  : '';
  const documenter      = documenterEl ? documenterEl.value.trim()          : '';
  const contractorNameE = contractorNameEEl ? contractorNameEEl.value.trim(): '';

  const missingFields = [];

  if (!contractorName)  missingFields.push({ id: 'contractorName',  label: 'Nome do Contratante' });
  if (!documenter)      missingFields.push({ id: 'documenter',      label: 'Quem está documentando' });
  if (!contractorNameE) missingFields.push({ id: 'contractorNameE', label: 'Contractor Name E' });

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
    document.getElementById('previewTitle').textContent = type === 'dev' ? 'Prévia - Registro de Desenvolvedores' : 'Prévia - Lista de Serviços';
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
                ${type === 'dev' ? 'REGISTRO DE DESENVOLVEDORES' : 'LISTA DE SERVIÇOS'}
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

function generatePDF(type) {
    if (!validateRequiredFields()) {
        return;
    }
    
    const content = generatePreviewContent(type);
    
    // Configurações do PDF
    const opt = {
        margin: [10, 10, 10, 10],
        filename: `${type === 'dev' ? 'registro_desenvolvedores' : 'lista_servicos'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    // Criar elemento temporário para PDF
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    tempDiv.style.cssText = `
        position: absolute;
        left: -9999px;
        top: 0;
        width: 210mm;
        background: white;
        font-family: Arial, sans-serif;
        font-size: 12px;
        line-height: 1.4;
        color: #333;
        padding: 20px;
    `;
    
    document.body.appendChild(tempDiv);
    
    html2pdf().set(opt).from(tempDiv).save().then(() => {
        document.body.removeChild(tempDiv);
        showNotification('PDF gerado com sucesso!', 'success');
    }).catch(error => {
        console.error('Erro ao gerar PDF:', error);
        document.body.removeChild(tempDiv);
        showNotification('Erro ao gerar PDF. Tente novamente.', 'error');
    });
}

function saveData() {
    try {
        localStorage.setItem('erpServicesConfig', JSON.stringify(erpData));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

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

console.log('Script carregado com sucesso');

