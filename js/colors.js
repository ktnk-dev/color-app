function get_hsl(){ 
    h = document.getElementById('pick_hue').value
    s = document.getElementById('pick_satur').value
    l = document.getElementById('pick_light').value

    return [h, s, l]
}
function setvalues(hsl) {
    document.getElementById('pick_hue').value = hsl[0]
    document.getElementById('pick_satur').value = hsl[1]
    document.getElementById('pick_light').value = hsl[2]
}

function hslToRgb(h, s, l){
    h = h/255
    s = s/255
    l = l/255
    if(s == 0){
        r = g = b = l; 
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function update_color(hsl = null) {
    if (hsl == null){hsl = get_hsl()}
    else {setvalues(hsl)}
    cookies = {latest: `${hsl[0]}-${hsl[1]}-${hsl[2]}`}
    save_cookies(cookies)
    rgb = hslToRgb(hsl[0], hsl[1], hsl[2])
    // console.log(hsl, rgb);
    document.body.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}


function render_favourites(){
    data = load_cookies()
    if (data.fav != 'null'){
        inner = ``
        fav_list = data.fav.split(',')
        for (let i = 0; i < fav_list.length; i++) {
            const fav = fav_list[i];
            
            if (fav != '') {
                hsl = fav.split('-')
                rgb = hslToRgb(hsl[0], hsl[1], hsl[2])
                inner += `<div class="color" style="background-color: rgb(${rgb[0]},${rgb[1]},${rgb[2]});" onclick="update_color([${hsl[0]}, ${hsl[1]}, ${hsl[2]}])"></div>`
            } else {
                document.getElementById('colors_list').innerHTML = inner 
            }
        }
    }
}

function set_favourite() {
    hsl = get_hsl()
    cookies = load_cookies()
    if (cookies.fav == 'null'){cookies.fav = ''}
    if (cookies.fav.indexOf(`${hsl[0]}-${hsl[1]}-${hsl[2]}`) == -1){
        cookies.fav += `${hsl[0]}-${hsl[1]}-${hsl[2]},`
        save_cookies(cookies)
        console.log('New favourite:',hsl);
        render_favourites()
    } else {
        console.log('Color already added:',hsl);
    }    
}

function remove_favourite() {
    hsl = get_hsl()
    cookies = load_cookies()
    if (cookies.fav.indexOf(`${hsl[0]}-${hsl[1]}-${hsl[2]}`) != -1){
        cookies.fav = cookies.fav.replace(`${hsl[0]}-${hsl[1]}-${hsl[2]},`,'')
        save_cookies(cookies)
        console.log('Color removed:',hsl);
        render_favourites()
    } else {
        console.log('Color is not in fav. list:',hsl);
    }    
}


function copy_embed(){
    hsl = get_hsl()
    url = `${window.location.href}?embed=${hsl[0]}-${hsl[1]}-${hsl[2]}`
    console.log('Embed URL copied:',url);
    temp = document.createElement('textarea');
    temp.value = url
    document.body.appendChild(temp)
    try {temp.select()}
    catch {temp.setSelectionRange(0, 99999)}
    document.execCommand('copy')
    document.body.removeChild(temp)
}