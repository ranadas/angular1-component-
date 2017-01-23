1. create a project folder <project-name>
2. add .gitignore & .bowerrc (bring from existing codebase)
3. npm init -- add barebone package.json
4. git init, git add *, git commit - first commit
5. add bower as npm dependency. [npm install bower --save]
6. add "bower install" as postinstall script in package.json
7. bower init, bower add angular dependency
8. add a plain index.html ( to preferavly to a folder called "client")
9. add a static web server, e.g. live-server through npm as dev dependency
10. add script for angularjs to html, so that angular is avaiable
11. create a new js file and create angular module. use the modulename in ng-app in html
12.Add angular-ui-router dependency
       inject  ui.router to configure routes.
       Use $stateProvider to view partials
13.    Added navition between pages, button clicks or a tags can be mapped to a state or url.


14. to bootstrap & open the application, we could just run live-server.
15. Live server

to run functional tests:
1. window1 : webdriver-manager start
2. window2 : gulp ( to run the gulp web server)
3. Finally protractor  conf.js to run e2e tests

or
run gulp -test and then run  protractor  conf.js