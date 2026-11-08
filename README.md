# tejoclub.eu — Sitio web del Tejo-Club Dossenheim e.V.

Sitio estático (HTML + CSS + un archivo JS pequeño). No necesita servidor, ni base de datos,
ni instalar nada: se sube tal cual a GitHub y se publica con GitHub Pages.

Trilingüe **alemán / inglés / español** con selector DE·EN·ES en la cabecera.
Sin cookies, sin Google Fonts, sin analítica, sin videos incrustados → no hace falta banner de cookies.

---

## 1. Qué hay en esta carpeta

| Archivo / carpeta | Para qué sirve |
|---|---|
| `index.html` | Inicio (con el aviso de que estamos consiguiendo la cancha) |
| `sport.html` | El deporte: reglas, medidas, comparación con la petanca, superficie |
| `verein.html` | El club: VR 704921, por qué un club, generaciones, instructor AIT |
| `platz.html` | Nuestra cancha: estado de la búsqueda, lugares posibles, invierno, hoja de ruta |
| `gruender.html` | **Los siete fundadores, con espacio para las fotos** |
| `mitmachen.html` | Sumate: para quién, qué ofrecemos, cómo ayudar |
| `kontakt.html` | Contacto |
| `impressum.html` | Impressum + política de privacidad (obligatorio en Alemania) |
| `404.html` | Página de error |
| `assets/css/style.css` | Todos los estilos (colores del club) |
| `assets/js/site.js` | Selector de idioma y menú móvil |
| `assets/img/` | Logo, fotos, diagramas, iconos |
| `assets/img/founders/` | **Fotos de los fundadores (ahora marcadores de posición)** |
| `CNAME` | Contiene `tejoclub.eu` — le dice a GitHub cuál es el dominio |
| `.nojekyll` | Evita que GitHub procese los archivos con Jekyll |
| `robots.txt`, `sitemap.xml`, `site.webmanifest`, `favicon.ico` | Buscadores e iconos |

Colores del club usados en todo el sitio: **verde `#177B4D` · blanco · celeste `#4A90C2`**,
sobre azul marino `#0B3C5D` y dorado `#C6A458` del escudo.

---

## 2. Subirlo a GitHub (una sola vez)

1. Entrá a <https://github.com/new> y creá un repositorio. Nombre sugerido: **`tejoclub`**.
   Marcalo como **Public**. No agregues README ni .gitignore (ya están).
2. En la página del repositorio vacío, hacé clic en **uploading an existing file**.
3. Arrastrá **el contenido de esta carpeta** (no la carpeta en sí): `index.html`, las demás
   páginas, `assets`, `CNAME`, etc. `index.html` tiene que quedar en la **raíz** del repositorio.
   - Nota: el archivo `.nojekyll` empieza con un punto y algunos sistemas lo ocultan.
     Si no aparece al arrastrar, creálo después con **Add file → Create new file**,
     nombre `.nojekyll`, contenido vacío.
4. Escribí un mensaje (por ejemplo `sitio web inicial`) y hacé clic en **Commit changes**.
5. Andá a **Settings → Pages**:
   - *Source*: **Deploy from a branch**
   - *Branch*: **main** y carpeta **/ (root)** → **Save**
6. En el campo **Custom domain** escribí `tejoclub.eu` → **Save**.
   (El archivo `CNAME` ya lo dice, así que normalmente aparece solo.)

A los pocos minutos el sitio ya funciona en `https://TU-USUARIO.github.io/tejoclub/`.

---

## 3. Conectar el dominio tejoclub.eu

En el panel de tu registrador (donde compraste el dominio) buscá la zona **DNS** y cargá:

**Para `tejoclub.eu` (dominio raíz) — cuatro registros tipo A:**

| Tipo | Nombre / Host | Valor |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Opcional, para IPv6 — cuatro registros tipo AAAA:**

| Tipo | Nombre / Host | Valor |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**Para `www.tejoclub.eu` — un registro CNAME:**

| Tipo | Nombre / Host | Valor |
|---|---|---|
| CNAME | `www` | `TU-USUARIO.github.io.` |

Cambiá `TU-USUARIO` por tu nombre de usuario de GitHub (el punto final es correcto).

Después:

- Esperá a que el DNS se propague (de 10 minutos a unas horas).
- Volvé a **Settings → Pages** y, cuando el candado esté disponible, marcá **Enforce HTTPS**.
- Si GitHub avisa "Domain does not resolve", esperá un rato más y volvé a guardar el dominio.

---

## 4. Poner las fotos de los fundadores

Las siete fotos de ahora son marcadores con las iniciales. Para reemplazarlas:

1. Recortá cada foto en **cuadrado** (se muestra en círculo). Tamaño ideal: 800 × 800 px.
2. Guardala como **JPG** con **exactamente** el nombre que ya tiene el marcador,
   dentro de `assets/img/founders/`:

```
santiago-cerrizuela.jpg
andrea-dominguez.jpg
francisco-cortez.jpg
sisay-alemu.jpg
irene-lois-bermejo.jpg
enrico-frigoli.jpg
axel-carboni.jpg
```

3. En GitHub: entrá a la carpeta `assets/img/founders`, **Add file → Upload files**,
   soltá las fotos nuevas y confirmá. Al tener el mismo nombre, reemplazan a los marcadores
   y la página se actualiza sola. No hay que tocar el HTML.

> El nombre del archivo tiene que coincidir letra por letra, en minúsculas y con `.jpg`.
> Si preferís PNG, cambiá también la extensión en `gruender.html` (buscá `founders/`).

**Cargos y mini-biografías:** en `gruender.html`, cada persona es un bloque `<article class="founder">`.
Debajo del nombre hay una línea `<div class="role">…</div>` que dice "Miembro fundador" en los tres
idiomas. Podés cambiar ese texto o agregar una línea extra copiando el formato de Santiago,
que ya tiene `<div class="bio">`.

---

## 5. Editar textos

Cada texto traducido aparece **tres veces** seguidas, marcado con `lang="de"`, `lang="en"` y `lang="es"`:

```html
<span lang="de">Deutschlands erster Tejo-Verein</span>
<span lang="en">Germany&rsquo;s first tejo club</span>
<span lang="es">El primer club de tejo de Alemania</span>
```

Para cambiar una frase, editá las tres versiones (o solo la que te interese).
El idioma que se ve lo controla el atributo `data-lang` de `<html>`, que maneja el selector DE·EN·ES.
Si alguien tiene JavaScript desactivado, ve la versión en alemán.

Las eñes y los acentos están escritos como entidades HTML (`&ntilde;`, `&aacute;`, `&uuml;`…)
para que se vean bien en cualquier sistema. También podés escribirlos directamente: el archivo es UTF-8.

---

## 6. Regenerar el sitio desde el script (opcional)

Todo el sitio sale de un único script en Python, `build_site.py` (está fuera de esta carpeta):

```bash
python build_site.py
```

Vuelve a escribir todos los HTML dentro de `site/`. Conviene usarlo si querés cambiar algo
que se repite en todas las páginas (menú, pie de página, colores, un texto que aparece varias veces).
Si editás los HTML a mano, no vuelvas a correr el script: te pisa los cambios.

---

## 7. Revisar antes de publicar

- [ ] **Impressum**: verificá el juzgado de registro (está puesto *Amtsgericht Mannheim*),
      el domicilio y quién figura como representante. Es un dato legalmente relevante.
- [ ] ¿Querés que figure Holunderweg 6 como dirección pública? Si el club consigue otra
      dirección, cambiala en `impressum.html`, `kontakt.html` y en el pie de página de todas las páginas.
- [ ] **Correo**: ahora aparece `tejoclub.dossenheim@gmail.com`. Si en algún momento hay un correo del club
      (por ejemplo `info@tejoclub.eu`), buscá y reemplazá en todos los archivos.
- [ ] **Fotos**: confirmá que tenés permiso para publicar las fotos de juego y las de las personas
      (en Alemania rige el derecho a la propia imagen).
