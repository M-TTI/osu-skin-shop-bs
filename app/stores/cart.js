import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  const totalItems = computed(() => {
    return items.value.length;
  });

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price, 0);
  });

  const itemIds = computed(() => {
    return items.value.map((item) => item.id);
  });

  const isInCart = (skinId) => {
    return computed(() => {
      return items.value.some(item => item.id === skinId);
    });
  }

  const addItem = (skin) => {
    const exists = items.value.find(item => item.id === skin.id);
    if (!exists) {
      items.value.push({ ...skin });
      console.log(`adding ${skin.name}: ${skin.id} to cart`);
    } else {
      console.log(`${skin.name}: ${skin.id} is already in cart`);
    }
  }

  const removeItem = (skinId) => {
    const index = items.value.findIndex(item => item.id === skinId);
    if (index !== -1) {
      const removed = items.value.splice(index, 1)[0];
      console.log(`removed ${removed.name}: ${removed.id} from cart`);
    }
  }

  const clearCart = () => {
    items.value = [];
    console.log('cart has been cleared');
  }

  return {
    items,
    totalItems,
    totalPrice,
    itemIds,
    isInCart,
    addItem,
    removeItem,
    clearCart,
  }
});
