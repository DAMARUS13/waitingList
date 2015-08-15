# Log

Créer une file d'attente

##Installation
###Bower

```
bower install https://github.com/DAMARUS13/waitingList/
```

###Manuel
Télécharger l'archive
```
https://github.com/DAMARUS13/waitingList/archive/master.zip
```

##Utilisation
Initialisation de la list
```
var wait = new waitingLoad(new Array('todo'), function(){
    //Callback
});
```
Signalement 
```
wait.loaded('todo'); //Le callback est appelé
```
