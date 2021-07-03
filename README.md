# WIP test-color-bg
WIP - Permet de tester le critère 10.5 RGAA

# Générer la bookmarklet

Github ne permet pas de générer directement le lien à copier dans vos favoris.

Utilisez un générateur de bookmarklet pour générer le lien de favori. Utilisez par exemple : http://bookmarklets.org/maker/

Veuillez décocher :

* URL-encode
* jQuery

Copier/coller le code ci-dessous dans le générateur
```javascript
var inlineScript = "https://raw.githack.com/jonasdd/test-color-bg/master/script.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```
Il ne vous reste ensuite qu'à glisser/déposer le lien généré dans vos favoris.
