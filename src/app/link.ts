export interface CreateLink {
  url: string;
}

export interface Link extends CreateLink {
  short: string;
}

export interface LinkWithHits extends Link {
  hits: number;
}
