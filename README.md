# coordinus-front

## Resumen de la app

Aplicación de frontend para el sistema **CoordinUs** desarrollada como desafío para postular al cargo de desarrollador fullstack semi senior en Recorrido.cl.

El sistema CoordiUs permite coordinar turnos entre trabajadores con el fin de monitorear servicios de clientes.

Se utilizó el stack Vue3 + Pinia + Oh Vue Icons + vue-router

## Componentes

### Layouts
- **MainLayout**: utilizado para definir el layout general de la app.
### Views
- **AssignamentView**: utilizado para visualizar los turnos asignados.
- **AvailabilityView**: utilizado para visualizar y editar las disponibilidades de los ingenieros.
### Components
- **MainHeader**: header responsivo con navegación entre las vistas del sistema, que además contiene opciones de filtrado y detalle de fechas de la semana seleccionada.
- **StatsTable**: Tabla de estadísticas que contiene el total de horas asignadas de cada trabajador para la semana y servicio seleccionado. Además contiene la cantidad de turnos sin asignar en la semana.
- **ScheduleTable**: Tabla que contiene horarios de turnos, nombres de usuarios y componentes CheckBox con la finalidad de permitir la edición de dispnibilidad de los ingnieros.
- **AssignedTable**: Tabla que contiene horarios de turnos y nombres de ingenieros asignados. en caso de no haber ingenieros asignados se muestra un simbolo de advertencia.
- **CheckBox**: componente utilizado para indicar disponibilidad de un usuario.
- **NavSelector**: componente utilizado para crear filtros de servicios monitoreados y semanas.
### Services
- **WeekService**: servicio utilizado para asilar la lógica de semanas.
- **ClientServiceService**: servicio utilizado para aislar la lógica de los servicios monitoreados de los clientes.
### Stores
- **userColors**: store utilizado para aislar la lógica de colores y compartirla globalmente por los diferentes componentes que la requieren.


## pasos para ejecutar la app

Se requiere tener yarn instalado e instalar las dependencias del proyecto con el siguiente comando.

```
yarn install
```

### levantar servidor local
```
yarn serve
```
