# DataSense
Monitorización Inteligente e Inteligencia artificial para gestión y Ahorro Energético

Estructura general de la aplicación:

DataSense/
│
├── Data/                          # Backend (Java Spring Boot)
│   ├── src/main/java/
│   │   └── com/datasense/
│   │       ├── controller/        # REST Controllers
│   │       │   ├── AuthController.java
│   │       │   ├── EnergyController.java
│   │       │   ├── DashboardController.java
│   │       │   ├── DeviceController.java
│   │       │   └── ReportController.java
│   │       │
│   │       ├── model/             # Entidades
│   │       │   ├── User.java
│   │       │   ├── EnergyReading.java
│   │       │   ├── Device.java
│   │       │   ├── EnergyConsumption.java
│   │       │   └── Alert.java
│   │       │
│   │       ├── repository/        # Acceso a BD
│   │       │   ├── UserRepository.java
│   │       │   ├── EnergyReadingRepository.java
│   │       │   └── DeviceRepository.java
│   │       │
│   │       ├── service/           # Lógica de negocio
│   │       │   ├── AuthService.java
│   │       │   ├── EnergyService.java
│   │       │   ├── DashboardService.java
│   │       │   └── ReportService.java
│   │       │
│   │       └── config/            # Configuración
│   │           ├── SecurityConfig.java
│   │           └── CorsConfig.java
│   │
│   └── src/main/resources/
│       ├── application.properties
│       └── schema.sql
│
└── public/                        # Frontend (React)
    ├── index.jsx                  # Punto de entrada
    ├── App.jsx                    # App principal con rutas
    │
    ├── components/                # Componentes reutilizables
    │   ├── auth/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── PrivateRoute.jsx
    │   │
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Footer.jsx
    │   │
    │   ├── dashboard/
    │   │   ├── MetricCard.jsx
    │   │   ├── EnergyChart.jsx
    │   │   ├── ConsumptionGraph.jsx
    │   │   └── AlertsWidget.jsx
    │   │
    │   └── common/
    │       ├── Button.jsx
    │       ├── Card.jsx
    │       ├── Table.jsx
    │       └── Modal.jsx
    │
    ├── pages/                     # Páginas principales
    │   ├── HomePage.jsx           # Dashboard principal
    │   ├── MonitoringPage.jsx     # Monitoreo en tiempo real
    │   ├── DevicesPage.jsx        # Gestión de dispositivos
    │   ├── ReportsPage.jsx        # Informes y estadísticas
    │   ├── AlertsPage.jsx         # Alertas y notificaciones
    │   ├── SettingsPage.jsx       # Configuración
    │   └── NotFoundPage.jsx       # 404
    │
    ├── services/                  # Servicios API
    │   ├── api.js                 # Configuración Axios
    │   ├── authService.js         # Autenticación
    │   ├── energyService.js       # Datos de energía
    │   ├── deviceService.js       # Gestión de dispositivos
    │   └── reportService.js       # Reportes
    │
    ├── utils/                     # Utilidades
    │   ├── formatters.js          # Formatear datos
    │   ├── validators.js          # Validaciones
    │   ├── constants.js           # Constantes
    │   └── helpers.js             # Funciones auxiliares
    │
    └── styles/                    # Estilos
        ├── global.css
        ├── dashboard.css
        └── components.css
