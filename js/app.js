const articles = [
    { id: 1, nom: "Laptop", prix: 125000, image: "img/laptop.jpg", description: "Ordinateur portable Dell Inspiron, série 13 5000; processeurs Intel Core de 8e génération, de 8 Go de mémoire RAM et d'un disque SSD pour le stockage." },
    { id: 2, nom: "Tablette", prix: 80000, image: "img/tablette.jpeg", description: "Ce moniteur est le FOLD! de la marque allemande Element One.Il s'agit d'un écran tactile motorisé conçu pour être intégré dans des tables de conférence ou de réunion.L'écran se déplie automatiquement vers l'avant, similaire à un bras robotisé, et disparaît complètement dans la table lorsqu'il n'est pas utilisé.Il est conçu pour supprimer les câbles visibles et offrir un espace de travail épuré." },
    { id: 3, nom: "Telephone", prix: 200000, image: "img/telephone.jpg", description: "Samsung Galaxy A56 5G – batterie puissante et connexion 5G fiable." },
    { id: 4, nom: "Clavier", prix: 35000, image: "img/clavier.jpg", description: "Clavier d'ordinateur" },
    { id: 5, nom: "Souris", prix: 14000, image: "img/souris.jpg", description: "Souris Logitech M185 sans fil, caractérisée par sa couleur noire avec des accents rouges et son nano-récepteur USB compact." },
];

function afficherArticles(){
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
                                    <button class="btn btn-success btn-sm w-100">Ajouter</button>
                                </div>
                            </div>
                        </div>
    `;
});
}
afficherArticles();
