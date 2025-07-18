const malla = {
  "I Semestre": {
    "Alimentos I": ["Alimentos II"],
    "Histología": ["Fisiología de Sistemas"],
    "Anatomía": ["Fisiología de Sistemas"],
    "Química General": ["Química Orgánica y Bioquímica General"],
    "Matemáticas": ["Química Orgánica y Bioquímica General"],
    "Biología Celular y Molecular": [
      "Agentes Vivos de Enfermedad",
      "Fisiología General",
      "Química Orgánica y Bioquímica General"
    ]
  },
  "II Semestre": {
    "Química Orgánica y Bioquímica General": ["Bioquímica Nutricional"],
    "Fisiología General": ["Fisiología de Sistemas"],
    "Agentes Vivos de Enfermedad": ["Higiene en la Producción de Alimentos"],
    "Ciencias Sociales y Salud": [
      "Educación, Conducta y Salud",
      "Cultura y Seguridad Alimentaria"
    ],
    "Alimentos II": [
      "Cultura y Seguridad Alimentaria",
      "Tecnología de los Alimentos",
      "Técnicas Culinarias I",
      "Evaluación del Estado Nutricional"
    ],
    "Búsqueda de Sistematización de Información Científica Integrada con TIC": []
  }
  // Puedes añadir los siguientes años aquí...
};

function crearMalla() {
  const cont = document.querySelector('.malla');
  for (const sem in malla) {
    const div = document.createElement('div');
    div.className = 'semestre';
    div.innerHTML = `<h2>${sem}</h2>`;
    for (const curso in malla[sem]) {
      const btn = document.createElement('div');
      btn.className = 'curso';
      btn.textContent = curso;
      btn.onclick = () => mostrarInfo(curso, malla[sem][curso]);
      div.appendChild(btn);
    }
    cont.appendChild(div);
  }
}

function mostrarInfo(curso, abre) {
  const info = document.getElementById('info-curso');
  info.innerHTML = `<strong>${curso}</strong><br>
    Abre: ${abre.length ? abre.join(', ') : 'Ninguno'}.`;
}

window.onload = crearMalla;

