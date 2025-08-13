# Lambda Seed

This is a library designed to kickstart any REST api using Typescript; It was designed to run on AWS Lambda, but it should work correctly on any other functions provider, and with little modifications it should work on other frameworks.

Use alongside lambda-pod, a production-ready IaC using Terraform, though not required.

## Still WIP

This code has been production-tested for 7 years but requires updates due to outdated design choices. Expect ongoing changes.

## How to use

### Requirements

- If using lambda-pod, VPC and Cognito Pool values are managed automatically.

- Without lambda-pod, rename serverless-nopod.yml to serverless.yml, delete the original, and manually configure VPC and Cognito Pool (or another authorization function).

- This version uses Postgresql. If you plan to use a different Db Engine you will have to adapt the base Repository class... but who would want to not use Postgresql? Right?

- This is not an npm-installable library; clone the repository files.

### Running

- Locally: `serverless offline`

- Deploy to AWS: `serverless deploy`

### Example

See the lambda-seed-sample project for a working REST API built in ~1 hour.

#### FAQ

- Why typescript?
  Given the recent increate of AI generated code, languages with a strong type system and stricter syntax like Typescript becomes highly benefical because They give the AI more context and clear rules to follow.

- Why this library at all?
  There are hundreds of tutorials out ther on how to buidl REST apis, and even worse, people building them with AI, but none of that is production ready, i have been using this small library for years and thought it might be usefull for some one.

- Will there be a SAM version?
  Yes.
