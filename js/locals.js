langs = {
    en: {
        NAME: 'English',

        title_color_generator: 'Color generator',
        title_favourite_colors: 'Favourite colors',
        title_options: 'Options',
        title_langs: 'Languages',

        hue: 'Color',
        saturatioun: 'Saturation',
        light: 'Light',

        button_add_to_favourite: 'Add to favourite',
        button_remove_from_favourite: 'Remove from favourite',
        button_copy_embed_url: 'Copy embed URL',

        menu: 'Menu',
        close_menu: 'Close menu'
    },
    ru: {
        NAME: 'Русский',

        title_color_generator: 'Сгенерировать цвет',
        title_favourite_colors: 'Любимые цвета',
        title_options: 'Опции',
        title_langs: 'Языки',

        hue: 'Цвет',
        saturatioun: 'Насыщенность',
        light: 'Яркость',

        button_add_to_favourite: 'Добавить в избранные',
        button_remove_from_favourite: 'Удалить из избранных',
        button_copy_embed_url: 'Скопировать embed-ссылку',

        menu: 'Меню',
        close_menu: 'Закрыть меню'
    }, 
    cz: { // by realdivided
        NAME: 'Česky',
    
        title_color_generator: 'Generátor barev',
        title_favourite_colors: 'Generátor barev',
        title_options: 'Možnosti',
        title_langs: 'Jazyky',
    
        hue: 'HUE',
        saturatioun: 'Nasycení',
        light: 'Světlo',
    
        button_add_to_favourite: 'Přidat k oblíbeným',
        button_remove_from_favourite: 'Odebrat z oblíbených položek',
        button_copy_embed_url: 'Kopírovat embed URL',
    
        menu: 'Menu',
        close_menu: 'Zavřít nabídku'
    },
    lv: { // by realdivided
        NAME: 'Latviešu',
    
        title_color_generator: 'Krāsu ģenerators',
        title_favourite_colors: 'Mīļākās krāsas',
        title_options: 'Opcijas',
        title_langs: 'Valodas',
    
        hue: 'HUE',
        saturatioun: 'Piesātinājums',
        light: 'Gaisma',
    
        button_add_to_favourite: 'Pievienot iecienītākajiem',
        button_remove_from_favourite: 'Noņemt no iecienītākajiem',
        button_copy_embed_url: 'Kopēt embed URL',
    
        menu: 'Menu',
        close_menu: 'Aizvērt izvēlni'
    },
    esp: {
        NAME: 'Español',
    
        title_color_generator: 'Generador de color',
        title_favourite_colors: 'Colores favoritos',
        title_options: 'Opciones',
        title_langs: 'Idiomas',
    
        hue: 'Color',
        saturatioun: 'Saturación',
        light: 'Luz',
    
        button_add_to_favourite: 'Añadir a favoritos',
        button_remove_from_favourite: 'Quitar de favoritos',
        button_copy_embed_url: 'Copiar URL para insertar',
    
        menu: 'Menú',
        close_menu: 'Cerrar menú'
    },
    ua: {
        NAME: 'Україньска',
    
        title_color_generator: 'Генератор кольору',
        title_favourite_colors: 'Улюблені кольори',
        title_options: 'Опція',
        title_langs: 'Мови',
    
        hue: 'Колір',
        saturatioun: 'Насичення',
        light: 'Світ',
    
        button_add_to_favourite: 'Додати в обране',
        button_remove_from_favourite: 'Видалити з обраного',
        button_copy_embed_url: 'Скопіюйте URL-адресу для ембеда',
    
        menu: 'Меню',
        close_menu: 'Закрити меню'
    }
}


function text(id){
    current_lang = load_cookies().lang
    return langs[current_lang][id]
}

function change_lang(lang_code){
    cookies = load_cookies()
    cookies.lang = lang_code
    save_cookies(cookies)
    render()
}


