// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum PaymentType {
  Cash = "cash",
  Card = "card",
  Credit = "credit"
}

interface PersonalInfo {
  firstName: string;
  lastName: string;
  dateBirthday: Date;
}

interface DeliveryInfo {
  country: string;
  city: string;
  address: string;
  building: number | string;
  apartment?: number;
  deliveryTime?: string;
}

interface OrderInfo {
  ordersCount: number;
  discountPercent: number;
  currency: "EUR" | "USD" | "RUB";
}

interface Customer extends PersonalInfo, DeliveryInfo, OrderInfo {
  paymentType: PaymentType; // Способ оплаты
}
