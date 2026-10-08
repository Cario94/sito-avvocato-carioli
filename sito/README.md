# Sito dell'Avv. Cristina Carioli

Sito statico (HTML, CSS, JavaScript), senza cookie e senza servizi esterni. Non richiede installazioni né database.

## Contenuto della cartella

| Percorso | Cosa contiene |
|---|---|
| `index.html` | Home page |
| `aree-di-pratica/`, `diritto-penale/`, `penale-minorile/`, `diritto-di-famiglia/` | Pagine delle materie |
| `diritto-penale/<tema>/`, `diritto-di-famiglia/<tema>/`, `patrocinio-a-spese-dello-stato/` | Pagine di dettaglio per le ricerche locali (ebbrezza, lesioni stradali, stalking, diffamazione, truffe online, violenza sessuale, separazione, divorzio, affidamento e mantenimento, gratuito patrocinio) |
| `chi-sono/`, `contatti/` | Presentazione e contatti |
| `privacy/`, `cookie/` | Informativa privacy e cookie policy |
| `la-mia-esperienza/`, `aree-di-prat/`, `practice-areas/`, `contact/` | Reindirizzamenti dalle vecchie pagine del sito WordPress |
| `css/style.css`, `js/main.js`, `fonts/`, `img/`, `favicon.svg` | Stile, script, caratteri tipografici, logo, foto, immagine per i social |
| `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html` | File per GitHub Pages e per i motori di ricerca |

## 1. Cose da completare prima di pubblicare

Tutto ciò che va confermato è evidenziato in giallo nel sito. Per trovarlo, dalla cartella del sito:

```bash
grep -rn "da-confermare" --include=*.html .
```

Da sistemare:

- **Costo della prima consulenza** (FAQ in home).
- **Giorni di ricevimento**: nel sito è indicato solo l'orario 16:00–18:00 (pagina Contatti, per telefono e ricevimento).
- **Tempi di conservazione** delle richieste di contatto (Privacy, sezione 5).
- **Elenco materie di diritto di famiglia** (conferma dell'avvocato).
- **Pagine di dettaglio (SEO)**: contenuti di carattere generale, da far rivedere e approvare dall'avvocato (norme, termini, soglie) prima della pubblicazione. Controllare anche la frase sul Foro di Ancona.
- **Informativa privacy e cookie policy**: sono bozze. Vanno riviste dall'avvocato prima della pubblicazione.

Se il dominio non è `cristinacarioliavvocato.it`, sostituirlo ovunque (indirizzi canonici, sitemap, file `CNAME`). Da Terminale, nella cartella del sito:

```bash
# Linux
grep -rl "cristinacarioliavvocato.it" . | xargs sed -i 's/cristinacarioliavvocato\.it/TUODOMINIO.it/g'
# macOS: aggiungere '' dopo -i
grep -rl "cristinacarioliavvocato.it" . | xargs sed -i '' 's/cristinacarioliavvocato\.it/TUODOMINIO.it/g'
```

## Colori e immagini

I colori derivano dal logo: blu `#0D4A68` e oro `#CBA557`. Si cambiano in cima a `css/style.css` (blocco `:root`). Il logo è in `img/logo.png` (per sfondi chiari) e `img/logo-chiaro.png` (per sfondi scuri); la foto è in `img/cristina-carioli-480.jpg` e `img/cristina-carioli-720.jpg`.

## 2. Anteprima sul proprio computer

Il sito usa percorsi assoluti (`/css/style.css`), quindi non si apre con un doppio clic. Dalla cartella del sito:

```bash
python3 -m http.server 8000
```

Poi aprire http://localhost:8000 nel browser.

## 3. Pubblicazione su GitHub Pages

1. Creare un account su github.com e un nuovo repository **pubblico** (ad esempio `sito-avvocato`). Con un account gratuito, GitHub Pages richiede un repository pubblico.
2. Caricare tutto il contenuto della cartella (non la cartella stessa) nella radice del repository.
   - Da terminale:
     ```bash
     git init
     git add .
     git commit -m "Primo caricamento del sito"
     git branch -M main
     git remote add origin https://github.com/TUO-UTENTE/sito-avvocato.git
     git push -u origin main
     ```
   - In alternativa, dal sito di GitHub: **Add file > Upload files**.
3. Nel repository: **Settings > Pages**. In *Build and deployment* scegliere **Deploy from a branch**, ramo `main`, cartella `/ (root)`, poi **Save**.
4. In **Custom domain** inserire il dominio (senza `www`) e salvare. GitHub crea o aggiorna il file `CNAME`.

## 4. Collegare il dominio Namecheap

1. In Namecheap: **Domain List > Manage** sul dominio > scheda **Advanced DNS**.
2. Controllare che in *Nameservers* sia selezionato **Namecheap BasicDNS**.
3. Eliminare gli eventuali record predefiniti di parcheggio (ad esempio un `URL Redirect Record` o un record `CNAME` per `www` che punta a `parkingpage.namecheap.com`).
4. Aggiungere questi record:

| Tipo | Host | Valore |
|---|---|---|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `TUO-UTENTE.github.io.` |

   Facoltativi, per l'IPv6: quattro record `AAAA` con host `@` e valori `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

5. Attendere la propagazione, da pochi minuti fino a 24 ore.
6. Tornare in **Settings > Pages** su GitHub: quando il controllo DNS è riuscito, attivare **Enforce HTTPS**. Il certificato viene emesso automaticamente.
7. Consigliato: verificare il dominio nelle impostazioni del proprio profilo GitHub (**Settings > Pages > Add a domain**, con un record `TXT`), per evitare che altri lo usino.

Le indicazioni dei record DNS sono quelle della documentazione ufficiale di GitHub Pages: vale la pena confrontarle con https://docs.github.com/pages prima di inserirle.

## 5. Controlli dopo la pubblicazione

- Aprire il sito, premere F12 e, in **Application > Cookies**, controllare che non compaiano cookie. La cookie policy afferma che il sito non ne usa.
- In **Google Search Console** aggiungere il dominio e inviare `https://TUODOMINIO/sitemap.xml`.
- Creare o aggiornare la scheda **Google Business Profile** dello studio, con gli stessi indirizzo e telefono del sito.
- Testare le pagine con PageSpeed Insights.
- Se il vecchio sito WordPress era già pubblicato su questo dominio, le vecchie pagine principali sono reindirizzate alle nuove. Gli indirizzi `/penale-minorile/` e `/diritto-di-famiglia/` sono rimasti identici.

## 6. Come modificare i contenuti

Ogni pagina è un normale file HTML, apribile con qualsiasi editor di testo. Per cambiare un dato presente in tutte le pagine (telefono, indirizzo, e-mail) usare la ricerca e sostituzione sull'intera cartella. Dopo ogni modifica, ripetere `git add .`, `git commit` e `git push`: il sito si aggiorna da solo in un paio di minuti.

## 7. SEO: azioni fuori dal sito

- Verificare il dominio in **Google Search Console** e in **Bing Webmaster Tools**, inviando `sitemap.xml`.
- Compilare la scheda **Google Business Profile** con nome, indirizzo e telefono identici a quelli del sito.
- Controllare che i dati dello studio siano coerenti nelle schede esterne (Ordine degli Avvocati, elenchi professionali).
- Richiedere un collegamento al sito dalle pagine istituzionali o associative in cui l'avvocato è già presente.
- Recensioni e contenuti promozionali: rispettare il Codice deontologico forense.
- Aggiornare le pagine quando cambiano le norme e modificare la data in fondo alla pagina.
