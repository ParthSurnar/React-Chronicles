"use client";
import React from "react";
import Link from "next/link";
import { Box, Progress, Flex, Text, Radio } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"; // ✅ Required for Radix UI Themes
// import MyDialog from "@/components/Dialog";
import * as Select from '@radix-ui/react-select';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400">
        {/* <MyDialog /> */}

        <Box maxWidth="300px" p="4" style={{ backgroundColor: "gray", borderRadius: "medium" }} >
          <Progress value={50} max={100} />
        </Box>
        <Select.Root defaultValue="apple">
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="grape" disabled>
                Grape
              </Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              <Select.Item value="carrot">Carrot</Select.Item>
              <Select.Item value="potato">Potato</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Link href="/about" className="font-semibold text-3xl armour">
          About
        </Link>
        <Link href="/contact" className="font-semibold text-3xl armour">
          Contact
        </Link>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center bg-purple-400">
        Second Page
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-400">
        Third Page
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-400">
        Fourth Page
      </div>
    </>
  );
}
