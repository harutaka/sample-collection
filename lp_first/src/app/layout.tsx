import "@mantine/core/styles.css"
import "./global.css"

import { MantineProvider, ColorSchemeScript } from "@mantine/core"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Profile",
  description: "This is my pforile",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
