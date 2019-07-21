let name = process.argv[2]
let cow = String.raw`
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`;
let dash = "-"
console.log(` ${dash.repeat(name.length)}--
< ${name} >
 ${dash.repeat(name.length)}--${cow}`)
