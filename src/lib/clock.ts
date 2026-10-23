/** Zeitquelle (zentral, damit Komponenten testbar bleiben und Render-Reinheit nicht verletzt wird). */
export const nowMs = (): number => Date.now();
