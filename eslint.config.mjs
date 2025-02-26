import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:tailwindcss/recommended",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          ignoreRestSiblings: true,
        },
      ],
    },
    ignorePatterns: ["src/components/ui"],
  }),
]

export default eslintConfig
