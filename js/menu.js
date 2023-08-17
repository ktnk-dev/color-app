function toggle_menu(){
    menu = document.getElementById('menu')
    if (menu.style.opacity == 1){
        menu.style.opacity = 0
        document.getElementById('menu_button').innerHTML = text('menu')
    } 
    else {
        menu.style.opacity = 1
        document.getElementById('menu_button').innerHTML = text('close_menu')
    }
}


function render(){
    data = load_cookies()
    if (data.latest == 'null'){latest = [0,255,127]}
    else {latest = data.latest.split('-')}

    langs_inner = ''
    console.log('--- Langs ---');
    for (let i = 0; i < Object.keys(langs).length; i++) {
        const lang_key = Object.keys(langs)[i];
        const lang_name = langs[lang_key].NAME
        console.log(lang_key, lang_name);
        langs_inner += `<button onclick="change_lang('${lang_key}')">${lang_name}</button>\n`
    }
    console.log('--- Render UI ---');
    inner = `
<header id="head">
    <button id="menu_button" onclick="toggle_menu()">${text('close_menu')}</button>
    <button id="menu_button" onclick="window.location.href='https://github.com/ktnk-dev/color-app'">GitHub</button>
</header>

<section id="menu" style="opacity: 1;">
    <div id="color_pick" class="pack">
        
        <h1>${text("title_color_generator")}</h1>
        <h3>${text("hue")}</h3>
        <input type="range" name="hue" id="pick_hue" min="0" max="255" value="${latest[0]}" oninput="update_color()">
        <h3>${text("saturatioun")}</h3>
        <input type="range" name="saturation" id="pick_satur" min="0" max="255" value="${latest[1]}" oninput="update_color()">
        <h3>${text("light")}</h3>
        <input type="range" name="light" id="pick_light" min="0" max="255" value="${latest[2]}" oninput="update_color()">
        
        <h1>${text("title_options")}</h1>
        <div class="btn_list">
            <button onclick="set_favourite()">${text("button_add_to_favourite")}</button>
            <button onclick="remove_favourite()">${text("button_remove_from_favourite")}</button>
            <button onclick="copy_embed()">${text("button_copy_embed_url")}</button>
        </div>

        <h1>${text("title_langs")}</h1>
        <div class="btn_list" id="langs_list">${langs_inner}</div>

    </div>

    <div id="colors" class="pack">
        <h1>${text("title_favourite_colors")}</h1>
        <div id="colors_list">
        </div>
    </div>
</section>    
`
    document.body.innerHTML = inner
    if (data.latest != 'null') {update_color()}
    console.log('--- Render favourite list ---');
    render_favourites()
}






function load_cookies(){
    if (document.cookie == ''){
        document.cookie = 'latest=null; expires=Mon, 1 Jan 2035 12:00:00 UTC;'
        document.cookie = 'fav=null; expires=Mon, 1 Jan 2035 12:00:00 UTC;'
        document.cookie = 'lang=en; expires=Mon, 1 Jan 2035 12:00:00 UTC;'
    } 
    cookies = document.cookie.split('; ')
    data = {}
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        data[cookie.split('=')[0]] = cookie.split('=')[1]
    }
    return data
}

function save_cookies(data){
    for (let i = 0; i < Object.keys(data).length; i++) {
        const key = Object.keys(data)[i];
        const value = data[key]
        document.cookie = `${key}=${value}; expires=Mon, 1 Jan 2035 12:00:00 UTC`
        
    }
}