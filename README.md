# Kaamelott fanclub

Aujourd'hui on va ajouter quelques fonctionnalité à un site web parlant de la série Kaamelott.

## Exercice 1 - Filtre

On présente pour la moment toutes les citations. On va ajouter un filtre par saison. Ainsi un utilisateur pourra décider de n'afficher que les citations de la saison 2 par exemple.

2 options s'offrent à nous : 

- Soit partir sur une route paramétrée avec l'année en paramètre. On pourrait ainsi mettre un lien par année pour simplifier la vie des utilisateurs
- Soit partir sur l'utilisation d'une query string. On pourrait ainsi mettre des liens mais on pourrait aussi prévoir un formulaire pour choisir l'année dans un `select`

C'est cette dernière option que nous allons choisir.

Ajoute donc un formulaire au dessus de la liste sur la page d'accueil. Place un `select` dans ce form. N'oublie pas de prévoir son attribut `name`. Place une `option` dans ce select par saison (il y a 6 saisons)

## Exercice 2 - Action du filtre

Bien joué pour le formulaire merci. Maintenant il faut traiter les requêtes envoyées depuis ce formulaire.

Fais en sorte de filtrer les citations affichées en fonction du choix fait.

## Exercice 3 - Formulaire en post

Tu vois le coin des fans ? Pour l'instant le formulaire qu'il contient ne fait rien de spécial.

Ce qu'on veut à terme c'est une zone un peu ludique, si on tape `Le code` dans le champ on va afficher un message pour les vrais fans.

Pour l'instant quand on valide une réponse, la saisie apparait dans l'url sous forme de query string. Vois pour masque ça en passant ce formulaire en _post_.

## Exercice 4 - Route post

Ajoute une route pour le traitement de la requête générée par le formulaire en _post_.

Il faut que cette route renvoie la vue `win` si la réponse donnée est `Le code`, sinon la vue `loose`

Comme on n'a encore géré aucune donnée passée en payload il faut commencer par mettre en place le middleware `urlencoded` pour avoir accès à `req.body` dans notre route

## Exercice 5 - Gestion d'erreur

Analyse le contrôleur qui permet la gestion du livre d'or.

Un message d'erreur doit alerter l'utilisateur quand on valide un message de moins de 3 caractères. Sauf que ça ne fonctionne pas. Tu peux corriger le problème ?

Une fois que c'est ok, peux-tu essayer d'utiliser un bloc try/catch pour éviter certaines répétitions ?

## Exercice 6 - Encore un formulaire

Ajoute un nouveau formulaire sur la page d'accueil en `post`. Place ce formulaire dans la section avec le titre `Enigme`. Le formulaire doit contenir la question : `Qu'est-ce qui est petit et marron ?` avec un champ texte pour saisir sa réponse.

La bonne réponse est `Un marron`. Fais en sorte que ton serveur renvoie la page de victoire en cas de bonne réponse ou la page d'échec en cas de mauvaise réponse. 

## Exercice 7 - Moteur de recherche

Un lien permet d'aller vers une page de recherche dans le footer.

Gère l'action du formulaire présent.

On veut afficher les répliques qui contiennent le texte saisi dans le champ (tu peux utiliser la méthode [`filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) et la méthode [`includes`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) pour la recherche)

Comme toujours, on y va par étapes en contrôlant chaque étape

1. On vérifie l'action du formulaire pour voir la requête généré lorsqu'il est validé
2. On vérifie si une route correspond à cette action
3. On travaille dans la méthode de contrôleur associée à la route
4. On trouve les données soumises via le formulaire dans l'objet `req`
5. On s'en sert pour filtrer nos répliques
6. On passe les données filtrées à la vue
7. On affiche les répliques dans la vue
8. On teste que tout fonctionne toujours avec et sans recherche

En bonus si tu as le temps, prévois d'afficher un message d'erreur quand :
  - le formulaire est validé avec un champ vide
  - le formulaire est validé avec uniquement des espaces


## Aller plus loin

N'hésite pas à tester d'autres choses selon tes idées.

