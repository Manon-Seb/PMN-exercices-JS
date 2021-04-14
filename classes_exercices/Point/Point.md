### Classe Point
    x : entier
    y : entier

    classe Point(x, y)
    début
        fonction getX()
        début
            retourner x
        fin

        fonction setX(x)
        début
            this.x = x
        fin

        fonction getY()
        début
            retourner y
        fin

        fonction setY(y)
        début
            this.y = y
        fin
    fin

---

#### Fonction pour transformer l'objet en string
    fonction infos()
    début
        afficher "Les coordonnées du point sont x :" + this.getX() 
        + "et y :" + this.getY()
    fin

---

#### Test de la classe
*Création d'un nouveau Point*

    var point = new Point(1, 2)

*Retourne 1*

    point.getX()

*x prend la valeur 3*

    point.setX(3)