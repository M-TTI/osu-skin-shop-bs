<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useUserStore } from '~/stores/user'

const cartStore = useCartStore();
const userStore = useUserStore();

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const isLoggedIn = computed(() => !!userStore.loggedUser);

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header / Navigation -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4">
        <nav class="flex items-center justify-between py-4 gap-8">
          <!-- Logo -->
          <NuxtLink
            :to="localePath('/')"
            class="flex items-center gap-2 text-xl font-bold text-pink-500 hover:opacity-80 transition-opacity"
          >
            <span>OSU Skins</span>
          </NuxtLink>

          <!-- Navigation Links -->
          <div
            class="fixed md:static top-[73px] left-0 right-0 md:flex md:items-center md:gap-6 md:flex-1 md:justify-end bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out"
          >
            <div class="flex flex-col md:flex-row md:items-center md:gap-6 p-4 md:p-0">
              <!-- Main Nav Links -->
              <NuxtLink
                :to="localePath('/')"
                class="px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-all text-center md:text-left"
                :class="{'text-pink-500 font-semibold': $route.path === localePath('/')}"
              >
                {{ $t('nav.home') }}
              </NuxtLink>

              <NuxtLink
                :to="localePath('/skins')"
                class="px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-all text-center md:text-left"
                :class="{'text-pink-500 font-semibold': $route.path.includes('/skins')}"
              >
                {{ $t('nav.browseSkins') }}
              </NuxtLink>

              <NuxtLink
                :to="localePath('/cart')"
                class="relative px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-all text-center md:text-left"
                :class="{'text-pink-500 font-semibold': $route.path === localePath('/cart')}"
              >
                {{ $t('nav.cart') }}
                <span
                  v-if="cartStore.totalItems > 0"
                  class="absolute top-0 right-0 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                >
                  {{ cartStore.totalItems }}
                </span>
              </NuxtLink>

              <!-- Language Switcher -->
              <div class="flex items-center justify-center md:justify-start gap-2 px-4 py-2">
                <span class="text-sm text-gray-600 font-medium">{{ locale.toUpperCase() }}</span>
                <NuxtLink
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  :to="switchLocalePath(loc.code)"
                  class="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200 transition-colors font-medium"
                >
                  {{ loc.code.toUpperCase() }}
                </NuxtLink>
              </div>

              <!-- User Section -->
              <div class="flex flex-col md:flex-row md:items-center gap-2 md:ml-4 md:pl-4 md:border-l border-gray-200 pt-4 md:pt-0 border-t md:border-t-0 w-full md:w-auto">
                <NuxtLink
                  v-if="isLoggedIn"
                  :to="localePath('/account')"
                  class="px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-all text-center"
                  :class="{'text-pink-500 font-semibold': $route.path === localePath('/account')}"
                >
                  {{ $t('nav.account') }}
                </NuxtLink>

                <template v-else>
                  <NuxtLink
                    :to="localePath('/login')"
                    class="px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-all text-center"
                  >
                    {{ $t('nav.login') }}
                  </NuxtLink>
                  <NuxtLink
                    :to="localePath('/register')"
                    class="px-6 py-2 rounded bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors text-center"

                  >
                    {{ $t('nav.signup') }}
                  </NuxtLink>
                </template>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 py-8">
      <div class="max-w-7xl mx-auto px-4">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-200 py-12 mt-auto">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- About Section -->
          <div>
            <h4 class="text-pink-400 font-semibold mb-4">{{ $t('footer.about') }}</h4>
            <p class="text-sm leading-relaxed">
              {{ $t('footer.aboutText') }}
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-pink-400 font-semibold mb-4">{{ $t('footer.quickLinks') }}</h4>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  :to="localePath('/')"
                  class="text-sm hover:text-pink-400 transition-colors"
                >
                  {{ $t('nav.home') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/skins')"
                  class="text-sm hover:text-pink-400 transition-colors"
                >
                  {{ $t('nav.browseSkins') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/cart')"
                  class="text-sm hover:text-pink-400 transition-colors"
                >
                  {{ $t('nav.cart') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Account -->
          <div>
            <h4 class="text-pink-400 font-semibold mb-4">{{ $t('footer.accountLinks') }}</h4>
            <ul class="space-y-2">
              <li v-if="isLoggedIn">
                <NuxtLink
                  :to="localePath('/account')"
                  class="text-sm hover:text-pink-400 transition-colors"
                >
                  {{ $t('nav.account') }}
                </NuxtLink>
              </li>
              <li v-else>
                <NuxtLink
                  :to="localePath('/login')"
                  class="text-sm hover:text-pink-400 transition-colors"
                >
                  {{ $t('nav.login') }}
                </NuxtLink>
              </li>
              <li v-if="!isLoggedIn">
                <NuxtLink
                  :to="localePath('/register')"
                  class="text-sm hover:text-pink-400 transition-colors"
                >
                  {{ $t('nav.signup') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h4 class="text-pink-400 font-semibold mb-4">{{ $t('footer.support') }}</h4>
            <p class="text-sm">{{ $t('footer.schoolProject') }}</p>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-8 border-t border-gray-700 text-center">
          <p class="text-sm text-gray-400">
            {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
