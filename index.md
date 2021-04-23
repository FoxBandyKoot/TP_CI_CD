## Welcome to our GitHub Page !

This repository concern a TP of an initiation to continous integration.
Contributors : **Grand Maxime** & **Lerenard Charly**

__Access to API:__ 
 - https://us-central1-tp-ci-cd.cloudfunctions.net/app

__Routes:__
 - hello-world
 
__Our documentation is on:__
foxbandykoot.github.io/tp_ci_cd/

__Technology used :__

 __- Front:__ 
  - JavaScript 5
  
 __- Back:__
  - JavaScript 5
  - MongoDB
  
  
__Continus integration:__
We choose to use GitHub and Docker for all of our integration because we want to centralize all of our tools into GitHub.
Indeed, most of repository are saved into GitHub, so we want to master this tool to improve our productivity.
Finally, we want to bring all our tools into one to speed up navigation.


__Tests:__

To make unit tests, we used SuperTest, Mocha, and Chaï libraries.

[Quality tests are on SonarCloud because it is the most used free and open source tool to do it.](https://sonarcloud.io/dashboard?id=FoxBandyKoot_TP_CI_CD)
[Security tests are on SonarCloud because it is the most used free and open source tool to do it.](https://sonarcloud.io/dashboard?id=FoxBandyKoot_TP_CI_CD)


__We check on 3 differents deployment ways possible:__

Heroku, but limits are already known.
Netifly, but was only for static websites.
We choose to deploy on Firebase because it can handles more than static websites and we thinked it was free.


__Difficulties encountered:__
 - New to yaml format, github actions documentation really huge => hard to know where to start.
 - Deploy : since august 2019, firebase is not free anymore for deploy.


__The paradigms and the state of the art of our devops pipeline used are:__
The process:
 - Create a new feature branch from develop
 - When work on new feature branch is done : push
 - Pull rebase from develop
 - Merge local develop on new feature branch
 - Check if everything OK and Definition of done (DoD)
 - Push again 
 - Create MR
 - Others developers check if everything is ok :
   - others developers are OK ? -> Developer who made the feature merge
   - others developers are NOT OK ? -> Rework on new feature branch, push, check DoD, update MR until others developers are OK to merge


Workflows:
 - On develop - build.yml: SonarCloud for quality code (code smell), security code
 - On develop - test.yml : Units test (functionnality)
 - On develop - publish-develop.yml : Build and publy docker develop image on github packages tab
 - On develop - analyze.yml : Scan dependance packages (security container)
 - On main - publish-main.yml : Build docker main image on github packages tab **(production line)**

Notifications: On discord

Deployment: 
 - 2 steps
   - staging line : use `firebase deploy` on branch develop
   - production line : use `firebase deploy` on branch main
 These 2 branchs must have two differents URLs.
