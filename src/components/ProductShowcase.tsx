import type { ReactNode } from "react";
import { Laptop, Phone } from "@/components/mockups/Devices";
import { ScaledScreen } from "@/components/mockups/ScaledScreen";
import {
  ClientsScreen,
  DashboardPhoneScreen,
  DashboardScreen,
  RecordDocsPhoneScreen,
  ReportsScreen,
} from "@/components/mockups/Screens";

const LAPTOP_SCREEN = { width: 1280, height: 800 };
const PHONE_SCREEN = { width: 390, height: 845 };

function LaptopScreen({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Laptop label={label}>
      <ScaledScreen {...LAPTOP_SCREEN}>{children}</ScaledScreen>
    </Laptop>
  );
}

function PhoneScreen({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Phone label={label}>
      <ScaledScreen {...PHONE_SCREEN}>{children}</ScaledScreen>
    </Phone>
  );
}

/** Hero visual: the dashboard on a laptop, with the phone in front. */
export function HeroDevices() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <LaptopScreen label="My Practice dashboard on a laptop: active clients, upcoming due dates and recent DOCS">
        <DashboardScreen />
      </LaptopScreen>
      <div className="absolute -bottom-6 right-2 w-[26%] min-w-[7rem] sm:-bottom-10 sm:right-6">
        <PhoneScreen label="My Practice dashboard on a phone">
          <DashboardPhoneScreen />
        </PhoneScreen>
      </div>
    </div>
  );
}

export function ClientsLaptop() {
  return (
    <LaptopScreen label="The Clients list in My Practice, with due dates, services, DOCS progress and status">
      <ClientsScreen />
    </LaptopScreen>
  );
}

export function ReportsLaptop() {
  return (
    <LaptopScreen label="Reports in My Practice: clients served, babies born, intake completed and new clients by month">
      <ReportsScreen />
    </LaptopScreen>
  );
}

export function RecordDocsPhone() {
  return (
    <PhoneScreen label="Recording a client's DOCS on a phone: intake, birth plan and visit forms, each with Record, Continue or View">
      <RecordDocsPhoneScreen />
    </PhoneScreen>
  );
}
