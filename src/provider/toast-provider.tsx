import { Toaster } from "@/components/ui/toaster"
import React, { type PropsWithChildren } from "react"

function ToastProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

export default ToastProvider
