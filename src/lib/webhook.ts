const WEBHOOK_URL =
  "https://maxhelmke.app.n8n.cloud/webhook/eab482f0-c90e-417c-a6da-82a9d907734d";

const RL_KEY = "zb_form_submissions";
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 Stunde

function getRateLimitTimestamps(): number[] {
  try {
    const raw = localStorage.getItem(RL_KEY);
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    return [];
  }
}

function recordSubmission(): void {
  const now = Date.now();
  const recent = getRateLimitTimestamps().filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  try {
    localStorage.setItem(RL_KEY, JSON.stringify(recent));
  } catch {
    // localStorage not available – ignore
  }
}

export function checkRateLimit(): { allowed: boolean; waitMinutes: number } {
  const now = Date.now();
  const recent = getRateLimitTimestamps().filter((t) => now - t < WINDOW_MS);
  if (recent.length < MAX_SUBMISSIONS) return { allowed: true, waitMinutes: 0 };

  const oldest = Math.min(...recent);
  const waitMs = WINDOW_MS - (now - oldest);
  return { allowed: false, waitMinutes: Math.ceil(waitMs / 60000) };
}

export async function postToWebhook(payload: Record<string, unknown>): Promise<void> {
  const { allowed, waitMinutes } = checkRateLimit();
  if (!allowed) {
    throw new Error(
      `Zu viele Anfragen. Bitte warten Sie noch ${waitMinutes} Minute${waitMinutes !== 1 ? "n" : ""}.`
    );
  }

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source: "zakho-bau.de", sentAt: new Date().toISOString() }),
  });

  if (!res.ok) {
    throw new Error(`Webhook-Fehler: ${res.status}`);
  }

  recordSubmission();
}
