import { Header } from "@/components/Header/Header";
import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";

export default function ManagerLayout({children}: {children: any}) {
    return (
      <AppShell header={{ height: 60 }} padding="lg">
        <AppShellHeader>
          <Header />
        </AppShellHeader>
        <AppShellMain>
            {children}
        </AppShellMain>
      </AppShell>
    );
  };
