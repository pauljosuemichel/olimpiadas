let g = [[".",".","<",">",".","A"],
        ["<",">","A","A","A","V"],
        [".",".","V","V","V","."]];

function gravitas(){
    for(let x=0; x<g.length; x++){ // filas
        for(let y=0; y<g.length; y++){ // columnas
            if(g[x][y] == "V" && g[x][y+1] == "."){
                g[x][y] = ".";
                g[x][y+1] = "V";
            }
        }
    }
}

console.table(g);