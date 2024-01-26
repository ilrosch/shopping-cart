export const shoppingCart = {
  // Массив объектов (товары в корзине)
  items: [],
  // Общая стоимость товаров в корзине
  total: 0,

  // Методы
  // Добавление товара в корзину
  addItem(name, price, quantity) {
    // Добавляем товар в корзину
    this.items.push(
      { name, price, quantity }
    );
    // Увеличиваем общую стоимость
    this.total += price * quantity;
  },

  // Удаление товара из корзины
  removeItem(key) {
    this.items = this.items.filter(({ name, price, quantity }) => {
      if (name === key) {
        this.total -= price * quantity
        return false;
      }

      return true;
    });
  },

  // Обновление кол-ва товара
  updateQuantity(key, count) {
    this.items = this.items.map((item) => {
      if (item.name === key) {
        this.total -= item.price * item.quantity;
        this.total += item.price * count;
        item.quantity = count;
      }
      return item;
    });
  },

  // Стоимость товаров в корзине
  calculateTotal() {
    this.items.map(({ price, quantity }) => {
      this.total += price * quantity;
    });

    return this.total;
  },

  // Очистка корзины
  clearCart() {
    this.items = [];
    this.total = 0;
  }
};

