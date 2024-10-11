import { Button } from "@/components/ui/button"
import React from "react"

import "@/style.css"

import { useToast } from "./hooks/use-toast"
import ToastProvider from "./provider/toast-provider"

function Popup() {
  const { toast } = useToast()
  return (
    <div className="w-80 h-[500px] flex justify-center items-center flex-col p-6">
      <h2 className="text-2xl font-bold mb-4">Plasmo Template</h2>
      <Button
        variant="outline"
        className="self-stretch"
        onClick={() => {
          toast({
            variant: "default",
            title: "Hello!",
            description: "Nice to meet you :)"
          })
        }}>
        Button
      </Button>
    </div>
  )
}

function PopupRoot() {
  return (
    <ToastProvider>
      <Popup />
    </ToastProvider>
  )
}

export default PopupRoot
