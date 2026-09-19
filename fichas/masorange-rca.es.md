---
id: masorange-rca
lang: es
title: Diagnóstico inteligente de incidencias de red mediante grafos e IA generativa
cliente_display: MasOrange
cliente_publico: true
sector: Telecomunicaciones
tecnologia:
- AWS
tipo_proyecto: Plataforma
importe_label: Plataforma
anio: 2025
partner:
- AWS
bu: Data & AI
tags:
- RCA
- AIOps
- Digital Twin
- Grafos
- NOC
- Correlación de alarmas
- Análisis multivendor
- IA generativa
- Predicción de fallos
briefing: El operador afrontaba una elevada complejidad en la operación de sus redes
  RAN, core y transporte, con miles de alarmas, inventarios de topología estáticos
  y segmentados, y múltiples herramientas OSS difíciles de correlacionar. La identificación
  del origen de una incidencia podía prolongarse durante más de siete horas, especialmente
  en escenarios multivendor y de caída masiva de servicios. Los equipos de operación
  dedicaban un esfuerzo considerable a revisar alarmas, recopilar evidencias y relacionar
  manualmente eventos entre dominios, mientras que los enfoques tradicionales de análisis
  de causa raíz se apoyaban principalmente en reglas estáticas y umbrales.
---

## 1. Contexto y Desafío

El operador afrontaba una elevada complejidad en la operación de sus redes RAN, core y transporte, con miles de alarmas, inventarios de topología estáticos y segmentados, y múltiples herramientas OSS difíciles de correlacionar. La identificación del origen de una incidencia podía prolongarse durante más de siete horas, especialmente en escenarios multivendor y de caída masiva de servicios. Los equipos de operación dedicaban un esfuerzo considerable a revisar alarmas, recopilar evidencias y relacionar manualmente eventos entre dominios, mientras que los enfoques tradicionales de análisis de causa raíz se apoyaban principalmente en reglas estáticas y umbrales. También existía una visibilidad limitada sobre el efecto de los cambios de configuración y una falta de trazabilidad homogénea sobre qué elementos habían provocado o propagado una incidencia.

## 2. Solución Técnica

Se diseñó una plataforma de diagnóstico proactivo basada en un gemelo digital de la red y en un modelo de grafos actualizado de forma continua. La solución ingiere información de topología, dispositivos, enlaces, proveedores, capas de comunicación, alarmas y métricas, normalizando los datos para representar las relaciones entre elementos de red. Sobre este grafo se aplican algoritmos de descubrimiento de topología, completado de relaciones, agrupación de alarmas por conectividad y análisis de propagación. El enfoque evolucionó desde una propagación indiscriminada de todas las alarmas hacia un modelo centrado en eventos con impacto probado sobre el servicio, reduciendo el ruido y las correlaciones espurias. Para cada agrupación se generan subgrafos de afectación limitados por saltos y caminos mínimos, sobre los que se calculan PageRank, betweenness, closeness, recuento de rutas causales e influencia sobre nodos posteriores. Una combinación ponderada de estas métricas prioriza las posibles causas raíz. Finalmente, servicios de aprendizaje automático e IA generativa construyen explicaciones estructuradas, ordenan hipótesis por probabilidad, resumen la evolución temporal del incidente y proponen acciones de recuperación. La arquitectura se implementó sobre servicios gestionados de AWS, con componentes de ingesta, transformación, almacenamiento de grafos, analítica, funciones serverless y exposición mediante API para su integración con la interfaz de operación del NOC. El diseño incorpora trazabilidad de los nodos incluidos, los criterios de agrupación y el cálculo de las puntuaciones.

## 3. Impacto y Resultados de Negocio

La plataforma permite correlacionar grandes volúmenes de alarmas y métricas en segundos, concentrando el análisis en los eventos con impacto real sobre el servicio. El refinamiento del modelo de propagación redujo el ruido, evitó correlaciones falsas y generó resultados de análisis de causa raíz más accionables para los equipos de operación. En los escenarios analizados, la combinación de topología, métricas de centralidad y razonamiento generativo permitió identificar cadenas de propagación desde fallos físicos o de alimentación hasta problemas de sincronización, enlaces de transporte y pérdida de disponibilidad. La solución mejora la eficiencia del NOC al automatizar la agrupación de alarmas, el enriquecimiento de incidencias y la generación de informes, reduciendo la dependencia de investigaciones manuales. Además, proporciona una base escalable para analizar redes multivendor y diferentes dominios tecnológicos, con resultados explicables y auditables. Los operadores obtienen mayor autonomía para revisar hipótesis, comprender el impacto temporal de cada incidente y actuar sobre los nodos de mayor influencia, al tiempo que se facilita la integración del diagnóstico en los procesos habituales de soporte y gestión de incidencias.
