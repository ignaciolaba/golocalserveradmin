'use client'

import React, { useEffect, useState } from "react";
import OrdersTable from "./components/OrdersTable";
import { getOrders } from "../api/getData";
import { Order } from "./types/types"; // Asegúrate de tener este tipo definido

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [errorOrders, setErrorOrders] = useState<string | null>(null);

  useEffect(() => {
    getOrders()
      .then((orders: Order[]) => setOrders(orders))
      .catch((error: any) => setErrorOrders(error.message));
  }, []);

  if (errorOrders) {
    return <div>Error: {errorOrders}</div>;
  }

  if (orders.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Orders Page</h1>
      <OrdersTable orders={orders} />
    </div>
  );
};

export default OrdersPage;