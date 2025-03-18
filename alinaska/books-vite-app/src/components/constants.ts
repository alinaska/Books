export const darkPurple = '#330033'
export const purple = '#663366'

export interface Book {
  printdisabled_s: string;
  bookId: string;
  workId: string;
  bookUrl: string;
  title: string;
  author_name: string | []; 
  cover_i: number;
  key: string;
  ratings_average: number; 
  first_sentence: string;
  number_of_pages_median: number;
  first_publish_year: number;
  person: [];
  place:[];
  subject: []
  }

  export interface Author {
    author_name: string;    
    author_key: string;    
    title: string;     
    cover_i: number;
    key: string;
    ratings_average: number; 
    
    }
  
  
  

  