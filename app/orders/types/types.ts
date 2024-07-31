export interface Package {
    autoBill: number;
    billType: number;
    cost: number;
    coupon: boolean;
    customerNotes: string;
    discount: number;
    discountType: string;
    hostName: string;
    options: any[];
    period: number;
    planId: number;
    price: number;
    productId: number;
    proratedTotal: number;
    quantity: number;
    setup: number;
    title: string;
    totalSetup: number;
    zoneId: number;
  }
  
  export interface OrderInfo {
    accountManager: any;
    billingInfoId: string;
    chargeMessage: string;
    ipAddress: string;
    packages: Package[];
    paymentAmount: any;
    paymentStatus: string;
    paymentType: string;
    salesperson: any;
  }
  
  export interface Order {
    info: OrderInfo;
    orderId: number;
    owner: string;
    status: string;
    total: number;
  }