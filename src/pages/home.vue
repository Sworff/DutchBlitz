<template>
  <div class="flex flex-col h-full items-center justify-evenly">
    <RouterLink to="/solo" class="flex justify-center items-center bg-indigo-50 h-70 w-70 text-3xl rounded-lg border-3 border-indigo-500">Solo</RouterLink>
    <RouterLink to="/multi" class="flex justify-center items-center bg-indigo-50 h-70 w-70 text-3xl rounded-lg border-3 border-indigo-500">Multi</RouterLink>
  </div>

  <RouterView />
</template>
