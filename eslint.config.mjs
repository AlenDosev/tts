import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-v-html': 'off',
    'ts-nocheck': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    'no-control-regex': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/valid-template-root': 'off',
  },
});
