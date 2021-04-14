### Classe Circle
(importer la classe Point)

    point : Point
    radius : entier

    classe Circle(point, radius)
    début
        circleArea : entier

        fonction area()
        début
            retourner Math.round(PI*2*radius)
        fin

        fonction containsPoint(p)
        début
            diffX = point.getX() - p.getX()
            diffY = point.getY() - p.getY()
            longueur = sqrt((diffX * diffX) + (diffY*diffY))

            si longueur <= this.radius et longueur >= 0
                retourner true
            sinon
                retourner false
            fin si
        fin
    fin

---

#### Fonction pour transformer l'objet en string
    fonction infos()
    début
        afficher "Le cercle a un rayon de " + this.radius + "cm et
        les coordonnées du point sont x :" + point.getX() "et y :"
        + point.getY()
    fin

---

#### Test de classe
*Initialisation d'un Point puis d'un Circle*
    
    var point = new Point(1, 3)
    var circle = new Circle(point, 4)

*Calcul de l'aire : pi x 2 x 4 = 25cm (à l'arrondi)*

    circle.area()

*Le point avec pour coordonnées (1;3) est dans le cercle*
*Retourne true*

    circle.containsPoint(point)