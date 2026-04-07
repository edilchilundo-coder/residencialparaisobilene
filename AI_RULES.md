# AI Rules & Project Guidelines

## Tech Stack
- **Framework**: React 18 with Vite for fast development and optimized builds.
- **Language**: TypeScript for robust type safety and better developer experience.
- **Styling**: Tailwind CSS for utility-first, responsive, and maintainable styling.
- **UI Components**: shadcn/ui (built on Radix UI primitives) for accessible and customizable components.
- **Icons**: Lucide React for a consistent and lightweight icon set.
- **Routing**: React Router DOM for client-side navigation and nested routing.
- **Data Fetching**: TanStack Query (React Query) for efficient server state management and caching.
- **Backend**: Supabase for authentication, real-time database, and file storage.
- **Forms**: React Hook Form combined with Zod for schema-based validation.
- **Notifications**: Sonner for sleek, toast-style user feedback.

## Library Usage Rules
- **UI Components**: Always check `src/components/ui/` first. Use shadcn/ui components for all standard UI elements. If a new component is needed, install it via shadcn/ui CLI or build it using Radix UI primitives and Tailwind.
- **Icons**: Exclusively use `lucide-react`. Do not introduce other icon libraries unless specifically requested.
- **Styling**: Use Tailwind CSS classes for all styling. Avoid CSS modules or plain CSS files unless defining global variables or complex animations in `src/index.css`.
- **State Management**: Use TanStack Query for all server-side data. Use React's `useState` or `useContext` for simple local or shared UI state. Avoid heavy state management libraries like Redux unless the complexity warrants it.
- **Forms**: All forms must use `react-hook-form` and be validated with a `zod` schema.
- **Backend**: All database and authentication logic must go through the Supabase client located in `src/integrations/supabase/`.
- **Navigation**: Use `react-router-dom` for all internal links. Use the `Link` component for SEO-friendly navigation.
- **Feedback**: Use `sonner` (via the `toast` utility) for success, error, and info notifications to the user.