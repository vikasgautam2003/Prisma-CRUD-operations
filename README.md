# 📦 Next.js Prisma CRUD App

A simple CRUD (Create, Read, Update, Delete) application built with **Next.js** and **Prisma**, performing SQL-based operations in a clean and efficient way.

This project demonstrates basic database operations using modern tools, ideal for learning or quick prototyping.

---

## 🚀 Features

- ✅ Basic CRUD operations (Create, Read, Update, Delete)
- ✅ Powered by Prisma ORM with SQL database
- ✅ Built using Next.js (App Router or Pages Router)
- ✅ Clean and responsive UI (Tailwind CSS optional)
- ✅ API Routes or Server Actions for handling backend logic

---

## 🧱 Tech Stack

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL / MySQL / SQLite] — Any SQL database of your choice
- [Tailwind CSS](https://tailwindcss.com/) (if used)

---

## 🔧 Prisma Setup

1. Define your database schema in `prisma/schema.prisma`.

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}

npx prisma generate

npx prisma migrate dev --name init


