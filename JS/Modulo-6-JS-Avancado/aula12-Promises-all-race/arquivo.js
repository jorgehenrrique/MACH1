const files = []
for (let i = 1; i <= 100; i++) {
    files.push({ text: `Arquivo ${i}`, id: i, file: `arquivo_${i}.txt` });
}

files.forEach(x => {
    let op = document.createElement("option")
    op.value = x.file
    op.innerText = x.text
    document.querySelector("#arquivos").appendChild(op)
})