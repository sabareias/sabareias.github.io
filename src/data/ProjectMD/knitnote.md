**Knit Note** is a fiber-arts project tracker — create, edit, and track knitting and crochet projects with full CRUD, client- and server-side validation, and a simple card-based UI.

**[Live preview →](https://knitnote.vercel.app/)**

## Tech stack

| Layer    | Technology                  |
| -------- | --------------------------- |
| Frontend | React                       |
| Styling  | Bootstrap / React Bootstrap |
| Backend  | Express                     |
| Database | SQLite                      |

The **live site** runs a [Vercel-ready version](https://github.com/sabareias/knitnote/tree/main/knit-note-vercel) (same repo): Next.js (App Router), NextAuth with Google sign-in, Neon (PostgreSQL). Projects are private to your account.

## Features

- **CRUD** — Add projects (title, category, craft, optional pattern/yarn, dates), view as cards, edit in a modal, mark in progress or completed, and delete.
- **Validation** — Client-side error messages for invalid input (e.g. title length, required fields, date rules); server-side checks on POST/PATCH.

## Resources

- Logo and assets from [Canva](https://www.canva.com/) (free resources)
- [Scrollbar transition](https://stackoverflow.com/a/74050413) (Stack Overflow)
