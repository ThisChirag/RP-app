"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      event.currentTarget.reset();
    }, 900);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="text-sm font-semibold text-foreground">
            First Name
          </label>
          <input
            id="first-name"
            className="h-11 w-full rounded-xl border border-input bg-background/85 px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="John"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="text-sm font-semibold text-foreground">
            Last Name
          </label>
          <input
            id="last-name"
            className="h-11 w-full rounded-xl border border-input bg-background/85 px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="h-11 w-full rounded-xl border border-input bg-background/85 px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-foreground">
            Event Type
          </label>
          <select
            id="subject"
            className="h-11 w-full rounded-xl border border-input bg-background/85 px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue="booking"
          >
            <option value="booking">Event Booking</option>
            <option value="wedding">Wedding Program</option>
            <option value="corporate">Corporate Event</option>
            <option value="collaboration">Collaboration</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="event-date" className="text-sm font-semibold text-foreground">
            Tentative Date
          </label>
          <input
            id="event-date"
            type="date"
            className="h-11 w-full rounded-xl border border-input bg-background/85 px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Tell us about your event
        </label>
        <textarea
          id="message"
          className="min-h-[130px] w-full rounded-xl border border-input bg-background/85 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Venue, audience size, and the style of performance you need."
          required
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
        <p className="text-xs text-muted-foreground">
          We usually reply within 24 hours.
        </p>
      </div>

      {isSubmitted ? (
        <p className="rounded-xl border border-secondary/35 bg-secondary/10 px-4 py-3 text-sm text-secondary-foreground">
          Thanks for reaching out. Your enquiry has been received.
        </p>
      ) : null}
    </form>
  );
}
