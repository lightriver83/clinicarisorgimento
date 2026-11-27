import { unghie, pelle, dolore } from '../data/problemi';

// ════════════════════════════════════════════════════════════════
// /llms.txt della clinica (idea C3 del piano Conqueror, Nick 26/11/2026, AT-3646).
// Serve a chi chiede a un'AI «podologo a Forlì…»: nome, numero, cosa facciamo e la pagina giusta.
// Nessuno garantisce che le AI lo leggano: è un'ipotesi a costo zero.
// Le pagine-sintomo arrivano da src/data/problemi.ts (stesso elenco dell'indice /problemi):
// una pagina nuova lì entra qui al build. I fatti fissi stanno qui sotto, dalla skill clinica-voice.
// Gate sanitario: Laura non è un medico, gli atti medici restano del medico,
// niente visite né consigli a distanza (Nick, AT-746), niente contenuti clinici per minori, niente promesse.
// Lingue: Nick, AT-2417 (17/11/2026): «parla inglese e spagnolo». Parcheggio: come in /come-arrivare (AT-2405, AT-2417).
// ════════════════════════════════════════════════════════════════

const SITO = 'https://clinicarisorgimento.it';

const SERVIZI: [string, string, string][] = [
  ['Podologia', '/servizi/podologia', 'ferite e infezioni della pelle del piede, verruche, calli che tornano, dolori al tallone e alla pianta, piede della persona con diabete'],
  ['Trattamenti ungueali', '/servizi/unghie', 'unghia incarnita, ispessita, con micosi, nera dopo un colpo; esame micologico con coltura, laser, rieducazione della crescita'],
  ['Podiatria', '/servizi/podiatria', 'valutazione del piede che si chiude con un referto scritto per essere letto anche dal medico; ferite, infezioni, calli, verruche, unghia incarnita, micosi, dolore al tallone, valutazione ecografica'],
  ['Plantari e solette su misura', '/servizi/plantari-su-misura', 'fatti sulla valutazione clinica e strumentale, con controllo dopo la consegna'],
  ['Posturologia e biomeccanica', '/servizi/posturologia', 'valutazione posturale, esame baropodometrico e analisi del passo'],
  ['Osteopatia', '/servizi/osteopatia', 'trattamento manuale di articolazioni, muscoli e fasce, letto insieme al lavoro sul piede'],
];

const PAGINE: [string, string][] = [
  ['Home', '/'],
  ['Dott.ssa Laura Zanoni: titoli, formazione, come lavora', '/laura-zanoni'],
  ['Servizi', '/servizi'],
  ['Cosa succede alla prima visita: quanto dura, cosa portare', '/prima-visita'],
  ['Podologo, ortopedico, dermatologo o pedicure: da chi andare', '/problemi/da-chi-andare'],
  ['Problemi del piede (indice delle pagine per sintomo)', '/problemi'],
  ['Come arrivare da Cesena, Faenza, Ravenna, Rimini e Imola', '/come-arrivare'],
];

const riga = (p: { href: string; nome: string; testo: string }) => `- [${p.nome}](${SITO}${p.href}): ${p.testo}`;

export function GET() {
  const testo = `# Clinica Risorgimento

> Studio di podologia a Forlì della Dott.ssa Laura Zanoni, podologa e podiatra (laurea in Podiatria in Spagna, 2026), posturologa e osteopata. Unghie, pelle del piede, dolore al piede, plantari su misura, postura e osteopatia. Riceviamo solo su appuntamento.

## Contatti
- Nome: Clinica Risorgimento
- Indirizzo: Viale Risorgimento 283, 47121 Forlì (FC), Italia
- Telefono e WhatsApp per prenotare: 346 2172234
- Telefono fisso: 0543 405479
- Orari: dal lunedì al venerdì, 8.30-19.30, solo su appuntamento
- Parcheggio: interno gratuito, condiviso con altre attività; nella zona c'è anche parcheggio gratuito a bordo strada
- Lingue: la Dott.ssa Zanoni parla anche inglese e spagnolo
- Sito: ${SITO}/
- Google Maps: https://www.google.com/maps?cid=16692031514607331278
- Zona servita: Forlì e Romagna (Cesena, Faenza, Ravenna, Rimini, Imola)

## Chi è Laura Zanoni
Podologa dal 2006 (Università di Perugia) e podiatra (laurea in Podiatria in Spagna, 2026), posturologa clinica (Master, Università di Pisa, 2011), osteopata (CRESO, 2018). Per dodici anni referente podologo del Piede Diabetico all'Ospedale di Forlì (2007-2019). Studio a Forlì dal 2008. Non è un medico: quando un caso è del medico (antibiotici, incisioni, farmaci per bocca, sospetto melanoma, fratture) lo dice e manda dal medico.

## Come lavoriamo
- Misuriamo prima di trattare e spieghiamo in parole semplici; se un trattamento non serve, lo diciamo.
- Non facciamo visite né consigli a distanza: niente pareri su foto inviate per WhatsApp, telefono o mail. WhatsApp e telefono servono a prenotare.

## Servizi
${SERVIZI.map(([nome, href, testo]) => `- [${nome}](${SITO}${href}): ${testo}`).join('\n')}

## Pagine principali
${PAGINE.map(([nome, href]) => `- [${nome}](${SITO}${href})`).join('\n')}

## Problemi del piede: unghie
${unghie.map(riga).join('\n')}

## Problemi del piede: pelle
${pelle.map(riga).join('\n')}

## Problemi del piede: dolore
${dolore.map(riga).join('\n')}

## Nota
Queste pagine servono a orientarsi e non sostituiscono una visita. Con febbre, diabete, problemi di circolazione o anticoagulanti, per qualunque infezione al piede ci si rivolge subito al medico.
`;
  return new Response(testo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
