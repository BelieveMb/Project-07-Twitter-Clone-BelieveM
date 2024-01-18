import React, { useState } from 'react';
import fs from 'fs'; // Pour Node.js, utilisé pour la manipulation de fichiers

function EditorTweet() {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');

  const handleSoumission = (event) => {
    event.preventDefault();

    // Créer un nouvel objet SON avec les informations saisies
    const nouvelObjet = {
      nom: nom,
      age: age
    };

    // Lire le fichier JSON existant
    fs.readFile('../../initial-data.json', 'utf8', (err, data) => {
      if (err) throw err;

      // Convertir le contenu du fichier en objet JavaScript
      const contenuJSON = JSON.parse(data);

      // Ajouter le nouvel objet à la liste existante
      contenuJSON.push(nouvelObjet);

      // Convertir le contenu mis à jour en JSON
      const nouveauContenuJSON = JSON.stringify(contenuJSON, null, 2);

      // Écrire le contenu mis à jour dans le fichier JSON
      fs.writeFile('../../initial-data.json', nouveauContenuJSON, 'utf8', (err) => {
        if (err) throw err;
        console.log('Les  ont été ajoutées au fichier JSON avec succès.');
      });
    });
  };

  return (
    <form onSubmit={handleSoumission}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      </label>
      <label>
        Âge :
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button type="submit">Ajouter au fichier JSON</button>
    </form>
  );
}

export default EditorTweet;
