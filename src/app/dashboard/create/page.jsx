import Form from "@/app/ui/dashboard/create/form";
import PageHeader from "../../../../components/shared/PageHeader";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function TransactionPage() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <section className="create-page h-[88vh]">
      <PageHeader
        title={"Create an entry"}
        subtitle={"Select the type of the entry and create it."}
      />
      <Form />
    </section>
  );
}
