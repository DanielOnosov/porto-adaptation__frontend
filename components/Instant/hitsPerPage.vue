<template>
  <div class="col-1 ms-auto items-end w-auto">
    <ais-hits-per-page
      :items="[
        { label: '12 записей на странице', value: 12, default: true },
        { label: '24 записей на странице', value: 24 },
        { label: '48 записей на странице', value: 48 },
        { label: '96 записей на странице', value: 96 },
      ]"
      :class-names="{
        'ais-HitsPerPage': '',
        'ais-HitsPerPage-select': 'form-select',
      }"
    >
    </ais-hits-per-page>
  </div>
</template>
