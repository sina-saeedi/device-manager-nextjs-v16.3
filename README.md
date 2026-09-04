# Device Manager

A lightweight device management dashboard built with Next.js and modern UI primitives. It lets you browse, search, filter, add, and remove network devices in a simple admin-style interface.

## Features

- Device list page with responsive card layout
- Search by device name using URL-based query params
- Status filtering for online, offline, and warning devices
- Add-device dialog with validation
- Delete-device confirmation flow
- Server actions for data updates and cache revalidation
- RTL-friendly Persian UI styling
- Tailwind-based design system with reusable UI components

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Base UI primitives
- React Hook Form + Zod validation
- Nuqs for URL search parameter state

## Project structure

- app/ — app router pages and global layout
- components/ — shared UI components
- features/device/ — device domain logic, actions, API mocks, and UI
- lib/ — utility helpers
- constants/ — navigation data

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

## Production build

```bash
npm run build
npm run start
```

## Notes

This project uses a mock in-memory device API for demonstration purposes. The data is updated client-side through server actions and revalidated for the device page.
