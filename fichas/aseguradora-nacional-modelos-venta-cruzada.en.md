---
id: aseguradora-nacional-modelos-venta-cruzada
lang: en
title: Cross-Selling and Up-Selling Models for an Insurer
cliente_display: National Insurance Company
cliente_publico: false
sector: Seguros
tecnologia:
- AWS
- Amazon SageMaker
- Amazon S3
- Python
tipo_proyecto: MVP/PoC
importe_label: MVP/PoC
anio: 2024
partner:
- AWS
bu: Data & AI
tags:
- Venta cruzada
- Venta incremental
- Next-best-action
- Scoring predictivo
- AutoML
- Analítica avanzada
briefing: The insurer had a churn model, primarily applied to funeral insurance products,
  which had delivered satisfactory results in supporting customer retention. However,
  it needed to expand its commercial capabilities to identify opportunities for up-selling
  new benefits and extending existing coverage, as well as for cross-selling home
  insurance. The lack of sufficient historical data for certain products made it difficult
  to select target audiences using traditional techniques.
---

## 1. Context and Challenge

The insurer had a churn model, primarily applied to funeral insurance products, which had delivered satisfactory results in supporting customer retention. However, it needed to expand its commercial capabilities to identify opportunities for up-selling new benefits and extending existing coverage, as well as for cross-selling home insurance. The lack of sufficient historical data for certain products made it difficult to select target audiences using traditional techniques. The challenge was to reduce time-to-market, maximise the success rate of commercial activities and enable the dynamic adjustment of models, while maintaining an efficient approach to cloud resource consumption.

## 2. Technical Solution

A proof of concept was designed on the existing AWS landing zone, using Amazon SageMaker for the analysis, training and refinement of Machine Learning models. Structured and semi-structured data, received primarily in CSV format, would be stored in Amazon S3 for subsequent review, standardisation and cleansing. AutoML capabilities would support data preprocessing, feature engineering and hyperparameter optimisation. Two scoring models would be developed: one to prioritise the acquisition of new funeral insurance benefits and another to identify customers with a higher propensity to purchase home insurance. Experiments, candidates, metrics and results would be documented in reproducible notebooks, generating output files with the score assigned to each customer and a report of priority leads. The solution would incorporate data integrity, traceability and availability controls, together with coordination with the teams responsible for the landing zone, security and communications. Industrialisation and integration with the corporate ecosystem would be considered as a subsequent evolution.

## 3. Business Impact and Results

As this was a proposed proof of concept that had not yet been executed, the results were expressed as expectations. The initiative would accelerate the identification of customers with a higher propensity to purchase new benefits or home insurance policies, improving the prioritisation of commercial activity compared with approaches based solely on traditional rules. It was expected to support the definition of a next-best-action and the identification of customers eligible for multiple initiatives, enabling combined offers focused on customer loyalty. The use of AutoML and an on-demand cloud environment should reduce experimentation times and facilitate model refinement. In addition, the notebooks, software assets and deployment documentation would provide the internal team with greater autonomy to review, retrain and apply the models. As a future evolution, automation, monitoring and integration of the outputs with the technology ecosystem and other models, such as churn and customer journey models, were envisaged.
