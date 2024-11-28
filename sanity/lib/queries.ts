import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[ _type == "startup" && defined(slug.current) && !defined($textToSearch) || title match $textToSearch || category match $textToSearch || author->name match $textToSearch  ] | order(_createdAt desc){
    _id, 
    title, 
    description, 
    category, 
    image, 
    slug, 
    _createdAt, 
    views, 
    author -> {
      _id,
      name,
      image,
      bio
    }
}`);

export const START_BY_ID_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0] {
    _id, 
    title, 
    description, 
    category, 
    image, 
    slug, 
    _createdAt, 
    views, 
    pitch,  
    author -> {
      _id,
      username,
      name,
      image,
      bio,
    }
}`
);
