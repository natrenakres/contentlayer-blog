"use client";
import { allPosts, Post } from 'contentlayer/generated'
import { testFunction } from "@/lib/index";

export default function Home() {
  const posts = allPosts;
  testFunction();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  )
}
