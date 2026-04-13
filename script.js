document.addEventListener('DOMContentLoaded', () => {
    const projetos = [
        {
            titulo: "Educação Tecnológica",
            descricao: "Desenvolvimento de ferramentas interativas para o ensino de Matemática.",
            link: "#" 
        },
        {
            titulo: "Sistemas Web TSI",
            descricao: "Criação de interfaces responsivas e aplicações modernas focadas em performance.",
            link: "#"
        },
        {
            titulo: "Inovação Pedagógica",
            descricao: "Soluções digitais aplicadas à educação para otimização de práticas docentes.",
            link: "#"
        }
    ];

    const container = document.getElementById('grid-projetos');

    projetos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div>
                <h3>${p.titulo}</h3>
                <p>${p.descricao}</p>
            </div>
            <a href="${p.link}" class="btn-acao" target="_blank">Ver Detalhes</a>
        `;
        container.appendChild(card);
    });
});