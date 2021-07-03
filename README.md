# WIP test-color-bg
WIP - Permet de tester le critère 10.5 RGAA

Dans cette première approche :

- si color est défini sur un élement mais que background-color ne l'est pas l'élément est entouré en rouge
- si background-color est défini sur un élement mais que color ne l'est pas l'élément est entouré en vert

Note. Il y a une différence entre les valeurs de style dans l'explorateur de styles calculés et la valeur retournée par `getComputedStyle` (utilisée ici pour le calcul). Ex : le style calculé peut être non-défini mais une valeur par défaut peut être retournée par `getComputedStyle` - `getComputedStyle.color` peut retourner rgb(0,0,0), donc noir même si le style calculé semble non défini.

getComputedStyle retourne les styles appliqués à la page, useragent compris. S'il s'agit de n'utiliser que le style défini par l'utilisateur, il faudrait probablement utiliser la fonction `document.styleSheets`


# Générer la bookmarklet

Github ne permet pas de générer directement le lien à copier dans vos favoris.

Utilisez un générateur de bookmarklet pour générer le lien de favori. Utilisez par exemple : http://bookmarklets.org/maker/

Veuillez décocher :

* URL-encode
* jQuery

Copier/coller le code ci-dessous dans le générateur :
```javascript
var inlineScript = "https://raw.githack.com/jonasdd/test-color-bg/master/script.js";

var head = document.head
  , scriptLink = document.createElement('script')
  scriptLink.src = inlineScript
  head.appendChild(scriptLink)
```
Il ne vous reste ensuite qu'à glisser/déposer le lien généré dans vos favoris et à cliquer dessus pour l'activer.
