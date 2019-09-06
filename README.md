# GitHub Actions demo

This repo demonstrates a workflow for a Docker container-based Node.js web application.
The [workflow](https://github.com/bbq-beets/demo/blob/master/.github/workflows/build-and-deploy.yml):

* Builds a Docker container image and pushes it to GitHub Package Registry
* Deploys the container to Amazon Elastic Container Service ([here](http://ec2co-ecsel-dvl6nmfzlf2j-673816009.us-east-1.elb.amazonaws.com/)).
* Deploys the container to Azure Web App for Containers ([here](https://actionsdemo.azurewebsites.net/)).
* Deploys the container to Google Kubernetes Engine ([here](http://35.224.70.167/)).
   
  
