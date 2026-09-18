import { FormSection } from "../components/FormSection";
import { InvidationContent } from "../components/InvidationContent";

import { InvitationLayout } from "../components/InvitationLayout";

export default function Home() {
  return (
    <main className="lg:flex">
      <InvitationLayout>
        <InvidationContent />
      </InvitationLayout>
        <FormSection />
    </main>
  );
}
