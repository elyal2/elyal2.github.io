---
id: educativa-copiloto-documental
lang: es
title: IA generativa para gestor documental
cliente_display: Organización educativa
cliente_publico: false
sector: Formación y Servicios Profesionales
tecnologia:
- Azure
- Copilot Studio
- Retrieval-Augmented Generation (RAG)
- SharePoint
- Microsoft Teams
tipo_proyecto: Vertical
importe_label: Vertical
anio: 2024
partner:
- Microsoft
bu: Data & AI
tags:
- IA generativa
- Chatbot documental
- Búsqueda asistida
- Autoservicio de información
- Trazabilidad de fuentes
- Feedback de usuario
briefing: Se propone un asistente de IA generativa basado en RAG para consultar en
  lenguaje natural la documentación corporativa autorizada, inicialmente en español,
  mediante Copilot Studio y SharePoint. La integración con Microsoft Teams, la inclusión
  de enlaces a las fuentes y el respeto de los permisos existentes mejorarían la rapidez,
  trazabilidad y confianza en el acceso al conocimiento interno. Al tratarse de una
  propuesta no ejecutada, los beneficios descritos son esperados.
---

## 1. Contexto y Desafío

Una organización educativa disponía de conocimiento relevante en su gestor documental corporativo, pero necesitaba facilitar el acceso a esa información de forma más rápida, natural y usable para sus empleados. El reto consistía en habilitar consultas en lenguaje natural sobre la documentación existente, inicialmente en español, evitando respuestas ajenas al repositorio autorizado y manteniendo los controles de seguridad ya aplicados en los sistemas corporativos. La propuesta también contemplaba el uso de un canal de colaboración habitual para ampliar la adopción del servicio.

## 2. Solución Técnica

Se propone una solución de IA generativa basada en Retrieval-Augmented Generation (RAG), utilizando Copilot Studio sobre Azure como capa de interacción y orquestación. El copiloto se conectará con el gestor documental SharePoint mediante un plugin, recuperará la información pertinente del repositorio y responderá incluyendo enlaces a las fuentes originales para facilitar su revisión. Microsoft Teams se utilizará como canal de comunicación con el asistente. La solución quedará limitada a la documentación suministrada por el repositorio autorizado, aprovechará los permisos y mecanismos de seguridad existentes y solicitará feedback al finalizar cada interacción para apoyar la mejora continua. El alcance incluye el análisis, diseño, configuración, despliegue, pruebas, ajustes y validación de la solución.

## 3. Impacto y Resultados de Negocio

Al tratarse de una propuesta aún no ejecutada, los resultados descritos son esperados. La solución permitiría reducir el tiempo dedicado a localizar y consultar documentación interna, mejorar la autonomía de los usuarios y facilitar el acceso al conocimiento mediante preguntas en lenguaje natural. La inclusión de enlaces a las fuentes reforzaría la trazabilidad y la confianza en las respuestas, mientras que la integración con Teams favorecería una adopción más amplia sin introducir un canal de trabajo adicional. En fases posteriores, la arquitectura podría ampliarse con nuevos canales y capacidades, manteniendo como base el repositorio documental y sus controles de acceso.
