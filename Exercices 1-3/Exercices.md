### Programme comparaison taille de chaînes de caractères
    chaine1 : string
    chaine2 : string

    début
        afficher "Entrez une première chaîne de caractères"
        saisir chaine1

        afficher "Entrez une seconde chaîne de caractères"
        saisir chaine2

        si taille(chaine) >= taille(chaine2)*2
            afficher chaine1 + "est une chaîne de caractères deux fois plus grande que" + chaine2
        sinon
            afficher chaine1 + "n'est pas une chaîne de caractères deux fois plus grande que" + chaine2
        fin si
    fin

------

### Programme calcul de la somme entre 1 et un entier saisi par l'utilisateur
    nombreInitial : entier
    nombre : entier
    somme : entier

    début
        nombreInitial = 1
        somme = 0

        tant que nombre < 1
            afficher "Entrez un entier (supérieur à 1)"
            saisir nombre
        fin tant que

        tantque nombreInitial <= nombre
            somme = somme + nombreInitial
            nombreInitial++
        fin tantque
    fin

------

### Programme afficher le plus grand élément du tableau, puis la moyenne des entiers du tableau
    nombres[0 .. 4] : entier
    nombre : entier
    moyenne : entier
    total : entier
    indiceNbLePlusGrand : entier
    i : entier

    début
        total = 0
        indiceNbLePlusGrand = 0
        i = 0

        tantque taille(nombres) <= 5
            afficher "Entrer un entier"
            saisir nombre 

            tantque nombre n'est pas un nombre
                afficher "Entrer un entier"
                saisir nombre
            fin tantque

            nombres[i] = nombre
            i++
        fin tantque

        pour i de 0 à 4
            si nombres[indiceNbLePlusGrand] < nombres[i]
                indiceNbLePlusGrand = i
            sinon
                indiceNbLePlusGrand = indiceNbLePlusGrand
            fin si

            total = total + nombres[i]
        fin pour

        moyenne = total/5

        afficher "L'indice du plus grand élément est" + str(indiceNbLePlusGrand)
        + "et la moyenne est" + str(moyenne)
    fin