# Plasmo Template

This is a [Plasmo extension](https://docs.plasmo.com/) project template with integrated **TailwindCSS**, **shadcnui**, and **Supabase** support, created by Fabian Lessmann.

## Features

- 🔥 **Plasmo**: Fast and intuitive extension development framework.
- 🎨 **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- ✨ **shadcnui**: Beautiful, accessible components built with Radix UI.
- 💾 **Supabase**: Backend as a service with authentication, database, and storage capabilities.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [pnpm](https://pnpm.io/) (recommended) or npm installed.
- Supabase project and credentials (optional, for Supabase integration).

### Installation

First, clone the repository:

```bash
git clone https://github.com/your-username/plasmo-template.git
```

Navigate to the project directory:

```bash
cd plasmo-template
```

Install the dependencies:

```bash
pnpm install
# or
npm install
```

### Development

To run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the Chrome browser using Manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add an `options.tsx` file to the root of the project with a React component as the default export. Likewise, to add a content script, add a `content.ts` file to the root of the project and reload the extension in your browser.

### Using TailwindCSS

TailwindCSS is already configured in this template. To style your components, use the Tailwind utility classes directly in your JSX:

`tsx

<div className="p-4 bg-blue-500 text-white">
Hello, TailwindCSS!
</div>
`

You can customize Tailwind settings in the `tailwind.config.js` file.

### Using shadcnui

shadcnui components are included for building UI quickly. Example:

`tsx
import { Button } from "shadcn/ui/button"

function Example() {
return <Button>Click me!</Button>
}
`

Refer to the [shadcnui documentation](https://shadcn.dev/) for more components and usage examples.

### Using Supabase

If you want to use Supabase in your extension, set up your Supabase project and add your credentials to the `src/supabaseClient.ts` file:

`typescript
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://YOUR_SUPABASE_URL.supabase.co"
const supabaseKey = "YOUR_SUPABASE_ANON_KEY"

export const supabase = createClient(supabaseUrl, supabaseKey)
`

You can now use `supabase` to interact with your backend:

`typescript
const { data, error } = await supabase.from("table_name").select("*")
`

### Making a Production Build

To create a production build:

`bash
pnpm build

# or

npm run build
`

This will create a production bundle for your extension, ready to be zipped and published to the Chrome Web Store or other browser stores.

### Deployment

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Before using this action, make sure to build your extension and upload the first version to the store to establish the basic credentials.

Follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) for automated submission!

## Dependencies

Here is a list of key dependencies used in this project:

- **Plasmo**: Extension development framework.
- **React & React-DOM**: For building interactive UIs.
- **TailwindCSS**: Utility-first CSS framework.
- **shadcnui**: Accessible components based on Radix UI.
- **Supabase**: Backend as a service.

## License

This template is open-source and available under the MIT License.

---

thor: [Fabian Lessmann](mailto:fabianlessmann95@gmail.com)
