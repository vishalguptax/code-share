// Response and Payload for auth controller page
const authControllerData = [
    {
        name: 'clients',
        items: {
            clients: true,
            clientDetail: true,
            editClient: false,
            addClient: true,
            deleteClient: false,
        },
    },
    {
        name: 'users',
        items: {
            users: true,
            userDetails: true,
            editUser: false,
            addUser: true,
            deleteUser: false,
        },
    },
    {
        name: 'funds',
        items: {
            funds: true,
            fundDetails: true,
            editFund: false,
            addFund: true,
            deleteFund: false,
        },
    },
    {
        name: 'investors',
        items: {
            investors: true,
            investorDetails: true,
            editInvestor: false,
            addInvestor: true,
            deleteInvestor: false,
            
        },
    },
    {
        name:"investorPortal",
        items:{
            investorDashboard: false,
            investorDocs:false,
            investorReports: false,
            investorUsers:false,
            investorOnBoardDocs:false,
            investorNotices:false,
            investorTaxDocs:false,
            investorFinStatements:false,
            investorHoldingStatement:false,
            investorOtherDocs:false
            
        }
    },
    {
        name: 'scheme',
        items: {
            scheme: true,
            editScheme: false,
            addScheme: true,
            deleteScheme: false,
        },
    },
    {
        name: 'investmentAssets',
        items: {
            investmentAssets: true,
            editInvestmentAssets: false,
            addInvestmentAssets: true,
            addInvestmentInstrument: true,
            editInvestmentInstrument: false,
            deleteInvestmentInstrument: false,
        },
    },
    {
        name: 'pipelines',
        items: {
            pipelines: true,
            addPipeline:true,
            editPipelines: false,
            deletePipeline:false
        },
    },
    {
        name: 'notices',
        items: {
            notices: true,
            newNotice: true,
            editNotice: false,
            addNotice: true,
            deleteNotice: false,
        },
    },
    {
        name: 'rolesAuthorizations',
        items: {
            rolesAuthorizations: false,
            authorizations: false,
            roles: false,
            addRole: false,
            editRole: false,
            deleteRole:false
        },
    },
    {
        name: 'profile',
        items: {
            profile: true,
            editProfile: true,
        },
    },
    {
        name: 'globalMasters',
        items: {
            globalMasters: false,
            editGlobalMasters: false,
        },
    },
    {
        name: 'reports',
        items: {
            reports: true,
            publishReport: false,
        },
    },
]

// Response for auth while login

const authData = [
    'adminDashboard',
    'clients',
    'addClient',
    'clientDetail',
    'investors',
    'investorDetails',
    'users',
    'userDetails',
    'addUser',
    'globalMasters',
    'investmentAssets',
    'pipelines',
    'funds',
    'fundDetails',
    'scheme',
    'notices',
    'newNotice',
    'reports',
    'transactions',
    'profile',
    'rolesAuthorizations',
    'drawdowns',
    'InvestorDashboard',
    'investorDocs',
    'investorReports',
    'investorUsers',
    'investorOnBoardDocs',
    'investorNotices',
    'investorTaxDocs',
    'investorFinStatements',
    'investorHoldingStatement',
    'investorOtherDocs',
    'addPipeline',
    'editPipeline',
    'deletePipeline',
    'addClient',
    'editClient',
    'deleteClient',
    'addRole',
    'editRole',
    'deleteRole',
    'addUser',
    'editUser',
    'deleteUser',
    'addFund',
    'updateFund',
    'addScheme',
    'editScheme',
    'deleteScheme',
    'addInvestor',
    'editInvestor',
    'deleteInvestor',
]
