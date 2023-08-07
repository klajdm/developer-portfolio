import Layout from "@/components/Layout/Layout";
import Project from "@/components/Project";
import { sanityClient } from "@/sanity.config";
import React from "react";

export default function Projects({ projects }) {
  return (
    <>
      <Project projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const client = sanityClient;
    // Fetch data for skills, bio, and projects using the Sanity client
    const projects = await client.fetch(
      `*[_type=='project'] | order(_createdAt)`
    );

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    // Handle any errors that may occur during data fetching
    console.error("Error fetching data:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
}
