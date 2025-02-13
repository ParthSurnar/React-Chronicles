"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function MyDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Open Dialog
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />

        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[300px]">
          <Dialog.Title className="text-lg font-bold">My Dialog</Dialog.Title>
          <Dialog.Description className="text-gray-600 mt-2">
            This is a modal built with Radix UI.
          </Dialog.Description>

          <Dialog.Close className="absolute top-3 right-3">
            <Cross2Icon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
