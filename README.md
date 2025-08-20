📄 Sistema de Documentação de Serviços para ERPs

Aplicação web 100% client-side para documentar e configurar serviços por ERP, gerar pré-visualizações (modo Desenvolvedor e Cliente) e baixar PDFs estilizados.
Ideal para times que precisam padronizar cadastros, registrar decisões e compartilhar escopos com clareza.

![Tela inicial do sistema](assets/readme.png)

✨ Feito para ser simples de rodar (abra o index.html) e poderoso na hora de organizar e comunicar serviços.

✨ Destaques

🧭 Seleção de ERP: ERPs de fábrica (ex.: IXC, SGP) + criação de novos.

🧩 Serviços por ERP: adição, edição, ativação/desativação e configuração completa.

🛡️ Proteção de serviços “de fábrica”: não podem ser excluídos.

➕ Novo serviço com presets: atalhos prontos + busca por chip com filtro.

📝 Motivo ao desmarcar: ao desativar um serviço, peça justificativa (vai para UI e PDF).

👁️ Pré-visualização dupla:

Registro Dev (detalhado: descrição, pré-requisitos, endpoint, parâmetros…)

Lista para Cliente (foco no que será entregue)

🧾 PDF elegante com ícones (✓/✗), seções e paginação.

🔐 Protocolo automático: SIRIUS-YYYYMMDD-0000 com numeração persistente e “reserva” até salvar.

💾 Persistência local via localStorage (ERPs, serviços e templates por ERP).

✅ Validação de campos obrigatórios antes de prévias/PDFs.

🙅 Sem submits acidentais: formulário não envia ao apertar Enter.

🗂️ Estrutura
/
├── index.html        # Estrutura HTML principal
├── style.css         # Estilos
├── script.js         # Lógica e estado (localStorage, PDF, modais, etc.)
├── /assets           # (opcional) imagens e ícones
└── README.md         # Este arquivo

🧱 Stack

HTML5 • CSS3 • JavaScript (Vanilla)

pdfMake para geração dos PDFs

localStorage para persistência no navegador

⚙️ Flag de comportamento: AUTO_ADD_DEFAULT_SERVICES = false (não pré-preenche serviços automaticamente ao criar ERP — controle total do usuário).

🚀 Como usar

Baixe ou clone este repositório:

git clone https://github.com/seu-usuario/seu-repo.git


Abra o index.html no navegador (não precisa de servidor).

Dica dev: usar um “Live Server” facilita durante edições.

Selecione ou crie um ERP.

Adicione/edite serviços (ou use os presets com chips + busca).

Preencha os campos obrigatórios:

Nome da empresa (Contractor Name E)

Nome do Contratante

Quem está documentando

Data do contrato

Número do contrato (preenchido automaticamente com Protocolo)

Visualize:

Prévia Registro Dev (detalhado)

Prévia Lista de Serviços (cliente)

Exporte o PDF no modo desejado.

🧠 Conceitos importantes
ERPs fixos x personalizados

Fixos: ex.: IXC, SGP. Não podem ser excluídos.

Custom: você cria, edita e remove à vontade.

Serviços “de fábrica” x criados pelo usuário

“De fábrica” são protegidos contra exclusão (garante consistência).

Serviços criados por você podem ser removidos.

Motivo ao desmarcar

Ao desativar um serviço, um modal solicita justificativa.
Isso:

Fica visível na UI (“Serviço disponível mas não selecionado…”)

É exibido nos PDFs (Dev e Cliente)

“Sem necessidade de API”

Marcou Sem API? Os campos de endpoint/parâmetros somem (UI e PDF).
Ótimo para serviços puramente processuais.

Protocolo automático

Geração como SIRIUS-YYYYMMDD-0000 com:

Reserva do próximo número ao abrir (não consome).

Confirmação (botão Salvar Protocolo) que avança o contador.

Persistência via localStorage (sobrevive a recarregamentos/abas).

🧾 Saídas em PDF

Registro de Desenvolvedores (Dev)
Inclui descrição, instruções, pré-requisitos, endpoint, parâmetros (JSON), responsável, além dos serviços não selecionados com motivo.

Lista para Cliente
Enxuta e objetiva: títulos dos serviços selecionados, e a seção de não selecionados (com motivo).

Ambos trazem:

Cabeçalho do contrato (empresa, contratante, data, ERP, protocolo)

Carimbo de geração (data/hora)

Paginação

🛠️ Personalização

ERPs e serviços padrão: edite erpData em script.js.

Presets de serviços (chips): ajuste PRESET_SERVICES.

Template de configuração: BLANK_CONFIG.

Templates por ERP (persistidos): serviceTemplatesByErp em localStorage.

Estilo visual: altere style.css.

Textos/labels: direto no HTML/JS.

📦 Persistência (localStorage)

Chaves importantes:

erpServicesConfig – estado de ERPs/serviços

serviceTemplatesByErp – templates salvos por ERP

protoNextSeq / protoHoldSeq – controle do protocolo

Se o navegador limpar o localStorage, os dados serão perdidos.

⚖️ Regras & Proteções

ERPs fixos não podem ser excluídos.

Serviços “de fábrica” não podem ser removidos.

Desativar serviço ⇒ exige motivo (registrado na UI e no PDF).

Formulário não envia com Enter (exceto em <textarea>).

Todos os botões têm type="button" para evitar submits acidentais.

Validação de obrigatórios antes de prévia/PDF.

🧯 Solução de problemas

PDF saiu em branco

Garanta que a prévia foi gerada e o conteúdo não está com display:none.

Aguarde o carregamento completo antes de exportar.

Clique em botão submeteu o form

Confirme se o botão tem type="button".
No projeto isso já é forçado via JS na inicialização.

Perdi minhas configurações

O app usa localStorage. Se o navegador limpou o storage, os dados se foram.

🗺️ Roadmap rápido

 Exportar/Importar configurações (JSON)

 Temas de cor (dark/light)

 Multi-ERPs em um único PDF

 Campo de anexos/prints nos cards de serviço

📄 Licença

Uso interno. Nenhuma licença pública foi atribuída.

🤝 Contribua

Achou um ponto para melhorar? Abra uma issue com ideia/bug e descreva o passo a passo. Pull requests são bem-vindos!