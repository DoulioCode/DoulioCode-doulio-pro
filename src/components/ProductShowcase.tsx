import type { ReactNode } from "react";
import { ScaledScreen } from "@/components/mockups/ScaledScreen";
import {
  ClaimsScreen,
  ClientAppPhoneScreen,
  ClientsScreen,
  DashboardPhoneScreen,
  DashboardScreen,
  RecordDocsPhoneScreen,
  ReportsScreen,
} from "@/components/mockups/Screens";

const LAPTOP_SCREEN = { width: 1280, height: 800 };
const PHONE_SCREEN = { width: 390, height: 845 };

/**
 * A My Practice screen in a plain browser window. The screens are drawn in code, so they stay
 * sharp at any size. Decorative: the figure carries the label, the screen itself is hidden.
 */
function BrowserShot({
  label,
  className = "",
  bar = false,
  children,
}: {
  label: string;
  className?: string;
  bar?: boolean;
  children: ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`overflow-hidden bg-white shadow-[0_20px_50px_rgba(18,41,43,0.16)] ${className}`}
    >
      {bar && (
        <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-[#e6eeed] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-peach" />
          <span className="h-2.5 w-2.5 rounded-full bg-peach" />
          <span className="h-2.5 w-2.5 rounded-full bg-peach" />
        </div>
      )}
      <div aria-hidden="true" className="aspect-[16/10] text-left">
        <ScaledScreen {...LAPTOP_SCREEN}>{children}</ScaledScreen>
      </div>
    </figure>
  );
}

/** A phone screen in a simple frame. `open` drops the bottom edge so a tile can crop it. */
function PhoneShot({
  label,
  open = false,
  children,
}: {
  label: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`overflow-hidden border-[7px] border-ink bg-white ${
        open
          ? "rounded-t-[1.75rem] border-b-0"
          : "rounded-[1.75rem] shadow-[0_20px_44px_rgba(18,41,43,0.28)]"
      }`}
    >
      <div aria-hidden="true" className="aspect-[390/845] text-left">
        <ScaledScreen {...PHONE_SCREEN}>{children}</ScaledScreen>
      </div>
    </figure>
  );
}

/** Hero visual: the dashboard running off the right edge of a mint panel, with the phone in front. */
export function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] bg-tile-mint py-8 pl-8 sm:py-11 sm:pl-11">
      <BrowserShot
        bar
        className="w-[128%] rounded-l-2xl"
        label="My Practice dashboard: active clients, upcoming due dates and recent DOCS"
      >
        <DashboardScreen />
      </BrowserShot>
      <div className="absolute bottom-5 left-5 w-[31%] min-w-[7.5rem]">
        <PhoneShot label="My Practice dashboard on a phone">
          <DashboardPhoneScreen />
        </PhoneShot>
      </div>
    </div>
  );
}

/** Insurance tile: the whole claims screen, sitting on the tile's bottom edge. */
export function ClaimsShot() {
  return (
    <BrowserShot
      className="rounded-t-[0.875rem]"
      label="Insurance in My Practice: an eligibility check showing active Medicaid coverage, amounts reimbursed and claims with their payment status"
    >
      <ClaimsScreen />
    </BrowserShot>
  );
}

/** Clients and Reports tiles: the screen is wider than the tile and runs off its right edge. */
export function ClientsShot() {
  return (
    <BrowserShot
      className="w-[170%] rounded-tl-[0.875rem]"
      label="The Clients list in My Practice, with due dates, services, DOCS progress and status"
    >
      <ClientsScreen />
    </BrowserShot>
  );
}

export function ReportsShot() {
  return (
    <BrowserShot
      className="w-[170%] rounded-tl-[0.875rem]"
      label="Reports in My Practice: clients served, babies born, intake completed and new clients by month"
    >
      <ReportsScreen />
    </BrowserShot>
  );
}

export function RecordDocsPhone({ open = false }: { open?: boolean }) {
  return (
    <PhoneShot
      open={open}
      label="Recording a client's DOCS on a phone: intake, birth plan and visit forms, each with Record, Continue or View"
    >
      <RecordDocsPhoneScreen />
    </PhoneShot>
  );
}

export function ClientAppPhone({ open = false }: { open?: boolean }) {
  return (
    <PhoneShot
      open={open}
      label="The Doulio app on a client's phone: her next meeting with her doula, pregnancy progress, a birth plan form to fill in and a message from her doula"
    >
      <ClientAppPhoneScreen />
    </PhoneShot>
  );
}
