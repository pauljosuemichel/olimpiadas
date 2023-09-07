let g = [[".",".","<",">",".","A"],
        ["<",">","A","A","A","V"],
        [".",".","V","V","V","."],
        [".",".",".",".",".","."]];

function gravitas(){
    for(let x=0; x<g[0].length; x++){ // filas
        for(let y=g.length-1; y>=0; y--){ // columnas
            if(g[y][x] == "V" && y+1 < g.length && g[y+1][x] == "."){
                g[y][x] = "A"; // bajo la flecha vertical de arriba
                g[y+1][x] = "V"; // bajo la flecha vertical de abajo
                g[y-1][x] = "."; // borro la flecha (A) de de donde estaba

                y=g.length-1 // y vuelve al valor inicial para verificar si quedaron flechas
            }
            if(g[y][x] == ">" && y+1 < g.length && g[y+1][x] == "."){
                g[y][x] = ".";
                g[y][x-1] = "."; // saco las flechas de donde estaban
                g[y+1][x] = ">";
                g[y+1][x-1] = "<"; // bajo las flechas

                y=g.length-1
            }
        }
    }
}
gravitas();
console.table(g);