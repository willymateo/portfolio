import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          message: "Please import from `@/i18n/routing` instead.",
        },
        {
          name: "next/navigation",
          importNames: ["redirect", "permanentRedirect", "useRouter", "usePathname"],
          message: "Please import from `@/i18n/routing` instead.",
        },
      ],
    },
    ignores: ["**/node_modules/**", "**/build/**", "**/.git/**", "**/dist/**"],
  },
];

export default eslintConfig;
