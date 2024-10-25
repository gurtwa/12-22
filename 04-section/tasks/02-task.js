"use strict";
// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.
var PaymentType;
(function (PaymentType) {
    PaymentType["Cash"] = "cash";
    PaymentType["Card"] = "card";
    PaymentType["Credit"] = "credit";
})(PaymentType || (PaymentType = {}));
