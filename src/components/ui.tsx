"use client";

import Link from "next/link";
import { forwardRef, useEffect, useId, useRef, useState, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "ghost" | "danger" | "teal";
const VARIANTS: Record<Variant, string> = {
  primary: "bg-navy2 text-white hover:bg-navy dark:bg-teal dark:text-[#04222a] dark:hover:bg-teal2",
  teal: "bg-teal text-white hover:bg-teal2 dark:text-[#04222a]",
  secondary: "bg-surface text-fg border border-line hover:bg-surface2",
  ghost: "bg-transparent text-fg hover:bg-surface2",
  danger: "bg-bad text-white hover:opacity-90 dark:text-[#2a0805]",
};
const SIZES = { sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-sm", lg: "h-12 px-6 text-base" };

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: keyof typeof SIZES;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, BtnProps>(function Button(
  { variant = "primary", size = "md", loading, className, children, disabled, type = "button", ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </button>
  );
});

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: { href: string; variant?: Variant; size?: keyof typeof SIZES; className?: string; children: ReactNode } & Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors", VARIANTS[variant], SIZES[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Card({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-2xl border border-line bg-surface p-5 shadow-[0_1px_2px_rgba(11,42,74,0.06),0_6px_20px_-12px_rgba(11,42,74,0.18)]", className)} {...rest}>
      {children}
    </div>
  );
}

type Tone = "neutral" | "teal" | "ok" | "bad" | "warn" | "navy";
const TONES: Record<Tone, string> = {
  neutral: "bg-surface2 text-muted",
  teal: "bg-tealsoft text-teal",
  ok: "bg-oksoft text-ok",
  bad: "bg-badsoft text-bad",
  warn: "bg-warnsoft text-warn",
  navy: "bg-navy2 text-white dark:bg-teal dark:text-[#04222a]",
};
export function Badge({ tone = "neutral", children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium", TONES[tone], className)}>{children}</span>;
}

export function Progress({ value, label, tone = "teal", className }: { value: number; label?: string; tone?: "teal" | "ok" | "bad" | "warn"; className?: string }) {
  const v = Math.max(0, Math.min(100, value));
  const color = { teal: "bg-teal", ok: "bg-ok", bad: "bg-bad", warn: "bg-warn" }[tone];
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(v)}
      aria-label={label}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-surface2", className)}
    >
      <div className={cn("h-full rounded-full transition-[width] duration-500", color)} style={{ width: `${v}%` }} />
    </div>
  );
}

export function Spinner({ label = "Lädt …" }: { label?: string }) {
  return (
    <div role="status" className="flex items-center justify-center gap-3 py-16 text-muted">
      <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
      <span>{label}</span>
    </div>
  );
}

export function EmptyState({ icon, title, children, action }: { icon?: ReactNode; title: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
      {icon && <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tealsoft text-teal">{icon}</div>}
      <h2 className="text-lg font-semibold">{title}</h2>
      {children && <div className="mt-2 max-w-xl text-sm text-muted">{children}</div>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Notice({ tone = "warn", title, children }: { tone?: "warn" | "bad" | "ok" | "teal"; title?: string; children: ReactNode }) {
  const t = { warn: "bg-warnsoft text-warn", bad: "bg-badsoft text-bad", ok: "bg-oksoft text-ok", teal: "bg-tealsoft text-teal" }[tone];
  return (
    <div role={tone === "bad" ? "alert" : "note"} className={cn("rounded-xl px-4 py-3 text-sm", t)}>
      {title && <p className="font-semibold">{title}</p>}
      <div className={title ? "mt-1" : ""}>{children}</div>
    </div>
  );
}

export function PageHeader({ title, subtitle, actions, crumbs }: { title: string; subtitle?: ReactNode; actions?: ReactNode; crumbs?: { label: string; href?: string }[] }) {
  return (
    <header className="mb-6">
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Brotkrumen" className="mb-2 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="hover:text-fg hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-fg">
                    {c.label}
                  </span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden>/</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
          {subtitle && <p className="mt-1 max-w-3xl text-muted">{subtitle}</p>}
        </div>
        {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
      </div>
    </header>
  );
}

export function StatCard({ label, value, hint, icon }: { label: string; value: ReactNode; hint?: ReactNode; icon?: ReactNode }) {
  return (
    <Card className="flex items-start gap-4">
      {icon && <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tealsoft text-teal">{icon}</div>}
      <div className="min-w-0">
        <p className="text-sm text-muted">{label}</p>
        <p className="mt-0.5 text-2xl font-bold tabular-nums">{value}</p>
        {hint && <p className="mt-0.5 text-xs text-muted">{hint}</p>}
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------- Formularfelder
export function Field({ label, hint, error, children, htmlFor }: { label: string; hint?: string; error?: string; children: ReactNode; htmlFor?: string }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs font-medium text-bad">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-line bg-surface px-3 py-2 text-sm placeholder:text-muted/70 focus:border-teal";
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input({ className, ...rest }, ref) {
  return <input ref={ref} className={cn(inputCls, "h-10", className)} {...rest} />;
});
export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(function Select({ className, children, ...rest }, ref) {
  return (
    <select ref={ref} className={cn(inputCls, "h-10", className)} {...rest}>
      {children}
    </select>
  );
});
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea({ className, ...rest }, ref) {
  return <textarea ref={ref} className={cn(inputCls, "min-h-24 py-2", className)} {...rest} />;
});

export function Toggle({ checked, onChange, label, hint, disabled }: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string; disabled?: boolean }) {
  const id = useId();
  return (
    <div className="flex items-start justify-between gap-4 py-1">
      <div>
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        {hint && <p className="text-xs text-muted">{hint}</p>}
      </div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn("relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors disabled:opacity-50", checked ? "bg-teal" : "bg-line")}
      >
        <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", checked ? "left-[22px]" : "left-0.5")} />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------- Dialog (native <dialog>, fokusgebunden)
export function Dialog({ open, onClose, title, children, footer, wide }: { open: boolean; onClose: () => void; title: string; children: ReactNode; footer?: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-label={title}
      className={cn("m-auto w-[calc(100%-2rem)] rounded-2xl border border-line bg-surface p-0 shadow-2xl", wide ? "max-w-3xl" : "max-w-lg")}
    >
      {open && (
        <div className="p-6">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="mt-3">{children}</div>
          {footer && <div className="mt-6 flex flex-wrap justify-end gap-2">{footer}</div>}
        </div>
      )}
    </dialog>
  );
}

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Bestätigen",
  danger,
  onConfirm,
  onCancel,
  requireText,
}: {
  open: boolean;
  title: string;
  message: ReactNode;
  confirmLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  /** Nutzer muss diesen Text eintippen (für destruktive Aktionen) */
  requireText?: string;
}) {
  const [text, setText] = useState("");
  const ok = !requireText || text.trim() === requireText;
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      title={title}
      footer={
        <>
          <Button variant="secondary" onClick={onCancel}>
            Abbrechen
          </Button>
          <Button
            variant={danger ? "danger" : "primary"}
            disabled={!ok}
            onClick={() => {
              setText("");
              onConfirm();
            }}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <div className="text-sm text-muted">{message}</div>
      {requireText && (
        <div className="mt-4">
          <Field label={`Zur Bestätigung „${requireText}“ eingeben`} htmlFor="confirm-text">
            <Input id="confirm-text" value={text} onChange={(e) => setText(e.target.value)} autoComplete="off" />
          </Field>
        </div>
      )}
    </Dialog>
  );
}
