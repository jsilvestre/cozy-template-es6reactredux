# Description

Cozy Template is a template project to start quickly your own application. Just
fork it and code while focusing only on your features!

It uses ES6, React and Redux. The tooling is based on NPM, a few bash scripts, and Browserify. Oh, and it uses my favorite ESLint configuration.
Don't worry, all the dependencies you need will be installed locally.

# Run
To initialize your project, run the following commands:

    # Get the project.
    git clone git://github.com/jsilvestre/cozy-template-es6reactredux.git myproject
    cd myproject

    # Reset git history.
    rm -rf .git
    git init
    git add --all .
    git commit -m "Initial commit."

    # Install all required dependencies.
    npm install

When you want to dev on your project, all you need is:

    # Watch the source, and rebuild them on the fly. Start the server with nodemon (restart on change).
    npm run dev

If you want to build your application (it will package all the code into a single `build` folder):

    npm run build

# What is Cozy?

![Cozy Logo](https://raw.github.com/mycozycloud/cozy-setup/gh-pages/assets/images/happycloud.png)

[Cozy](http://cozy.io) is a platform that brings all your web services in the
same private space.  With it, your web apps and your devices can share data
easily, providing you
with a new experience. You can install Cozy on your own hardware where no one
profiles you. You install only the applications you want. You can build your
own one too.

## Community

You can reach the Cozy community via various channels:

* IRC #cozycloud on irc.freenode.net
* Post on our [Forum](https://forum.cozy.io/)
* Post issues on the [Github repos](https://github.com/cozy/)
* [Twitter](http://twitter.com/mycozycloud)
