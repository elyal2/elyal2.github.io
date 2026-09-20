---
id: constructora-nacional-materiales
lang: es
title: MVP de inteligencia artificial para materiales constructivos
cliente_display: Empresa constructora nacional
cliente_publico: false
sector: Construcción
tecnologia:
- Watsonx.ai
- Watsonx Discovery
- Code Engine
- Excel
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
partner:
- IBM
bu: Data & AI
tags:
- IA generativa
- búsqueda por similitud
- cross-encoder
- BC3
- enriquecimiento de datos
- validación dimensional
- gestión de colas
briefing: Una empresa constructora diseñó un MVP basado en IA generativa, búsqueda
  léxica y similitud para automatizar la descomposición de ficheros BC3 o Excel y
  el mapeo de materiales con una base de datos de impacto ambiental. La solución incorpora
  preprocesamiento, colas, validación de dimensiones y escalado de la ejecución, con
  el objetivo de reducir el análisis de unas dos semanas a aproximadamente 16 horas
  y facilitar el procesamiento masivo de partidas. Al estar pendiente de ejecución,
  estos beneficios son estimaciones esperadas.
---

## 1. Contexto y Desafío

Una empresa constructora necesitaba agilizar el análisis de diseños y presupuestos constructivos en formato BC3 para identificar materiales valorables y relacionarlos con una base de datos de impacto ambiental. El proceso requería descomponer manualmente las partidas, interpretar descripciones heterogéneas y localizar materiales comparables, lo que limitaba la productividad, dificultaba la escalabilidad y aumentaba el esfuerzo de validación. El proyecto se definió como un MVP mediante sesiones de co-creación, descubrimiento funcional y profundización técnica.

## 2. Solución Técnica

Se diseñó una solución basada en IA generativa, búsqueda léxica y búsqueda por similitud. Los ficheros BC3 o Excel se preprocesan y sus partidas se incorporan a una cola para su descomposición. Watsonx.ai se utiliza para extraer y enriquecer elementos, generar descripciones y apoyar la validación, mientras que Watsonx Discovery facilita la búsqueda y recuperación de materiales en la base de datos enriquecida. Code Engine integra los componentes, gestiona el procesamiento, escala la ejecución y genera resultados e informes. El flujo incluye limpieza de textos, eliminación de códigos y dimensiones para flexibilizar las búsquedas, búsqueda complementaria en Internet y validación de dimensiones con estandarización de unidades y una tolerancia definida para aceptar o descartar mapeos.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta de MVP todavía pendiente de ejecución, los resultados son esperados. La solución debería reducir el procesamiento de cada BC3 desde aproximadamente dos semanas hasta unas 16 horas, mejorando de forma significativa la productividad del equipo. También se espera automatizar la descomposición y el mapeo de materiales, aumentar la capacidad para procesar grandes volúmenes de partidas y facilitar la identificación de alternativas con menor impacto ambiental. El diseño con colas y escalado permitirá adaptar la capacidad a distintos niveles de demanda, mientras que la solución y el traspaso de conocimiento favorecerán una mayor autonomía del equipo interno.
