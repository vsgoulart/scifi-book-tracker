"use strict";

export interface Author {
  readonly id: string;
  readonly name: string;
}

export interface Authors {
  readonly [propName: string]: Author;
}

export interface Book {
  readonly id: string;
  readonly title: string;
  readonly secondTitle: string;
  readonly wikipedia: string;
  readonly winner: boolean;
  readonly authors: Author[];
}

export interface Books {
  readonly [propName: string]: Book;
}

export interface AwardNomination {
  readonly year: number;
  readonly nominees: Book[];
}

export interface AwardNominations {
  readonly [propName: string]: AwardNomination;
}

export interface Award {
  (readonly propName: string): AwardNominations;
}

export interface Awards {
  readonly [propName: string]: Award;
}
