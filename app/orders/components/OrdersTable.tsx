import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Order } from '../types/types'; // Asegúrate de tener este tipo definido

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Payment Type</TableCell>
            <TableCell>IP Address</TableCell>
            <TableCell>Packages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.orderId}>
              <TableCell>{order.orderId}</TableCell>
              <TableCell>{order.owner}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.info.paymentStatus}</TableCell>
              <TableCell>{order.info.paymentType}</TableCell>
              <TableCell>{order.info.ipAddress}</TableCell>
              <TableCell>
                {order.info.packages.map((pkg, index) => (
                  <div key={index}>
                    <strong>{pkg.title}</strong><br />
                    Hostname: {pkg.hostName}<br />
                    Cost: ${pkg.cost}<br />
                    Period: {pkg.period} month(s)
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;