"use client";

import { useEffect, useState } from "react";

export type AuthMode = "login" | "signup";

export function AuthModal({
  mode,
  onModeChange,
  onClose,
}: {
  mode: AuthMode | null;
  onModeChange: (mode: AuthMode) => void;
  onClose: () => void;
}) {
  const [submitLabel, setSubmitLabel] = useState<string | null>(null);

  const isOpen = mode !== null;
  const isSignup = mode === "signup";

  // Lock body scroll while open and reset transient submit label on open/close.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitLabel(null);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitLabel(isSignup ? "Account created ✓" : "Logged in ✓");
    setTimeout(onClose, 800);
  }

  const defaultSubmit = isSignup ? "Sign up" : "Log in";

  return (
    <div
      className={`modal-overlay${isSignup ? " is-signup" : ""}`}
      id="authModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="authTitle"
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        <div className="modal-brand">
          <span className="brand-mark">C</span>
          <span>
            ClipVanta<span className="accent"> AI</span>
          </span>
        </div>
        <h3 id="authTitle" className="modal-title">
          {isSignup ? "Create your account" : "Welcome back"}
        </h3>
        <p className="modal-sub">
          {isSignup
            ? "Start turning ideas into faceless videos."
            : "Log in to keep creating faceless videos."}
        </p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label className="auth-name-field">
            Full name
            <input
              type="text"
              name="name"
              placeholder="Alex Rivera"
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete={isSignup ? "new-password" : "current-password"}
              required
            />
          </label>
          <button className="btn btn-primary full" type="submit">
            {submitLabel ?? defaultSubmit}
          </button>
          <p className="auth-switch">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              onClick={() => onModeChange(isSignup ? "login" : "signup")}
            >
              {isSignup ? "Log in" : "Sign up"}
            </button>
          </p>
          <p className="form-note">Demo mode — no account is actually created.</p>
        </form>
      </div>
    </div>
  );
}
