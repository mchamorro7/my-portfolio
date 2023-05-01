export const defaultDataQuery = `
{
  allProject(limit: 4) {
    title,
    description,
    date,
    stack,
    code,
    demo,
    thumbnail {
      asset {
        url
      }
    }
  },
  allJob(sort: {_createdAt: DESC}) {
    logo {
      asset {
        url
      }
    },
    company,
    position,
    from,
    to,
    descriptionRaw
  }
}
`;

export const paginateProjectsQuery = (limit: number, offset: number) => `
{
  allProject(sort: { _createdAt: ASC },limit: ${limit}, offset: ${offset}) {
    title,
    description,
    date,
    stack,
    code,
    demo,
    thumbnail {
      asset {
        url
      }
    }
  },
}
`;