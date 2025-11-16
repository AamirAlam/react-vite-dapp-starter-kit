# 🚀 React + Vite + Web3 DApp Starter Kit

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)](https://vitejs.dev/)
[![Wagmi](https://img.shields.io/badge/Wagmi-2.0.0-FF6B6B?logo=ethereum)](https://wagmi.sh/)
[![RainbowKit](https://img.shields.io/badge/RainbowKit-2.0.0-FF6B6B?logo=ethereum)](https://www.rainbowkit.com/)
[![Playwright](https://img.shields.io/badge/Playwright-1.56.1-2EAD33?logo=playwright)](https://playwright.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-4.0.8-6E9F18?logo=vvitest)](https://vitest.dev/)

> **A production-ready, enterprise-grade Web3 DApp starter kit with TypeScript, Vite, Wagmi, and RainbowKit. Perfect for building secure, scalable, and testable decentralized applications.**

## ✨ Features

### 🏗️ **Modern Web3 Stack**

- **React 19** - Latest React with concurrent features and improved performance
- **TypeScript 5.9** - Full type safety with advanced TypeScript features
- **Vite 7** - Lightning-fast build tool with HMR and optimized bundling
- **Wagmi v2** - React Hooks for Ethereum with type safety
- **RainbowKit** - Beautiful, developer-friendly wallet connection
- **Ethers.js** - Complete Ethereum wallet implementation
- **ESM Support** - Modern ES modules throughout the entire stack

### 🧪 **Comprehensive Testing Suite**

- **Vitest** - Ultra-fast unit testing with native ESM support
- **Playwright** - Reliable end-to-end testing across all browsers
- **JSDOM** - Lightweight DOM testing environment
- **Test Coverage** - Built-in coverage reporting and analysis

### 🔧 **Code Quality & Standards**

- **ESLint 9** - Advanced linting with TypeScript-aware rules
- **Prettier** - Consistent code formatting across the project
- **Husky** - Git hooks for automated quality checks
- **Lint-staged** - Run linters only on staged files for faster commits

### 🚦 **CI/CD Ready**

- **Pre-commit Hooks** - Automated linting, formatting, and testing
- **GitHub Actions Ready** - Prepared for seamless CI/CD integration
- **Production Optimized** - Tree-shaking, code splitting, and asset optimization

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **pnpm** (recommended) or npm/yarn
- **Wallet** - MetaMask or any Web3 wallet

### Installation

1. Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/react-vite-dapp-starter-kit.git
cd react-vite-dapp-starter-kit

# Install dependencies
pnpm install
```

2. Set up environment variables:

Copy the example environment file and update it with your WalletConnect Project ID:

```bash
cp .env.example .env
```

Then edit the `.env` file and add your WalletConnect Project ID:

```env
VITE_NODE_ENV=development
VITE_PROJECT_ID=your-walletconnect-project-id
```

Get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/).

3. Start the development server:

```bash
pnpm dev
```

## 🛠️ Web3 Features

- 🔌 **Wallet Connection** - Connect with MetaMask, WalletConnect, Coinbase, and more
- 🔒 **Type-Safe** - Full TypeScript support for all Web3 operations
- 🌈 **Beautiful UI** - Pre-styled components with RainbowKit
- ⚡ **Fast Development** - Hot module replacement with Vite
- 🔄 **Auto-Refresh** - Automatically refresh on chain changes
- 🛡️ **Security** - Built-in protection against common Web3 vulnerabilities

## 📦 Included Packages

- `@rainbow-me/rainbowkit` - Beautiful wallet connection UI
- `wagmi` - React Hooks for Ethereum
- `viem` - TypeScript interface for Ethereum
- `@tanstack/react-query` - Data synchronization for Web3 state

### Available Scripts

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `pnpm dev`       | Start development server with HMR       |
| `pnpm build`     | Build for production with optimizations |
| `pnpm preview`   | Preview production build locally        |
| `pnpm lint`      | Run ESLint across the codebase          |
| `pnpm test:unit` | Execute unit tests with Vitest          |
| `pnpm test:e2e`  | Run end-to-end tests with Playwright    |

## 🏛️ Architecture & Best Practices

### 📁 **Project Structure**

```
dapp-setup/
├── src/
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utility functions and helpers
│   ├── __tests__/     # Unit test files
│   └── App.tsx        # Main application component
├── tests-e2e/         # End-to-end test suites
├── public/            # Static assets
└── .husky/           # Git hooks configuration
```

### 🔒 **Type Safety**

- Strict TypeScript configuration with comprehensive type checking
- Type-safe environment variables and configuration
- Automated type generation for better developer experience

### ⚡ **Performance Optimizations**

- **Code Splitting** - Automatic route-based code splitting
- **Tree Shaking** - Dead code elimination for smaller bundles
- **Asset Optimization** - Automatic image and asset optimization
- **Modern Bundling** - ES2020+ target for modern browsers

## 🔧 Advanced Configuration

### **ESLint Type-Aware Rules**

For production applications, enable advanced TypeScript-aware linting:

<details>
<summary>Click to expand ESLint configuration</summary>

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Enhanced TypeScript rules
      tseslint.configs.recommendedTypeChecked,
      // For stricter type checking
      tseslint.configs.strictTypeChecked,
      // Stylistic consistency
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

</details>

### **React-Specific Linting**

Enhance React development with specialized linting rules:

<details>
<summary>Click to expand React ESLint setup</summary>

```bash
# Install React-specific ESLint plugins
pnpm add -D eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // React TypeScript optimized rules
      reactX.configs['recommended-typescript'],
      // React DOM specific rules
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

</details>

## 🧪 Testing Strategy

### **Unit Testing with Vitest**

- **Fast Execution** - Native ESM support with instant HMR
- **TypeScript Integration** - Zero-config TypeScript support
- **Coverage Reports** - Built-in code coverage analysis
- **Watch Mode** - Intelligent test re-running

### **E2E Testing with Playwright**

- **Cross-Browser** - Chrome, Firefox, Safari, and Edge support
- **Mobile Testing** - Device emulation and responsive testing
- **Visual Regression** - Screenshot comparison testing
- **Parallel Execution** - Fast test execution across multiple workers

## 🚀 Deployment

### **Build Optimization**

```bash
# Production build with optimizations
pnpm build

# Preview production build
pnpm preview
```

### **Environment Variables**

Create `.env` files for different environments:

```bash
# .env.local
VITE_API_URL=http://localhost:5173
VITE_APP_NAME=React Vite Production Kit

# .env.production
VITE_API_URL=https://api.yourdapp.com
VITE_APP_NAME=Your DApp
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Workflow**

- All commits trigger pre-commit hooks (linting, formatting, testing)
- Pull requests require passing CI/CD checks
- Code coverage must be maintained above 80%

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vite Team** - For the incredible build tool
- **React Team** - For the amazing framework
- **TypeScript Team** - For type safety excellence
- **Testing Community** - Vitest and Playwright teams

---

<div align="center">

**Built with ❤️ for the community**

[Report Bug](https://github.com/aamir-sh/react-vite-production-kit/issues) · [Request Feature](https://github.com/aamir-sh/react-vite-production-kit/issues) · [Documentation](https://github.com/aamir-sh/react-vite-production-kit/README.md)

</div>
