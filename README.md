# AWS-ContactForm-Serverless-App
# AWS Serverless Contact Form Application

## Overview
Deployed a fully serverless contact form using AWS S3 for static website hosting, API Gateway to handle form submissions, Lambda to process data, and DynamoDB for backend storage. Designed to be scalable, cost-effective, and highly available.

## Architecture
- **S3** hosts the `index.html` contact form
- **API Gateway** receives POST requests from the form
- **Lambda** function validates and stores the message
- **DynamoDB** stores submissions with timestamps and contact info
- **IAM** secures access between services

## Tools & Services
- AWS S3
- API Gateway
- AWS Lambda (Node.js)
- DynamoDB
- IAM

## Outcome
- Real-time data capture from website visitors
- Serverless infrastructure with zero maintenance overhead

##
