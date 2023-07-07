# Booksman

This is a backend application for managing books read by an individual. The application allows users to register books they have read and submit reviews once they have finished reading. This application is designed to be used by a single user.

## Database Schema
The application uses a PostgreSQL database with the following schema:

    CREATE TABLE "books" (
      "id" SERIAL NOT NULL,
      "title" TEXT NOT NULL,
      "author" TEXT NOT NULL,
      "publisher" TEXT NOT NULL,
      "purchaseDate" TIMESTAMP NOT NULL,
      "read" BOOLEAN NOT NULL DEFAULT(false),
      "grade" INTEGER,
      "review" TEXT,
    
      CONSTRAINT "books_pkey" PRIMARY KEY ("id")
    );
    
    INSERT INTO books ("title", "author", "publisher", "purchaseDate")
    VALUES ('Awesome Book', 'Awesome Author', 'Awesome Publisher', '2020-01-01');

## Features
- View all books registered.
- View details of a specific book.
- Add a new book to the collection.
- Submit a review for a book.
  
## Technology Stack
- Node.js
- Express.js
- PostgreSQL
- Prisma

