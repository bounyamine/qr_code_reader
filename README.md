# 📱 QR Code Reader

Une application simple et élégante qui permet aux utilisateurs de scanner des **QR codes** à partir d'une image. Avec une interface moderne et intuitive, cette application offre des fonctionnalités telles que l'affichage du contenu scanné et la copie rapide du texte dans le presse-papiers.

## 🎨 Aperçu

L'application **QR Code Reader** vous permet de télécharger une image contenant un QR code et de scanner son contenu instantanément. Vous pouvez ensuite copier le texte extrait en un seul clic.

![QR Code Reader Screenshot](https://your-screenshot-url.com)

## 🚀 Fonctionnalités

- **Téléchargement de QR Code** : Sélectionnez et téléchargez une image de QR code pour la scanner.
- **Scan instantané** : L'application lit et affiche automatiquement le contenu du QR code.
- **Copie rapide** : Copiez le texte extrait directement dans le presse-papiers en un clic.
- **Interface utilisateur fluide** : Une interface moderne et réactive, avec des animations élégantes.

## 🛠️ Technologies

- **React.js** : Bibliothèque JavaScript utilisée pour créer l'interface utilisateur.
- **CSS3** : Pour styliser et rendre l'application visuellement attrayante.
- **QRServer API** : Utilisée pour décoder le QR code et extraire le texte.

## 📦 Installation

1. **Cloner le projet :**

   ```bash
   git clone https://github.com/votre-utilisateur/qr-code-reader.git
   cd qr-code-reader
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer l'application :**

   ```bash
   npm start
   ```

4. **Accéder à l'application :**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour utiliser l'application.

## 📖 Utilisation

1. **Télécharger un QR Code** : Cliquez sur la zone de téléchargement pour sélectionner une image contenant un QR code.
2. **Scanner le QR Code** : Le contenu du QR code sera affiché dans l'interface.
3. **Copier le texte** : Cliquez sur le bouton **Copy Text** pour copier le contenu extrait dans le presse-papiers.
4. **Fermer** : Utilisez le bouton **Close** pour réinitialiser l'interface et télécharger un nouveau QR code.

## 🗂 Structure du projet

```
/public
  index.html              # Page HTML principale
/src
  /components             # Composants React
  App.js                  # Composant principal de l'application
  App.css                 # Styles principaux de l'application
  index.js                # Point d'entrée de l'application React
```

## 🎥 Démo

Regardez une démo en direct de l'application [ici](https://your-demo-url.com) !

## 🤝 Contributions

Les contributions sont les bienvenues ! Si vous avez des idées pour améliorer cette application ou ajouter de nouvelles fonctionnalités, suivez ces étapes :

1. **Fork le projet**.
2. **Créez une branche** (`git checkout -b feature/new-feature`).
3. **Committez vos changements** (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. **Poussez sur la branche** (`git push origin feature/new-feature`).
5. **Créez une Pull Request**.

## 📄 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.
