/**
 * Procédure qui va remplir la section TEAM avec les membres de l'équipe
 */

function getMembers() {
    let section, article, img, div, h2, p, a;

    // Pointe sur la section TEAM
    section = document.getElementById('team');

    // Pour chaque membre du tableau CONTACTS
    for (let i = 0; i < contacts.length; i++) {
        // Crée la balise ARTICLE
        article = document.createElement('article');
        article.setAttribute('class', 'member boy');
        section.appendChild(article);
        // Crée la balise IMG
        img = document.createElement('img');
        img.setAttribute('src', 'img/face-boy.jpg');
        img.setAttribute('alt', 'fiche de ' + contacts[i]);
        article.appendChild(img);
        // Crée la balise DIV
        div = document.createElement('div')
        article.appendChild(div);
        // Crée la balise H2
        h2 = document.createElement('h2');
        h2.textContent = contacts[i];
        div.appendChild(h2);
        // Crée la balise P
        p = document.createElement('p');
        p.textContent = 'Compétences de : ' + contacts[i];
        div.appendChild(p)
        // Crée la balise A
        a = document.createElement('a');
        a.setAttribute('href', 'https://www.google.fr/search?q=' + contacts[i]);
        a.setAttribute('target', '_blank');
        a.textContent = 'En savoir plus sur ' + contacts[i];
        div.appendChild(a);
    }
}

// Appelle la fonction
getMembers();