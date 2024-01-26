import { shoppingCart } from "..";

let cart;

beforeEach(() => {
  cart = { ...shoppingCart };
});

test('Добавление и удаление товара', () => {
  // Добавляем товар
  cart.addItem('яблоки', 120, 3);
  expect(cart.items).toEqual([{ name: "яблоки", price: 120, quantity: 3 }]);
  expect(cart.total).toBe(360);

  // Добавляем товар
  cart.addItem('груши', 150, 1);
  expect(cart.items).toEqual([
    { name: "яблоки", price: 120, quantity: 3 },
    { name: "груши", price: 150, quantity: 1 }
  ]);
  expect(cart.total).toBe(510);

  // Удаляем товар
  cart.removeItem('яблоки');
  expect(cart.items).toEqual([{ name: "груши", price: 150, quantity: 1 }]);
  expect(cart.total).toBe(150);

  // Удаляем товар
  cart.removeItem('груши');
  expect(cart.items).toEqual([]);
  expect(cart.total).toBe(0);
});

test('Обновление кол-ва товара в корзине', () => {
  // Добавляем товары
  cart.items = [
    { name: "яблоки", price: 120, quantity: 3 },
    { name: "груши", price: 150, quantity: 1 }
  ];
  cart.total = 510;

  // Изменяем кол-во товара
  cart.updateQuantity("яблоки", 1);
  expect(cart.items).toEqual([
    { name: "яблоки", price: 120, quantity: 1 },
    { name: "груши", price: 150, quantity: 1 }
  ]);
  expect(cart.total).toBe(270);

  // Изменяем кол-во товара
  cart.updateQuantity('груши', 10);
  expect(cart.items).toEqual([
    { name: "яблоки", price: 120, quantity: 1 },
    { name: "груши", price: 150, quantity: 10 }
  ]);
  expect(cart.total).toBe(1620);
});

test('Общая стоимость товаров в корзине', () => {
  // Добавляем товары
  cart.items = [
    { name: "яблоки", price: 120, quantity: 1 },
    { name: "груши", price: 150, quantity: 1 }
  ];

  // Общая стоимость
  expect(cart.calculateTotal()).toBe(270)
});

test('Очистка корзины', () => {
  // Добавляем товары
  cart.items = [
    { name: "яблоки", price: 120, quantity: 1 },
    { name: "груши", price: 150, quantity: 1 }
  ];

  cart.clearCart();
  expect(cart.items).toEqual([]);
  expect(cart.total).toBe(0);
});