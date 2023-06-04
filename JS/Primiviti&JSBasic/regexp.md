## Espressioni Regolari JavaScript



| Espressione Regolare | Descrizione | Esempio |
|----------------------|-------------|---------|
| `/pattern/` | Notazione letterale per definire un pattern | `/abc/` corrisponde a "abc" |
| `/[abc]/` | Classe di caratteri, corrisponde a uno dei caratteri specificati | `/[abc]/` corrisponde a "a", "b" o "c" |
| `/[^abc]/` | Classe di caratteri negata, corrisponde a qualsiasi carattere tranne quelli specificati | `/[^abc]/` corrisponde a qualsiasi carattere tranne "a", "b" o "c" |
| `/[a-z]/` | Classe di caratteri con intervallo, corrisponde a un carattere compreso nell'intervallo specificato | `/[a-z]/` corrisponde a qualsiasi carattere minuscolo |
| `/^pattern/` | Ancore inizio linea, corrisponde al pattern solo se si trova all'inizio della linea | `/^abc/` corrisponde a "abc" solo se si trova all'inizio della linea |
| `/pattern$/` | Ancore fine linea, corrisponde al pattern solo se si trova alla fine della linea | `/abc$/` corrisponde a "abc" solo se si trova alla fine della linea |
| `/pattern+/` | Quantificatore "uno o più", corrisponde al pattern se appare una o più volte | `/a+/` corrisponde a "a", "aa", "aaa", ecc. |
| `/pattern*/` | Quantificatore "zero o più", corrisponde al pattern se appare zero o più volte | `/a*/` corrisponde a "", "a", "aa", "aaa", ecc. |
| `/pattern?/` | Quantificatore "zero o uno", corrisponde al pattern se appare zero o una volta | `/a?/` corrisponde a "" o "a" |
| `/(pattern)/` | Gruppo di cattura, cattura il pattern corrispondente per riferimenti successivi | `/(ab)c/` cattura "ab" come gruppo e corrisponde a "abc" |
| `/pattern orOperator pattern/` | Operatore OR, corrisponde a uno dei due pattern specificati | `/abc or def/` corrisponde a "abc" o "def" |
| `/.\{n\}/` | Quantificatore esatto, corrisponde al pattern solo se appare esattamente n volte | `/.{3}/` corrisponde a qualsiasi stringa di 3 caratteri |
| `/.\{n,\}/` | Quantificatore minimo, corrisponde al pattern se appare almeno n volte | `/.{3,}/` corrisponde a qualsiasi stringa di almeno 3 caratteri |
| `/.\{n,m\}/` | Quantificatore intervallo, corrisponde al pattern se appare tra n e m volte (inclusi) | `/.{2,4}/` corrisponde a qualsiasi stringa di 2, 3 o 4 caratteri |

Queste espressioni regolari possono essere combinate per creare pattern più complessi. 

- Concatenazione: Puoi semplicemente concatenare due o più pattern per creare un nuovo pattern.
- Gruppi di cattura: Puoi raggruppare pattern all'interno di parentesi per creare gruppi di cattura.
- Utilizzo di quantificatori: Puoi utilizzare quantificatori come `+`, `*` o `?` per specificare ripetizioni dei pattern.
- Operatori OR: Puoi utilizzare l'operatore `|` per creare una scelta tra due o più pattern.
- Utilizzo di classi di caratteri: Puoi utilizzare le classi di caratteri per definire un insieme di caratteri corrispondenti.

Ricorda che le espressioni regolari possono diventare molto complesse a seconda dei requisiti del tuo caso specifico. Puoi anche utilizzare altre costruzioni avanzate come ancore di parola intera, retroreferenze, lookahead e lookbehind, ma queste vanno oltre l'ambito di questa tabella introduttiva.
