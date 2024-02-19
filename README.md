# HRnet : Refonte de l'Application RH

## À propos

HRnet est la version modernisée de l'application web interne de WealthHealth pour la gestion des dossiers des employés. Initialement construite avec jQuery, cette refonte basée sur React vise à résoudre les problèmes de performances et à améliorer l'expérience utilisateur en remplaçant les plugins jQuery obsolètes par des composants React efficaces et modulaires. Ce projet se concentre sur la conversion des éléments UI  tels que les fenêtres modales,les menus déroulant, la sélection des dates, tables de données assurant une application plus fluide, rapide et performante pour les tâches RH.

## Fonctionnalités

- **Interface Utilisateur Intuitive** : Conçue pour faciliter la navigation et l'utilisation au quotidien par les équipes RH.
- **Gestion de l'État avec React** : Utilisation de l'API Context de React pour une gestion centralisée et efficace de l'état de l'application.
- **Composant Modal React** : les plugins modal jQuery ont été converties pour offrir une interaction utilisateur plus fluide et réactive.
- **Architecture Modulaire et Évolutive** : Développement basé sur des composants réutilisables pour faciliter l'ajout de nouvelles fonctionnalités.

## Pour Commencer

### Prérequis

- Visual Studio Code pour l'éditeur de texte 
- Node.js (version 14.x ou supérieure recommandée).
- npm ou Yarn pour la gestion des packages.

### Installation

Clonage du dépôt et installation des dépendances :

```bash
git clone https://github.com/illeone/MillocoNicolas_14_20.08.2022.git 
cd hrnet
npm install

Démarrage de l'Application

Lancer l'application en mode développement :

npm start
Ouvrez http://localhost:3000 dans votre navigateur pour accéder à l'application.

```

### Utilisation

- Créez de nouvelles entrées d'employés via la page "Create Employee".
- Consultez et gérez les dossiers des employés existants dans la page "Current Employees".