import Form from "@/app/ui/dashboard/create/form";
import PageHeader from "../../../../components/shared/PageHeader";


export default function TransactionPage() {
  return (
    <section className="create-page h-[88vh]">
      <PageHeader
        title={"Create an entry"}
        subtitle={"Select the type of the entry and create it."}
      />
      <Form/>
    </section>
  );
}
