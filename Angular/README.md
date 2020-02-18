## Angular 7 - MIC 2020

The following guide is ....

## Angular-CLI installation

Before we anything else, we should first install angualr-cli. To do so, you need to issue the following command.

```
npm install -g @angular/cli
```

## Create our first app

Once the previous command completed, let's go for the app creation.

```
ng new name-of-your-app
```

Note : It's going to ask you few questions, reply as you wish and let's get to the next level. Of course it's going to take a load of time to install all the necessary stuffs.

## Navigate to the app Folder

Now let's navigate to the app folder by issuing the following command.

```
cd your-app-folder
```

## Launch project

Open up the project in your preferred code editor (I do prefer and use Visual Studio Code, and you can launch it automatically by typing code . in the current folder), and then run this command to run a development server using the Angular CLI:

```
ng serve -o
```

Note :
_-o_ is for open, this flag will open your default browser at http://localhost:4200. Tip: You can type ng to get a list of all available commands, and ng [command] --help to discover all their flags.

# Continue with coding.

## Generate your first component

From there, you can generate your first component and do whatever you want with it.
Use the following command to generate your first component.

```
ng generate component name-of-your-component
```

A contracted and more convenient version of the previous command is:

```
 ng g c name-of-your-component
```
