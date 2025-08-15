"use client";

import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  MapPin,
  Phone,
  ShoppingBag,
  // MoreHorizontal,
} from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Order, OrderItem } from "@/types";
import Image from "next/image";

// Mock data for demonstration
// const mockOrders = [
//   {
//     id: "ORD-001",
//     date: "2024-01-15",
//     isPaid: true,
//     phone: "+1 (555) 123-4567",
//     address: "123 Main St, New York, NY 10001",
//     products: [
//       {
//         name: "Premium Wireless Headphones",
//         image: "/placeholder.svg?height=80&width=80",
//         category: "Electronics",
//         price: 299.99,
//         size: "One Size",
//         color: "Black",
//       },
//       {
//         name: "Bluetooth Speaker",
//         image: "/placeholder.svg?height=80&width=80",
//         category: "Electronics",
//         price: 89.99,
//         size: "Compact",
//         color: "Blue",
//       },
//     ],
//   },
//   {
//     id: "ORD-002",
//     date: "2024-01-14",
//     isPaid: false,
//     phone: "+1 (555) 987-6543",
//     address: "456 Oak Ave, Los Angeles, CA 90210",
//     products: [
//       {
//         name: "Cotton T-Shirt",
//         image: "/placeholder.svg?height=80&width=80",
//         category: "Clothing",
//         price: 24.99,
//         size: "Large",
//         color: "White",
//       },
//       {
//         name: "Denim Jeans",
//         image: "/placeholder.svg?height=80&width=80",
//         category: "Clothing",
//         price: 79.99,
//         size: "32x34",
//         color: "Dark Blue",
//       },
//       {
//         name: "Sneakers",
//         image: "/placeholder.svg?height=80&width=80",
//         category: "Footwear",
//         price: 129.99,
//         size: "10",
//         color: "White",
//       },
//     ],
//   },
//   {
//     id: "ORD-003",
//     date: "2024-01-13",
//     isPaid: true,
//     phone: "+1 (555) 456-7890",
//     address: "789 Pine St, Chicago, IL 60601",
//     products: [
//       {
//         name: "Coffee Maker",
//         image: "/placeholder.svg?height=80&width=80",
//         category: "Home & Kitchen",
//         price: 199.99,
//         size: "12-Cup",
//         color: "Stainless Steel",
//       },
//     ],
//   },
// ];

const OrderList = ({ orders }: { orders: Order[] }) => {
  const calculateOrderTotal = (products: OrderItem[]) => {
    return products.reduce(
      (total, { product, quantity }) => total + (Number(product.price) * Number(quantity)),
      0
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto">
        {!orders.length ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-muted p-6 mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No Orders Found
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              You don&apos;t have any orders yet. When you place orders,
              they will appear here.
            </p>
            {/* <Button>
              <Package className="h-4 w-4 mr-2" />
              Create New Order
            </Button> */}
          </div>
        ) : <></>}
        {orders.length ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CardTitle className="text-lg font-semibold">
                        Order {order.id}
                      </CardTitle>
                      <Badge variant={order.isPaid ? "success" : "destructive"}>
                        {order.isPaid ? "Paid" : "Unpaid"}
                      </Badge>
                    </div>
                    {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Order</DropdownMenuItem>
                      <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                      <Separator className="my-1" />
                      <DropdownMenuItem className="text-destructive">
                        Cancel Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                  </div>

                  {/* Order Info */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>
                        {new Date(order.createdAt).toISOString().split("T")[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{order.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate max-w-xs">{order.address}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Products */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-foreground mb-4">
                      Products ({order.orderItems.length})
                    </h3>

                    <div className="grid gap-4">
                      {order.orderItems.map(({ product, quantity }, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50"
                        >
                          <Image
                            width={64}
                            height={64}
                            src={product.images?.[0]?.url}
                            alt={product.name}
                            className="w-16 h-16 rounded-md object-cover bg-muted flex-shrink-0"
                          />

                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground truncate">
                              {product.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {product.category?.name}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-sm">
                              <span className="text-muted-foreground">
                                Size:{" "}
                                <span className="text-foreground">
                                  {product.size?.name}
                                </span>
                              </span>
                              <span className="text-muted-foreground">
                                Color:{" "}
                                <span className="text-foreground">
                                  {product.color?.name}
                                </span>
                              </span>
                              <span className="text-muted-foreground">
                                Quantity:{" "}
                                <span className="text-foreground">
                                  {quantity}
                                </span>
                              </span>
                            </div>
                            <div className="sm:hidden mt-2">
                              <p className="font-semibold text-lg text-foreground">
                                ${Number(product.price).toFixed(2)}
                              </p>
                            </div>
                          </div>

                          <div className="hidden sm:block text-right flex-shrink-0">
                            <p className="font-semibold text-lg text-foreground">
                              ${Number(product.price).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Total */}
                    <div className="flex justify-end pt-4 border-t border-border">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          Order Total
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          ${calculateOrderTotal(order.orderItems).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : <></>}
      </div>
    </div>
  );
};

export default OrderList;
