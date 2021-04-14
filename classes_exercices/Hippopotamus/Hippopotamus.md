### Classe Hippopotamus
    name : string
    weight : entier (en grammes)
    tusksSize : entier (en cm)

    classe Hippopotamus(name, weight, tusksSize)
    début
        fonction swim()
        début
            this.weight = this.weight - 300
        fin

        fonction eat()
        début
            // 1kg = 1000g
            this.weight = this.weight + 1000
        fin

        fonction fight(Hippopotamus)
        début
            si this.tusksSize > Hippopotamus.tusksSize
                afficher this.name + "est le gagnant"
            sinon
                afficher Hippopotamus.name + "est le gagnant"
            fin si
        fin
    fin

---

#### Fonction permettant de transformer l'objet en string
    fonction infos()
    début
        afficher "L'hippopotame s'appelle" + name + ", pèse" + 
        weight + "g et a des défenses de" + tusksSize + "cm de long."
    fin

---

#### Instanciation d'un hippopotame
    hippopotame = new Hippopotamus("Bernard", 1600000, 40)

#### Simuler un combat
*Création d'un second hippopotame*
    
    hippopotame2 = new Hippopotamus("Michel", 1800000, 30)

*Bernard gagne le combat car ses défenses sont plus grandes*

    hippopotame.fight(hippopotame2)

#### Cycle de vie de l'hippopotame
    fonction cyleDeVie()
    début
        heures : entier
        jours : entier

        // 21 = 3*7 jours
        pour jours de 0 à 21
            pour heures de 0 à 15
                pour i de 0 à 1
                    eat()
                fin pour

                pour i de 0 à 2
                    swim()
                fin pour
            fin pour

            this.infos() 
        fin pour
    fin
