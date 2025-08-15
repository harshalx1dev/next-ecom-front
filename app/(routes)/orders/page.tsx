import { getOrders } from "@/actions/get-orders";
import OrderList from "@/components/order-list";
import { Order } from "@/types";

const OrdersPage = async () => {
  let orders: Order[] = [];

  try {
    orders = await getOrders();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="mx-auto max-w-7xl border-b border-border bg-card px-6 lg:px-8">
      <div className="py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Orders</h1>
            <p className="text-muted-foreground mt-1">View your orders</p>
          </div>
          <div className="flex items-center gap-3"></div>
        </div>
      </div>
      <OrderList orders={orders || []} />
    </div>
  );
};

export default OrdersPage;
