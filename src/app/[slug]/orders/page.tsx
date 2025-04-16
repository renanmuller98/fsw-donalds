interface OrderPageProps {
  searchParams: Promise<{ cpf: string }>;
}

const OrdersPage = async ({ searchParams }: OrderPageProps) => {
  const { cpf } = await searchParams;
  if (!cpf) {
  }
  return <h1>Orders</h1>;
};

export default OrdersPage;
