/**
 * Stand der Inhalte und fachliche Prüfung je Lektion.
 * Trage hier nach einer Prüfung durch eine Pflegefachkraft oder Lehrkraft das Datum ein, z. B.
 *   "g9-pflegeorganisation": "2026-12-01"
 * Die App zeigt dann in der Lektion "Fachlich geprüft: 01.12.2026". Ohne Eintrag steht dort nur der Stand der Inhalte.
 */
export const CONTENT_STAND = "November 2026";
export const REVIEWED: Record<string, string> = {};

export function reviewedDate(id: string): string | null {
  const v = REVIEWED[id];
  if (!v) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  return m ? `${m[3]}.${m[2]}.${m[1]}` : v;
}
