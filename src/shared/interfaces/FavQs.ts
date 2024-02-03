export interface AllQuotesResponse {
  last_page: boolean;
  quotes: Quote[];
  page: number;
}

export interface Quote {
  author_permalink: string;
  downvotes_count: number;
  favorites_count: number;
  upvotes_count: number;
  dialogue: boolean;
  private: boolean;
  source?: string;
  author: string;
  tags: string[];
  body: string;
  url: string;
  id: number;
}
