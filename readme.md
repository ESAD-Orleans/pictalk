# pictalk

pictalk est un projet mené dans l’ARC édition nouvelles formes, à l’[ESAD Orléans](http://esad-orléans.fr). 

## Installation

#### prérequis

pour installer une version locale, afin de tester et de modifier,
il faudra installer (si ce n'est pas déjà fait), **dans cet ordre** :

- [git](http://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-Installation-de-Git) pour versionner le projet depuis github
- [nodejs](http://nodejs.org/) pour utiliser `grunt`
- [grunt](http://gruntjs.com/) pour automatiser les tâches
- [bower](http://bower.io/) pour installer des modules javascript

#### installation du projet en local

sélectionner un dossier local est cloner le repository github

	cd /your/local/path
	git clone https://github.com/ESAD-Orleans/pictalk.git

#### installation des packages

installation des modules nodejs

	cd /your/local/path
	npm install
	
puis — toujours dans le même dossier — on initialise les packages `bower` via `grunt`

	grunt init:dev

et voilà ça devrait être bon.


## À propos

#### Auteures

Hélène Bigot
Chloé Maurand

#### Développement

ESAD Orléans, [Arthur Violy](http://twitter.com/_panpan)