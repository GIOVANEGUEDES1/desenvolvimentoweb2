/**
 * FCMSCSP - ADS - Turma 1A
 * Desenvolvimento Web - AV2
 * Motor de Roteamento Programático Interno para Single Page Application (SPA)
 */

(() => {
    'use strict';

    // Dispara a escuta assim que o documento HTML carregar a árvore DOM
    document.addEventListener('DOMContentLoaded', () => {
        initSPARouter();
    });

    /**
     * Mapeia os gatilhos interativos e associa as escutas de clique
     */
    function initSPARouter() {
        const navButtons = document.querySelectorAll('.js-nav, .btn-back');
        
        navButtons.forEach(button => {
            button.addEventListener('click', switchView);
        });
        
        console.log(`[Newspaper SPA] Motor ativado. ${navButtons.length} links e botões mapeados com sucesso.`);
    }

    /**
     * Altera a visibilidade das seções manipulando a classe de estado 'is-active'
     * @param {Event} event - Objeto contendo os dados do clique disparado
     */
    function switchView(event) {
        const clickTarget = event.currentTarget;
        const viewSelector = clickTarget.dataset.target; // Captura o valor ex: "#view-marco"

        if (!viewSelector) return;

        // Tenta localizar o ID correspondente dentro do documento
        const nextView = document.querySelector(viewSelector);

        if (nextView) {
            // Remove a classe de exibição de todas as telas existentes
            document.querySelectorAll('.spa-view').forEach(view => {
                view.classList.remove('is-active');
            });

            // Ativa o container correspondente injetando a classe operacional
            nextView.classList.add('is-active');
            
            // Conduz a rolagem da página para o topo de forma suave (Melhoria de UX)
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`[Newspaper SPA] Navegado para a seção: ${viewSelector}`);
        }
    }
})();