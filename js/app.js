const articles = [
    { id: 1, nom: "Laptop", prix: 125000, image: "img/laptop.jpg", description: "Ordinateur portable Dell Inspiron, série 13 5000; processeurs Intel Core de 8e génération, de 8 Go de mémoire RAM et d'un disque SSD pour le stockage." },
    { id: 2, nom: "Tablette", prix: 80000, image: "img/tablette.jpeg", description: "Ce moniteur est le FOLD! de la marque allemande Element One.Il s'agit d'un écran tactile motorisé conçu pour être intégré dans des tables de conférence ou de réunion.L'écran se déplie automatiquement vers l'avant, similaire à un bras robotisé, et disparaît complètement dans la table lorsqu'il n'est pas utilisé.Il est conçu pour supprimer les câbles visibles et offrir un espace de travail épuré." },
    { id: 3, nom: "Telephone", prix: 200000, image: "img/telephone.jpg", description: "Samsung Galaxy A56 5G – batterie puissante et connexion 5G fiable." },
    { id: 4, nom: "Clavier", prix: 35000, image: "img/clavier.jpg", description: "Clavier d'ordinateur" },
    { id: 5, nom: "Souris", prix: 14000, image: "img/souris.jpg", description: "Souris Logitech M185 sans fil, caractérisée par sa couleur noire avec des accents rouges et son nano-récepteur USB compact." },
];
// Tableau vide qui contiendra les articles ajoutes au panier
let panier = [];

function afficherArticles() {
    articles.forEach((article) => {
        document.getElementById("liste-articles").innerHTML += `
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h4>Articles</h4>
                                        <p>${article.nom}</p>
                                    </div>
                                    <div class="col-4 text-end">
                                        <h4>Prix</h4>
                                        <p>${article.prix} FCFA</p>
                                    </div>
                                    <div col-12 text-center>
                                        <p class="card-text">${article.description}</p>
                                    </div>
                                </div>
                                <div col-12 my-2>
                                    <img src="${article.image}" alt="Laptop" class="img-fluid rounded">
                                </div>
                                <div col-12>
                                    <button class="btn btn-success btn-sm w-100" onclick="ajouterAuPanier(${article.id})">Ajouter</button>
                                </div>
                            </div>
                        </div>
    `;
    });
}
afficherArticles();

function ajouterAuPanier(id) {
    // On cherche si l'article existe deja dans le panier
    // find() cherche dans le tableau panier si un article avec cet id existe deja
    // Si trouve -> articleExistant contient l'objet, sinon -> undefined
    let articleExitant = panier.find(p => p.id === id);
    if (articleExitant) {
        // Si oui -> L'article est deja dans le panier, on augmente judte sa quantite
        articleExitant.quantite++;
    } else {
        // L'article n'est pas encore dans le panier
        // On le cherche d'abord dans le tableau articles avec find()
        let article = articles.find(a => a.id === id);
        // ...article copie toutes les proprietes (nom, prix, image...)
        // et on ajoute quantite:1 car c'est le premier ajout
        panier.push({ ...article, quantite: 1 });
    }
    //On reaffiche le panier apres chaque modification
    afficherPanier();
}
function afficherPanier() {
    let panierId = document.getElementById("panier-items");
    // On vide d'abord le panier affiche pour eviter les doublons
    panierId.innerHTML = "";

    // On parcourt chaque article du panier
    panier.forEach((item) => {
        panierId.innerHTML += `
            <div class="row align-items-center mb-2">
                <div class="col-6">
                    <p>${item.nom}</p>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-end gap-2">
                    <!-- On passe l'id au bouton pour savoir quel article modifier -->
                    <button class="btn btn-sm btn-outline-secondary" onclick="diminuer(${item.id})">-</button>
                    <span>${item.quantite}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="augmenter(${item.id})">+</button>
                </div>
            </div>        
        `;

        // reduce() parcourt le panier et additionne prix * quantite de chaque article
        // acc = accumulateur (le total en cours), commence a 0
        // Tour 1 -> acc=0 + (125000*1) = 125000
        // Tour 2 -> acc=125000 + (14000*2) = 153000
        let total = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);

        // On affiche le total calcule
        document.getElementById("total-prix").innerHTML = total + " FCFA"
    });
}
function augmenter(id) {
    // On trouve l'article dans le panier par son id
    let item = panier.find(p => p.id === id);
    // On augmente sa quantite
    item.quantite++;
    // On reaffiche le panier mis a jour
    afficherPanier();
}

function diminuer(id) {
    let item = panier.find(p => p.id === id);
    if (item.quantite > 1) {
        // Si quantite > 1 on diminue juste
        item.quantite--;
    } else {
        // Si quantite = 1 et on diminue -> on supprime l'article du panier
        // filter() garde seulement les articles dont l'id est DIFFERENT
        panier = panier.filter(p => p.id !== id);
    }
    // On reaffiche le panier mis a jour
    afficherPanier();
}

// find()   → cherche UN élément selon une condition
// push()   → ajoute un élément à la fin du tableau
// filter() → garde les éléments qui respectent la condition
// reduce() → réduit un tableau à une seule valeur (ex: total)