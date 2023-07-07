import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  return await prisma.book.findMany();
}

export async function getBook(id: number) {
  return await prisma.book.findUnique({
    where: {
      id,
    },
  });
}

export async function createBook(book: CreateBook) {
  return await prisma.book.create({
    data: { ...book, purchaseDate: new Date(book.purchaseDate) },
  });
}

export async function reviewBook(bookReview: CreateReview) {
  const id = bookReview.bookId;
  return await prisma.book.update({
    data: {
      review: bookReview.review,
      grade: bookReview.grade,
      read: true,
    },
    where: {
      id,
    },
  });
}
