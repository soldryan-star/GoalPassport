export type VancouverAreaGuide = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  whyItMatters: string[];
  stadiumConnection: { headline: string; rows: { label: string; value: string }[] };
  hotels: { name: string; note: string }[];
  foodAndNightlife: string[];
  transportation: string[];
  safety: string[];
};

export type VancouverTopicGuide = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  sections: { title: string; items: string[] }[];
};
