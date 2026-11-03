# Research-Ready Call Automation & Lead Orchestration

Dit document beschrijft de geautomatiseerde lead- en consultatieflow voor [research-ready.nl](https://research-ready.nl).

## Overzicht van de Flow

```
[Klant plant afspraak op /contact/ via Cal.com]
                       │
                       ▼
       [Cal.com Webhook: BOOKING_CREATED]
                       │
                       ▼
            [n8n Webhook Endpoint]
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
[Parse & Valideer Payload]   [Extractie Intakevragen]
        │                             │
        └──────────────┬──────────────┘
                       ▼
    [Lokale AI Pre-Call Generator (Ollama/LiteLLM)]
    • Matcht aanvraag aan relevante Use Case (UC1, UC4, UC11, UC12)
    • Formuleert strategisch intake-dossier & architectuurvragen
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
[Interne Notificatie & Dossier]  [Geautomatiseerde Welkomstmail]
• Verzonden naar team / Matrix   • Bevat directe link naar de
• Samenvatting klantbehoefte       bijpassende Reveal.js pitch deck
                                 • Bevat showcase URL van de use case
```

## Installatie & Inrichting in n8n

1. **Importeer de Workflow:**
   - Open de n8n webinterface.
   - Klik op `Workflows` > `Import from File`.
   - Selecteer `automation/n8n-calcom-lead-orchestration.json`.

2. **Koppel Cal.com Webhook:**
   - Kopieer de Webhook URL uit het eerste knooppunt in n8n (bijv. `https://n8n.your-domain.com/webhook/calcom-booking`).
   - Ga in Cal.com naar `Settings` > `Webhooks` > `New Webhook`.
   - Stel de Subscriber URL in en vink `Booking Created` aan.

3. **Lokale LLM Configuratie:**
   - Het AI-knooppunt maakt standaard verbinding met Ollama op `http://localhost:11434` (model `llama3.2` of `mistral`).
   - Bij gebruik van LiteLLM proxy: pas de URL aan naar `http://localhost:4000/v1/chat/completions`.

4. **SMTP Gegevens:**
   - Configureer uw Mailcow / Brevo / SMTP account in de `Send Attendee Welcome Email` node.

## Relevante Use Case Pitch Links

De workflow stuurt automatisch de juiste presentatie mee op basis van de geselecteerde use case:
- **UC1 (Citeerbaar Onderzoek):** `https://research-ready.nl/pitch/uc1/`
- **UC4 (SupplyLens Logistiek):** `https://research-ready.nl/pitch/uc4/`
- **UC11 (Container Collision Game):** `https://container-collision.pages.dev/`
- **UC12 (ChainForge Evaluaties):** `https://research-ready.nl/pitch/uc12/`
