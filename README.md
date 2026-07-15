# Portfolio

Structure de projet avec système SCSS

## Installation

```bash
npm install
```

## Compilation SCSS

Pour compiler les fichiers SCSS en CSS :

```bash
npm run sass
```

Pour surveiller les changements automatiquement :

```bash
npm run sass:watch
```

ou

```bash
npm run dev
```

## Structure

```
├── index.html
├── package.json
├── .gitignore
├── README.md
└── assets/
    ├── css/        (fichiers CSS compilés)
    ├── scss/       (fichiers sources SCSS)
    ├── js/
    └── img/
```

## Utilisation

Le fichier `assets/scss/style.scss` contient tous les styles SCSS. Une fois compilé, le fichier CSS correspondant sera généré dans `assets/css/style.css` et lié dans l'HTML.
