# Choose London - In Progress

This project is a multiplatform design web-oriented campaign focusing on captivate and attract talented people to fulfill available tech job positions in London, Ontario. Moreover, this campaign intends to bring awareness to technology companies and new entrepreneurs about the benefits of settling, building and running a business in this city.

The requirements of the first phase of this project are:  
* Researching data and content about London and planning how to use them to produce the campaign;  
* Creating the fundamentals of the campaign and presenting how it will be built in second phase;  
* Presenting research documents about technologies that will be used to achieve the project goal, and metrics to be used to evaluate results;  
* Producing a detailed responsive design of the website to be built in second phase;  
* Collecting assets and content material to  create a promotional video in second phase, showing how they it will look like by styleframes and storyboards;  
* Following best practices of accessibility and UX/UI to construct a compliant website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

**Git:**
To clone this project to a local repository, it is required using [Git](https://git-scm.com/). Follow instructions provided [here](https://git-scm.com/downloads) to install and configure Git.

**NPM:**    
To develop this project, it is required installing and running [NPM](https://www.npmjs.com/), and consequently [NodeJS](https://nodejs.org/en/). Follow instructions provided [here](https://nodejs.org/en/download/) to install and configure properly NodeJS and NPM in your machine.

**MySQL:**
Dynamic content is loaded from database to build the website and present projects information. Database used is simple MySQL, and it is possible to use any distribution or application that runs it (MariaDB, MAMP, WAMP, etc). There is a file into 'assets' folder that contains all tables and data exported from this database.

## Deployment

After project cloned and all prerequisites installed, it is necessary running the command below in the root directory to deploy properly all development dependencies of this project:

```
npm install
```

Grunt is implemented as a task runner for this project. Grunt tasks include: concatenation and js uglify; run sass; and autoprefixer, pixrem and cssnano through postcss. Grunt watch for changes in js and all scss files. In order to watch changes made in the files, run grunt inside the project folder by the command below:

```
grunt
```

Furthermore, it is necessary to import the database content to local application. It is possible to import it using PHPMyAdmin interface or via command line:

```
mysql -h localhost -u <user> -p <password> <database name> < db_choose-london.sql
```

## Authors

[**Octopx Digital**](https://github.com/octopx-digital) is:  
* [**Barbara Bombachini**](https://github.com/bbombachini)  
* [**Emre Filiz**](https://github.com/emrefiliz)  
* [**Eric Lee**](https://github.com/elee378)  
* [**Flavia Tozzini**](https://github.com/f-tozzini)  
* [**Mauricio Silveira**](https://github.com/maursilveira)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
