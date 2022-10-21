function reset_game() {
    n = 60, m = 40, x = 50, y = 20, xd = -1, yd = 0, x2 = 9, y2 = 20, xd2 = 1, yd2 = 0
    table = Array(n).fill().map(() => Array(n).fill())
    to = document.getElementById('t'), to.innerHTML = `
<table>${Array(m).fill(`
    <tr>
    ${Array(n).fill(`<td/>`).join('')}
    </tr>`).join('')}
</table>`
    to = to.children[0].children[0], table[y][x] = 1
    to.children[y].children[x].style.backgroundColor = "red"
    to.children[y2].children[x2].style.backgroundColor = "purple"
}

addEventListener("keydown", e => { switch (e.key) {
    case "ArrowUp"    : [xd, yd] = [ 0,-1]; break
    case "ArrowDown"  : [xd, yd] = [ 0, 1]; break
    case "ArrowLeft"  : [xd, yd] = [-1, 0]; break
    case "ArrowRight" : [xd, yd] = [ 1, 0]; break
    case "w"    : [xd2, yd2] = [ 0,-1]; break
    case "s"  : [xd2, yd2] = [ 0, 1]; break
    case "a"  : [xd2, yd2] = [-1, 0]; break
    case "d" : [xd2, yd2] = [ 1, 0]; break
}})

reset_game();

points = 0;
points2 = 0;

iv = setInterval(() => {
    x += xd, y += yd
    if (x >= n || y >= m || x < 0 || y < 0 || table[y][x] == 1)
    {   
        points += 1
        document.getElementById("p1").innerHTML = points2;
        if (points == 5)
        {
            clearInterval(iv)
            alert("Buktad Green :D")
            window.open("https://www.youtube.com/watch?v=GHrDjZIuGsc")
        }
        reset_game();
    }
    else
        table[y][x] = 1,
        to.children[y].children[x].style.backgroundColor = "red"

    x2 += xd2, y2 += yd2
    if (x2 >= n || y2 >= m || x2 < 0 || y2 < 0 || table[y2][x2] == 1)
    {
        points2 += 1
        document.getElementById("p2").innerHTML = points;
        if (points2 == 5)
        {
            clearInterval(iv)
            alert("Szivas Lila :D")
            window.open("https://www.youtube.com/watch?v=8N1eX3gYfVE")
        }
        reset_game();
        
    }
    else
        table[y2][x2] = 1,
        to.children[y2].children[x2].style.backgroundColor = "purple"
}, 100)