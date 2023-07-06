import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {
  const books = await prisma.books.findMany();
  return books;
}

export async function getBook(id: number) {
  const book = await prisma.books.findUnique({
    where: { id },
  });
  return book;
}

export async function createBook(book: CreateBook) {
  const { title, author, publisher, purchaseDate } = book;

  const createdBook = await prisma.books.create({
    data: {
      title,
      author,
      publisher,
      purchaseDate,
    },
  });

  return createdBook;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  const updatedBook = await prisma.books.update({
    where: { id: bookId },
    data: {
      grade,
      review,
      read: true,
    },
  });

  return updatedBook;
}