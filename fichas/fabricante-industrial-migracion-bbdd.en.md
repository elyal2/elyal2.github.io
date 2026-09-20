---
id: fabricante-industrial-migracion-bbdd
lang: en
title: Enterprise Database Migration Assessment
cliente_display: Industrial Paper Manufacturer
cliente_publico: false
sector: Industria y Fabricación
tecnologia:
- PostgreSQL
- DB2
- Debezium
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
bu: Cloud & Managed Services
tags:
- Migración de bases de datos
- Change Data Capture
- Cutover controlado
- Replicación de datos
- Plan de fallback
- Tuning de bases de datos
briefing: An industrial manufacturer needed to assess and prepare the migration of
  its operational database from DB2 to PostgreSQL, minimising application disruption
  and reducing the risks associated with converting objects, stored procedures and
  queries. The complexity of the environment included dependencies between applications,
  JDBC connections, logic implemented in SQL and PL/SQL, and different data types
  and objects with potential incompatibilities between database engines. The proposed
  approach followed an iterative methodology to understand the environment, classify
  risks and progressively validate the technical feasibility of the migration.
---

## 1. Context and Challenge

An industrial manufacturer needed to assess and prepare the migration of its operational database from DB2 to PostgreSQL, minimising application disruption and reducing the risks associated with converting objects, stored procedures and queries. The complexity of the environment included dependencies between applications, JDBC connections, logic implemented in SQL and PL/SQL, and different data types and objects with potential incompatibilities between database engines. The proposed approach followed an iterative methodology to understand the environment, classify risks and progressively validate the technical feasibility of the migration.

## 2. Technical Solution

A sprint-based approach was designed, supported by a multidisciplinary team specialised in PostgreSQL, data engineering and SQL development. The solution covered infrastructure preparation, PostgreSQL installation and configuration, schema definition, roles, permissions, backups, WAL, monitoring and performance parameters. To minimise downtime, a parallel replication architecture based on Change Data Capture was proposed, including historical preloading, continuous synchronisation, row-count and checksum validation, a temporary freeze on writes and final delta synchronisation. The cutover would include a controlled change to the applications’ data sources, functional and performance testing, and a validated fallback procedure to the DB2 environment. Project governance would be structured around detailed planning, a RACI matrix, progress reports, quality control, risk management and formal deliverable approval.

## 3. Business Impact and Results

As this was an assessment and preparation proposal that had not yet been executed, the results are considered expected outcomes. The project would provide an objective assessment of the migration complexity, a prioritised inventory of objects and queries, and a transition plan with identified risks and dependencies. Continuous replication and controlled cutover should reduce the service interruption window, facilitate data integrity validation and provide a reversal path in the event of incidents. In addition, standardised PostgreSQL preparation, together with technical documentation and a test plan, would support autonomous operation of the new environment and enable more controlled evolution of dependent applications.
