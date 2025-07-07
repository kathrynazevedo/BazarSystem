document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const adicionarItemBtn = document.getElementById("adicionar-item");

    // Função para adicionar um item dinamicamente
    function adicionarItem() {
        const container = document.getElementById("itens-container");
        const novaLinha = document.createElement("div");
        novaLinha.className = "form-row";

        const select = document.createElement("select");
        select.name = "peca";

        const estoque = JSON.parse(localStorage.getItem("estoque")) || {};
        for (const categoria in estoque) {
            const option = document.createElement("option");
            option.value = categoria;
            option.textContent = categoria;
            select.appendChild(option);
        }

        const inputQtd = document.createElement("input");
        inputQtd.type = "number";
        inputQtd.name = "quantidade";
        inputQtd.placeholder = "Qtd";

        novaLinha.appendChild(select);
        novaLinha.appendChild(inputQtd);
        container.appendChild(novaLinha);
    }

    adicionarItemBtn.addEventListener("click", adicionarItem);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const itemRows = document.querySelectorAll("#itens-container .form-row");
        const valor = parseFloat(document.getElementById("valor").value);
        const pagamento = document.getElementById("pagamento").value;
        const descricao = document.getElementById("descricao").value;

        let estoque = JSON.parse(localStorage.getItem("estoque")) || {};
        const vendidos = [];

        for (const row of itemRows) {
            const peca = row.querySelector("select[name='peca']").value;
            const quantidade = parseInt(row.querySelector("input[name='quantidade']").value);

            if (!peca || isNaN(quantidade) || quantidade <= 0) {
                alert("Por favor, preencha todos os campos de cada item corretamente.");
                return;
            }

            if (!estoque[peca] || estoque[peca] < quantidade) {
                alert(`Estoque insuficiente para ${peca}. Quantidade disponível: ${estoque[peca] || 0}`);
                return;
            }

            vendidos.push({ peca, quantidade });
        }

        for (const item of vendidos) {
            estoque[item.peca] -= item.quantidade;
        }
        localStorage.setItem("estoque", JSON.stringify(estoque));

        const venda = {
            vendidos,
            valor,
            pagamento,
            descricao,
            data: new Date().toLocaleString("pt-BR")
        };        

        let vendas = JSON.parse(localStorage.getItem("vendas")) || [];
        vendas.push(venda);
        localStorage.setItem("vendas", JSON.stringify(vendas));

        alert("Venda registrada com sucesso!");

        form.reset();
        document.getElementById("itens-container").innerHTML = "";
        adicionarItem(); // adiciona item com categorias atualizadas
        atualizarEstoqueNaSidebar();
    });

    form.addEventListener("reset", () => {
        document.getElementById("itens-container").innerHTML = "";
        adicionarItem(); // adiciona item com categorias atualizadas
    });

    atualizarEstoqueNaSidebar();
});

// Atualiza a barra lateral com categorias + quantidade
function atualizarEstoqueNaSidebar() {
    const estoque = JSON.parse(localStorage.getItem("estoque")) || {};
    const categoriaDiv = document.querySelector(".categoria");

    if (!categoriaDiv) return;

    categoriaDiv.innerHTML = "<h3>Categoria:</h3>";

    for (const categoria in estoque) {
        const p = document.createElement("p");
        p.innerHTML = `
            <span style='display: flex; align-items: center; justify-content: space-between; gap: 10px;'>
                <span><i class='bx bx-package' style='margin-right: 8px;'></i>${categoria}</span>
                <span style='font-weight: bold; min-width: 24px; text-align: right;'>${estoque[categoria]}</span>
            </span>`;
        categoriaDiv.appendChild(p);
    }

    const total = Object.values(estoque).reduce((acc, val) => acc + val, 0);
    const totalP = document.querySelector(".sidebar > p");
    if (totalP) {
        totalP.textContent = total;
    }
}
