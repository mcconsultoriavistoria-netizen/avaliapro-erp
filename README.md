# 🏢 Avalia Pro ERP

Sistema de Gestão de Avaliações Imobiliárias com ERP integrado. Plataforma completa para profissionais de avaliação, desenvolvida com Next.js, TypeScript, Supabase e Tailwind CSS.

## 🚀 Características Principais

- ✅ Autenticação e permissões via Supabase
- ✅ CRUD completo para Clientes, Imóveis, Avaliações e Laudos
- ✅ Financeiro integrado (receitas e despesas)
- ✅ Agenda com compromissos e vistorias
- ✅ Georreferenciamento com mapas interativos
- ✅ Gestão documental com upload e vinculação
- ✅ API REST pronta para integração externa
- ✅ Layout responsivo e padronizado
- ✅ Dashboard analítico
- ✅ Relatórios avançados

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm ou yarn
- Conta Supabase
- PostgreSQL (fornecido pelo Supabase)

## 🔧 Instalação Local

### 1. Clonar o Repositório

```bash
git clone https://github.com/mcconsultoriavistoria-netizen/avaliapro-erp.git
cd avaliapro-erp
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite `.env` e adicione suas credenciais Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANON
SUPABASE_SERVICE_ROLE_KEY=SUA_CHAVE_SERVICE_ROLE
DATABASE_URL=postgresql://usuario:senha@localhost:5432/avaliapro
```

### 4. Configurar Banco de Dados

Crie e aplique as migrações Prisma:

```bash
npm run prisma:migrate
```

Ou gere o cliente Prisma:

```bash
npm run prisma:generate
```

### 5. Rodar o Servidor

```bash
npm run dev
```

O sistema estará disponível em: **http://localhost:3000**

## 📁 Estrutura do Projeto

```
avaliapro-erp/
├── src/
│   ├── modules/            # Módulos do sistema
│   │   ├── clients/        # Gestão de Clientes
│   │   ├── properties/     # Gestão de Imóveis
│   │   ├── evaluations/    # Gestão de Avaliações
│   │   ├── market/         # Pesquisas de Mercado
│   │   ├── reports/        # Geração de Laudos
│   │   ├── finance/        # Gestão Financeira
│   │   ├── agenda/         # Agenda e Compromissos
│   │   ├── gis/            # Georreferenciamento
│   │   ├── documents/      # Gestão de Documentos
│   │   ├── admin/          # Painel Administrativo
│   │   └── ai/             # Inteligência Artificial
│   ├── components/         # Componentes reutilizáveis
│   ├── context/            # Contextos globais (React Context)
│   ├── hooks/              # Hooks customizados
│   ├── services/           # Serviços e API
│   ├── styles/             # Tailwind + estilos globais
│   └── types/              # Definições TypeScript
├── prisma/
│   └── schema.prisma       # Schema do banco de dados
├── public/                 # Assets estáticos
├── .env.example            # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.js      # Configuração Tailwind CSS
├── postcss.config.js       # Configuração PostCSS
└── README.md
```

## 🗄️ Banco de Dados

### Modelos Principais

- **Client**: Dados dos clientes
- **Property**: Imóveis e suas localizações
- **Evaluation**: Avaliações imobiliárias
- **Report**: Laudos gerados
- **MarketResearch**: Pesquisas de mercado
- **Document**: Documentos anexados
- **AgendaTask**: Tarefas e compromissos
- **FinanceTransaction**: Transações financeiras
- **User**: Usuários do sistema

Para visualizar o banco via GUI:

```bash
npm run prisma:studio
```

## 🔐 Autenticação

O projeto usa Supabase Authentication com:

- Login por email/senha
- Suporte para OAuth (Google, GitHub, etc)
- Autorização baseada em roles
- Tokens JWT seguros

## 📡 API REST

A API pode ser acessada em:

```
http://localhost:3000/api/
```

### Endpoints principais:

```
GET    /api/clients           # Listar clientes
POST   /api/clients           # Criar cliente
GET    /api/clients/:id       # Obter cliente
PUT    /api/clients/:id       # Atualizar cliente
DELETE /api/clients/:id       # Deletar cliente

GET    /api/properties        # Listar imóveis
POST   /api/properties        # Criar imóvel
...
```

## 🌍 Deploy em Produção

### Vercel (Recomendado)

1. Crie uma conta em [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente no painel
4. Deploy automático será feito a cada push

```bash
vercel --prod
```

### Supabase

1. Crie um projeto em [Supabase](https://supabase.com)
2. Configure o banco PostgreSQL
3. Copie as chaves para `.env`
4. Execute as migrações

### Alternativas

- **Netlify**: Suporta Next.js com funções serverless
- **Railway**: Hospedagem com banco de dados integrado
- **Render**: Deploy fácil para Node.js

## 📚 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## 👨‍💼 Autor

**MC Consultoria Vitória**
- GitHub: [@mcconsultoriavistoria-netizen](https://github.com/mcconsultoriavistoria-netizen)

## 📧 Suporte

Para dúvidas ou problemas:

- Abra uma [Issue](https://github.com/mcconsultoriavistoria-netizen/avaliapro-erp/issues)
- Envie um email para suporte@mcconsultoria.com

---

**Desenvolvido com ❤️ por MC Consultoria Vitória**
