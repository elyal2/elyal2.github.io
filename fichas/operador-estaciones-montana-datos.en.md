---
id: operador-estaciones-montana-datos
lang: en
title: Corporate Data and Ski School Profitability Platform
cliente_display: Mountain Resort Operator
cliente_publico: false
sector: Turismo y ocio
tecnologia:
- Snowflake
- Power BI
- Azure
- Python
- dbt
- Snowpark Python
- Snowflake ML
- Snowflake Horizon
- Business Central
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2026
bu: Data & AI
tags:
- Arquitectura Medallion
- Gobierno del dato
- DataOps
- Analítica de rentabilidad
- Micro-batch
- Optimización operativa
- IA explicable
- Autoservicio de datos
briefing: The proposed solution establishes Snowflake as a governed corporate analytics
  platform, using dbt to integrate and standardise HR, Finance and Operations data
  into Bronze, Silver and Gold layers. Power BI dashboards will provide a unified
  view of ski school profitability, occupancy and operational performance, reducing
  reliance on Excel and manual reporting. A later phase would add explainable instructor-allocation
  optimisation, alerts and natural-language analytics to support more proactive decision-making.
---

## 1. Context and Challenge

The operator managed a complex, seasonal data ecosystem distributed across several legal entities and business areas. Although it had an on-premises SQL Server Data Warehouse with multiple integrated sources and numerous Power BI reports, information silos, reliance on Excel files, manual processes and the absence of unified KPI definitions persisted. Finance, HR and Operations worked with misaligned data and different refresh frequencies, making it difficult to understand the ski school’s actual profitability, including the cost per instructor hour and margin by class type. In addition, the small internal BI team needed a platform that was scalable and simple to operate. The proposed approach therefore focused on a gradual evolution towards a predictive and preventive model, avoiding a high-risk full migration and prioritising a business quick win.

## 2. Technical Solution

The proposed solution is structured as two progressive projects based on Snowflake as the corporate analytics platform and dbt as the transformation, versioning, testing and documentation layer. The first project implements a Medallion architecture with Bronze, Silver and Gold layers, integrating HR, planning, bookings, ski school operations, administrative files and a limited subset of Business Central financial data through REST, SQL and controlled loading patterns. Data is standardised and governed through dbt models, including a dimensional Ski School model with instructor, class, time, legal entity and activity dimensions, together with booking, occupancy and hourly profitability facts. Power BI connects to the Gold layer to provide operational and financial dashboards. The platform also incorporates incremental and micro-batch ingestion for bookings and demand, subject to technical validation, as well as datasets prepared for subsequent optimisation and AI initiatives. Security is based on RBAC, legal-entity segregation, Power BI row-level access controls, traceability, sensitive-information classification and masking policies enabled by Snowflake governance capabilities. The second project contemplates Snowpark Python and Snowflake ML to run an explainable instructor-allocation optimisation engine close to the data, with change detection, orchestrated execution and versioned results. It also includes completing the financial integration, enabling natural-language queries and deploying operational alerts.

## 3. Business Impact and Results

As this is a commercial proposal that has not yet been implemented, the results are expressed as expectations. The first project should consolidate HR, Finance and Operations information under a common version of the truth, reducing reliance on Excel and the manual effort required to prepare reports. It is expected to improve the availability and traceability of the ski school’s profitability KPIs, facilitate comparisons between legal entities and accelerate the identification of operational deviations. Snowflake’s separation of storage and compute should allow consumption to adapt to the business’s pronounced seasonality and enable ingestion, transformation and analytics workloads to scale without structural redesigns. The Gold layer and feature datasets would prepare the platform for planning optimisation, simulation and advanced analytics. In a second phase, the optimisation engine should generate explainable instructor-allocation recommendations, while alerts and natural-language queries would support more proactive management and more autonomous access to information for directors and business managers. The planned documentation and knowledge transfer should also strengthen the autonomy of the internal BI team.
