// export type Book = {
//   id: number;
//   title: string;
//   author: string;
//   publisher: string;
//   purchaseDate: Date;
//   read: boolean;
//   review: string;
//   grade: number;
// };

import { Book } from "@prisma/client";

export type CreateBook = Omit<Book, "id" | "read" | "review" | "grade">;