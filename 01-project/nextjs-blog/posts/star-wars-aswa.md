---
title: 'Building Star Wars Crawler with Azure Static Web Apps'
date: '2022-05-02'
---

## Deploying the Application to Azure Static Web Apps

We have our application working locally now, nothing better than making it available to the world so that we can show everyone what we have developed.

In this case we are going to use **[Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/?WT.mc_id=javascript-63934-gllemos)**. 

But firstly, what is Azure Static Web Apps? Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a code repository. Belo you can see the whole workflow around the ASWA:

[![image-aswa-workflow.png](https://docs.microsoft.com/en-us/azure/static-web-apps/media/overview/azure-static-web-apps-overview.png)](https://postimg.cc/TpNm6gtm)

And we're going to deploy our application using directly in the Visual Studio Code using the extension: 

* **[Visual Studio Code Extension - Azure Static Web Apps](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps&WT.mc_id=javascript-63934-gllemos)**

Open up VS Code and let's get into the Azure Portal right there! Click on the Azure icon and sign in with your Azure account:

[![Screen-Shot-04-18-22-at-01-42-PM.png](https://i.postimg.cc/66f0XkXr/Screen-Shot-04-18-22-at-01-42-PM.png)](https://postimg.cc/Lhhfk0h5)

Go to the `Create Static Web App` with a `+` sign:

[![Screen-Shot-04-18-22-at-01-57-PM.png](https://i.postimg.cc/SRM9s11p/Screen-Shot-04-18-22-at-01-57-PM.png)](https://postimg.cc/ZvJnsHhf)

Now, follow these steps:

1. Include a app name. Ex.: intro-starwars-app
2. Select a region for hosting our app. 
3. Now, choose the build preset to configure default project structure. In this case we are not using frameworks. Just JavaScript, HTML and CSS. In this case choose: `custom`
4. Now we need to include the location of our application. For our application will be: `/public`
5. The final step is to include the location of our build output. In this case, remove `build` and leave blank

A box will open, click on the link: `Open Actions in GitHub`

[![Screen-Shot-04-18-22-at-04-44-PM.png](https://i.postimg.cc/28Hmgr7b/Screen-Shot-04-18-22-at-04-44-PM.png)](https://postimg.cc/3dDPvM6Y)

Once you click it, you will be redirected to the GitHub Actions repository page showing the entire build workflow (C.I and C.D).

[![Screen-Shot-04-18-22-at-04-52-PM.png](https://i.postimg.cc/zvZSJswT/Screen-Shot-04-18-22-at-04-52-PM.png)](https://postimg.cc/2bGBGXK5)

Now let's return to the Azure Static Web Apps Extension and right click on `Browser Site`

[![Screen-Shot-04-18-22-at-04-54-PM.png](https://i.postimg.cc/k49gqw6B/Screen-Shot-04-18-22-at-04-54-PM.png)](https://postimg.cc/p9GHBfBH)

And see the app in action!

[![star-wars-intro.gif](https://s7.gifyu.com/images/star-wars-intro.gif)](https://gifyu.com/image/SLgYG)

If you want, you can see the deployed application **[HERE - Star Wars Intro App](https://calm-cliff-0923da21e.1.azurestaticapps.net/)**

## Final Words

Today we have learned how to create a Star Wars Intro App using: HTML, CSS and JavaScript/Node.js. And finally we hosted our application using the Azure Static Web Apps service. 

Here I would like to let some good resources about Azure Static Web Apps & GitHub Actions:

* ✅ **[Azure Static Web Apps Official Documentation](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=javascript-63934-gllemos)**

* ✅ **[Microsoft Learn Free Course - Publish an Angular, React, Svelte, or Vue JavaScript app with Azure Static Web Apps](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api/?WT.mc_id=javascript-63934-gllemos)**

* ✅ **[Microsoft Learn - Crie e Publique um site estático com Gatsby](https://docs.microsoft.com/en-us/learn/modules/create-deploy-static-webapp-gatsby-app-service/?WT.mc_id=javascript-63934-gllemos)**

* ✅ **[Implementando Azure Static Web Apps no Hugo](https://docs.microsoft.com/azure/static-web-apps/publish-hugo/?WT.mc_id=javascript-63934-gllemos)**

And to stay on top of several other news, be sure to follow me on Twitter!

[![Twitter](https://code4coders.files.wordpress.com/2019/05/image-12.png)](https://twitter.com/glaucia_lemos86)

And subscribe on my **[Youtube Channel - Glaucia Lemos](https://bit.ly/youtube-canal-glaucialemos)** to see weekly new videos about Web Development, Node.js & JavaScript!

[![Screen-Shot-12-31-20-at-01-06-AM.png](https://i.postimg.cc/pr3TL4Pd/Screen-Shot-12-31-20-at-01-06-AM.png)](https://bit.ly/youtube-canal-glaucialemos)

See you! 😍
