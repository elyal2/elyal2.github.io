---
id: universitario-chatbot-asistencial-onprem
lang: es
title: Chatbot asistencial clínico on-premise
cliente_display: Hospital Universitario
cliente_publico: false
sector: Salud
tecnologia:
- MongoDB
- Ollama
- LibreChat
- Alfresco
- Retrieval-Augmented Generation (RAG)
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2025
bu: Data & AI
tags:
- Chatbot asistencial
- RAG autónomo
- LLM on-premise
- Integración documental
- Búsqueda semántica
- Autoservicio de información clínica
briefing: El hospital necesitaba facilitar al personal asistencial el acceso rápido
  y contextualizado a protocolos clínicos, procedimientos internos y guías de actuación.
  La documentación estaba distribuida entre un directorio de archivos y un gestor
  documental corporativo, sin metadatos estructurados ni taxonomías predefinidas.
  La propuesta planteaba un piloto capaz de trabajar sobre más de dos mil documentos
  PDF, evitando el etiquetado manual y la preclasificación avanzada, y con una ejecución
  íntegramente local para preservar la confidencialidad de la información clínica.
---

## 1. Contexto y Desafío

El hospital necesitaba facilitar al personal asistencial el acceso rápido y contextualizado a protocolos clínicos, procedimientos internos y guías de actuación. La documentación estaba distribuida entre un directorio de archivos y un gestor documental corporativo, sin metadatos estructurados ni taxonomías predefinidas. La propuesta planteaba un piloto capaz de trabajar sobre más de dos mil documentos PDF, evitando el etiquetado manual y la preclasificación avanzada, y con una ejecución íntegramente local para preservar la confidencialidad de la información clínica.

## 2. Solución Técnica

Se propuso una arquitectura modular de asistente conversacional ejecutable on-premise y basada en componentes de código abierto. La solución incorporaría una interfaz web responsive embebible en portales corporativos, un mecanismo de autenticación integrado con el sistema corporativo existente y trazabilidad de la actividad por usuario. El flujo de consulta combinaría un discriminador de intención, un orquestador modular y un agente asistencial basado en modelos de lenguaje y Retrieval-Augmented Generation (RAG). MongoDB se utilizaría como base de conocimiento vectorial, mientras que Ollama permitiría ejecutar localmente los modelos de lenguaje y de embeddings. La ingesta integraría el directorio de archivos y Alfresco mediante API o conectores estándar. El proceso RAG incluiría detección de altas y bajas documentales, actualización de índices y mantenimiento autónomo de la base de conocimiento. El despliegue local evitaría enviar la documentación a servicios externos y permitiría escalar mediante réplicas de los servicios de inferencia y particionamiento de la base de datos.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta para una fase piloto todavía no ejecutada, los resultados son esperados. La solución debería reducir el tiempo necesario para localizar información clínica y mejorar la precisión y contextualización de las respuestas frente a las búsquedas manuales en repositorios dispersos. También se espera validar el procesamiento de un volumen relevante de documentación asistencial, establecer una base escalable para futuras ampliaciones y disminuir la carga de mantenimiento mediante la actualización automática del índice. El personal podría disponer de un punto de acceso conversacional más autónomo, mientras que los equipos técnicos conservarían el control de la infraestructura, los datos y la evolución del asistente dentro del entorno del hospital.
