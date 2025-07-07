document.addEventListener("DOMContentLoaded", () => {
    const vendas = JSON.parse(localStorage.getItem("vendas")) || [];
    const tbody = document.getElementById("tabela-vendas");
    const totalArrecadado = document.getElementById("total-arrecadado");

    let total = 0;

    vendas.forEach((venda, index) => {
        const tr = document.createElement("tr");
    
        const valorTotal = venda.valor ; //Caso seja valor unitario é só colocar * venda.quantidade na frente
        total += valorTotal;
    
        tr.innerHTML = `
            <td>${venda.peca}</td>
            <td>${venda.quantidade}</td>
            <td>R$ ${valorTotal.toFixed(2)}</td>
            <td>${venda.pagamento}</td>
            <td>${venda.data}</td>
            <td><button class="excluir" data-index="${index}">Excluir</button></td>
        `;
    
        tbody.appendChild(tr);
    });    

    totalArrecadado.textContent = `Total Arrecadado: R$ ${total.toFixed(2)}`;

    document.querySelectorAll(".excluir").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            if (confirm("Deseja excluir esta venda?")) {
                vendas.splice(index, 1);
                localStorage.setItem("vendas", JSON.stringify(vendas));
                location.reload();
            }
        });
    });

    document.getElementById("apagar-tudo").addEventListener("click", () => {
        if (confirm("Tem certeza que deseja apagar todo o histórico de vendas?")) {
            localStorage.removeItem("vendas");
            location.reload(); 
        }
    });
    
    
});
